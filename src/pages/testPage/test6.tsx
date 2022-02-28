import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { API_KEY } from '@service/root';
import { getTest, postTest } from '@service/testService';
import { TEST_TITLE } from '@common/constants';
import Question from '@components/questionItem';
import Spinner from '@components/spinner';
import NotFound from '@pages/notFound';
import { QuestionItem, QuestionTwoItem } from './types';
import { UserFormData } from '@service/types';

const Test6 = () => {
  const location = useLocation();
  const state = location?.state as UserFormData;
  const { isLoading, isError, data } = useQuery(`test-${state.qestrnSeq}`, async () => await getTest(state.qestrnSeq));
  const [checkList, setCheckList] = useState<{ [key: string]: string }>({});
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [isNotFirstQuestion, setIsNotFirstQuestion] = useState(false);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const navigation = useNavigate();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const convertedCheckList: Array<Array<string>> = Object.entries(checkList);
    const queryString = convertedCheckList.map(([key, value]) => `B${key}=${value}`).join(' ');

    const postData = {
      apikey: API_KEY,
      qestrnSeq: state.qestrnSeq,
      trgetSe: state.trgetSe,
      name: state.name,
      gender: state.gender,
      school: state.school,
      grade: state.grade,
      email: state.email,
      startDtm: String(new Date().getTime()),
      answers: queryString,
    };

    const data = await postTest(state.qestrnSeq, postData);
    navigation(`/report`, {
      state: {
        inspct: data.RESULT?.inspctSeq,
        url: data.RESULT?.url,
        ...state,
      },
      replace: true,
    });
  };

  const clickHandler = (e: React.MouseEvent) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return;
    }

    const pageNumberOffset = Number(e.target.value);
    setCurrentPageNumber(currentPageNumber + pageNumberOffset);
    setIsLastQuestion(currentPageNumber + pageNumberOffset >= 5 ? true : false);
    setIsNotFirstQuestion(currentPageNumber !== 0 ? true : false);
  };

  const changeHandler = (e: React.FormEvent) => {
    const $target = e.target as HTMLInputElement;
    const key = $target.dataset.qitemno as string;
    const value = $target.value as string;

    setCheckList({ ...checkList, [key]: value });
  };

  if (isLoading) return <Spinner />;
  if (isError) return <NotFound />;
  return (
    <div>
      <h1>{TEST_TITLE[state.qestrnSeq]}</h1>

      <form onSubmit={submitHandler} onChange={changeHandler}>
        {data.RESULT.map((questionItem: QuestionItem, idx: number) => {
          const usefulQuestionItem = Object.entries(questionItem)
            .filter((item) => item[1] !== null)
            .reduce((obj, item) => ({ ...obj, [item[0]]: item[1] }), {}) as QuestionTwoItem;

          return <Question key={idx} item={usefulQuestionItem} />;
        })}

        <div>
          {isNotFirstQuestion && (
            <button type="button" value={-1} onClick={clickHandler}>
              이전
            </button>
          )}
          {!isLastQuestion && (
            <button type="button" value={1} onClick={clickHandler}>
              다음
            </button>
          )}
          {isLastQuestion && <button type="submit">제출</button>}
        </div>
      </form>
    </div>
  );
};

export default Test6;
