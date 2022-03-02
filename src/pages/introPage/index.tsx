import React, { useState } from 'react';
import { css, useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { GENDER_TO_NUMBER, TestContent, TEST_CONTENTS, TARGET_SERIAL_NUMBER, ERROR_MESSAGES } from '@common/constants';
import { UserFormData } from '@service/types';
import Button from '@shared/components/button';
import { Theme } from '@src/shared/style/types';
import { utilsTheme } from '@src/shared/style/Theme';

const IntroPage = () => {
  const theme = useTheme();
  const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    defaultValues: {
      qestrnSeq: '',
      gender: '',
      name: '',
      email: '',
      school: '',
      grade: '',
    },
  });
  const [translateX, setTranslateX] = useState(0);

  const onSubmit: SubmitHandler<UserFormData> = (data) => {
    navigation(`/test/${data.qestrnSeq}`, { state: data, replace: true });
  };

  const onClick = () => {
    setTranslateX(translateX === 0 ? 375 : 0);
  };

  return (
    <main css={CustomContainerStyle()}>
      <h1 css={titleStyle()}>커리어넷 OPEN API 직업심리검사</h1>
      <form onSubmit={handleSubmit(onSubmit)} css={FormContainer()}>
        <div id="slide-1" css={slideContainer(translateX)}>
          <div>
            <h2>진행할 테스트를 선택해주세요.</h2>
          </div>
          <ul>
            {TEST_CONTENTS.map((testContent: TestContent, idx: number) => {
              return (
                <li key={idx}>
                  <input
                    css={CustomRadioStyle(theme)}
                    type="radio"
                    id={`test-${testContent.queryNumber}`}
                    value={testContent.queryNumber}
                    {...register('qestrnSeq', { required: true })}
                    onClick={onClick}
                  />
                  <label htmlFor={`test-${testContent.queryNumber}`}>{testContent.text}</label>
                </li>
              );
            })}
          </ul>
          {errors.qestrnSeq?.type === 'required' && (
            <span
              css={css`
                color: red;
              `}
            >
              {ERROR_MESSAGES.testContent}
            </span>
          )}
        </div>

        <div id="slide-2" css={slideContainer(translateX)}>
          <div>
            <h2>필요한 정보를 입력해주세요.</h2>
          </div>

          <div>
            <div>
              <label htmlFor="user-name">이름</label>
              <input type="text" id="user-name" {...register('name', { required: true })} />
            </div>
            <div>
              <label htmlFor="user-name">이메일</label>
              <input type="email" id="user-email" {...register('email')} />
            </div>
            {errors.name?.type === 'required' && (
              <span
                css={css`
                  color: red;
                `}
              >
                {ERROR_MESSAGES.name}
              </span>
            )}
          </div>

          <div>
            <span>성별 선택</span>
            <div
              css={css`
                ${utilsTheme.flexCenterDirectionRow}
              `}
            >
              <div>
                <input
                  css={CustomRadioStyle(theme)}
                  type="radio"
                  id="gender-male"
                  value={GENDER_TO_NUMBER.MALE}
                  {...register('gender', { required: true })}
                />
                <label htmlFor="gender-male">👱‍♂️</label>
              </div>
              <div>
                <input
                  css={CustomRadioStyle(theme)}
                  type="radio"
                  id="gender-female"
                  value={GENDER_TO_NUMBER.FEMALE}
                  {...register('gender', { required: true })}
                />
                <label htmlFor="gender-female">👱‍♀️</label>
              </div>
            </div>

            {errors.gender?.type === 'required' && (
              <span
                css={css`
                  color: red;
                `}
              >
                {ERROR_MESSAGES.gender}
              </span>
            )}
          </div>

          <div>
            <span>소속 선택</span>
            <ul>
              {TARGET_SERIAL_NUMBER.map((target, idx) => {
                return (
                  <li key={idx}>
                    <input
                      css={CustomRadioStyle(theme)}
                      type="radio"
                      value={target.targetSerial}
                      id={`target-user-${target.targetSerial}`}
                      {...register('trgetSe', { required: true })}
                    />
                    <label htmlFor={`target-user-${target.targetSerial}`}>{target.text}</label>
                  </li>
                );
              })}
            </ul>
            {errors.trgetSe?.type === 'required' && (
              <span
                css={css`
                  color: red;
                `}
              >
                {ERROR_MESSAGES.targetSe}
              </span>
            )}
          </div>

          <Button type="submit">시작하기</Button>
        </div>
      </form>
    </main>
  );
};

export default IntroPage;

const CustomContainerStyle = () => css`
  ${utilsTheme.flexCenterDirectionColumn};
  ${utilsTheme.container};
`;

const titleStyle = () => css`
  font-size: 2.5rem;
`;

const FormContainer = () => css`
  width: 375px;
  display: flex;

  overflow-x: hidden;
  text-align: center;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
`;

const slideContainer = (translateX: number) => css`
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 375px;
  height: 100%;
  transform-origin: center center;
  transform: translateX(${-translateX}px);
  transition: transform 0.5s;
  gap: 10px;
`;

const CustomRadioStyle = (theme: Theme) => css`
  & {
    display: none;
  }

  & + label {
    color: ${theme.fontSubColor};
    font-size: 1.5rem;
    cursor: pointer;
  }

  &:hover + label,
  &:checked + label {
    background-color: ${theme.fontMainColor};
    color: ${theme.fontOppositeColor};
  }
`;
