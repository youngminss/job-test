import { ReactNode } from 'react';
import { css, useTheme } from '@emotion/react';
import { Theme } from '@src/shared/style/types';

const Button = ({
  children,
  disabled,
  type,
  clickHandler,
}: {
  children?: ReactNode;
  disabled?: any;
  type: any;
  clickHandler?: () => void;
}) => {
  const theme = useTheme();

  return (
    <button css={CustomButton(theme)} type={type} onClick={clickHandler} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;

const CustomButton = (theme: Theme) => css`
  margin: 0 auto;
  color: ${theme.fontMainColor};
  border: 3px solid ${theme.fontMainColor};
  border-radius: 5px;
  font-size: 1.25rem;
  padding: 5px;

  &:hover {
    background-color: ${theme.fontMainColor};
    color: ${theme.fontOppositeColor};
  }
`;
