import React, { useState, useRef, SyntheticEvent, MutableRefObject } from 'react';
import { useNavigate } from 'react-router-dom';
import { setGenderToStorage } from '@service/introService';
import { GENDER_TO_NUMBER, TestContent, TEST_CONTENTS } from '@common/constants';
import Button from '@shared/components/button';

const IntroPage = () => {
  const navigation = useNavigate();
  const [isReady, setIsReady] = useState(false);
  const inputRefs = useRef([]) as MutableRefObject<HTMLInputElement[]>;

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    // 검사 선택지 슬라이드로 이동하기
  };

  const checkHandler = (e: SyntheticEvent) => {
    if (!(e.target instanceof HTMLInputElement)) {
      return;
    }

    const $targetEl = e.target;
    if ($targetEl === inputRefs.current[0]) {
      inputRefs.current[1].checked = false;
    }

    if ($targetEl === inputRefs.current[1]) {
      inputRefs.current[0].checked = false;
    }

    if ($targetEl.checked) {
      setGenderToStorage($targetEl.value);
    }

    const newReady = inputRefs.current[0].checked || inputRefs.current[1].checked;
    setIsReady(newReady);
  };

  const handleClick = (e: React.MouseEvent) => {
    const $target = e.target as HTMLButtonElement;
    const queryNumber = $target.value;
    const testName = $target.textContent;
    navigation('/app', { state: { queryNumber: queryNumber, testName: testName } });
  };

  return (
    <main>
      <h1>커리어넷 OPEN API 직업심리검사</h1>
      <div>
        <article>
          <p>
            커리어넷에서 제공하는 Open API 기반으로 진로 의사결정에 도움이 되는 테스트를 체험할 수 있습니다. 검사는
            최대한 솔직하고 직관적인 답변을 골라주시면 더욱 만족스러운 결과를 받아볼 수 있습니다. 감사합니다.
          </p>
        </article>

        <form onSubmit={submitHandler} onChange={checkHandler}>
          <span>본인의 성별을 체크하세요.</span>
          <div>
            <div>
              <input
                type="checkbox"
                id="gender-male"
                name="gender"
                value={GENDER_TO_NUMBER.MALE}
                ref={(el) => (inputRefs.current[0] = el as HTMLInputElement)}
              />
              <label htmlFor="gender-male">👱‍♂️</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="gender-female"
                name="gender"
                value={GENDER_TO_NUMBER.FEMALE}
                ref={(el) => (inputRefs.current[1] = el as HTMLInputElement)}
              />
              <label htmlFor="gender-female">👱‍♀️</label>
            </div>
          </div>

          <Button type="submit" disabled={!isReady}>
            시작하기
          </Button>
        </form>
      </div>

      <div>
        <article>
          <p>
            자신을 이해하는데 도움이 되는 심리검사는 진로 의사결정에 유용한 정보를 제공합니다. 진행할 테스트를
            선택해주세요.
          </p>
        </article>

        <ul>
          {TEST_CONTENTS.map((content: TestContent, idx: number) => {
            return (
              <li key={idx}>
                <button type="button" value={content.queryNumber} onClick={handleClick}>
                  {content.text}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default IntroPage;
