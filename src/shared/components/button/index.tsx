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
  color: ${theme.fontMainColor};
  border: ${`1px solid ${theme.fontMainColor}`};
`;
