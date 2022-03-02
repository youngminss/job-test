import React from 'react';
import { css, useTheme } from '@emotion/react';
import { Theme } from '@shared/style/types';

const RadioButton = ({
  id,
  name,
  value,
  labelText,
  ...props
}: {
  id: string;
  name: string;
  value: string;
  labelText: string;
}) => {
  const theme = useTheme();

  return (
    <>
      <input css={CustomRadioStyle(theme)} type="radio" id={id} name={name} value={value} {...props} />
      <label htmlFor={id}>{labelText}</label>
    </>
  );
};

export default RadioButton;

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
