import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getTest } from '@service/testService';
import { storage } from '@utils/storage';
import { TEST_TITLE } from '@common/constants';
import Spinner from '@components/spinner';
import NotFound from '@pages/notFound';
import { QuestionItem, QuestionTwoItem } from './types';
import Question from '@components/questionItem';

const Test6 = () => {
  const queryNumber = storage.getItem('test-number');
  const { isLoading, isError, data } = useQuery(`test=${queryNumber}`, async () => await getTest(queryNumber));

  const [checkList, setCheckList] = useState<{ [key: string]: string }>({});
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [isNotFirstQuestion, setIsNotFirstQuestion] = useState(false);
  const [isLastQuestion, setIsLastQuestion] = useState(false);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const convertedCheckList: Array<Array<string>> = Object.entries(checkList);
    const queryString = convertedCheckList.map(([key, value]) => `B${key}=${value}`).join(' ');
    console.log(queryString);
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
      <h1>{TEST_TITLE[queryNumber]}</h1>

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
