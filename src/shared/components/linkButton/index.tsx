import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { css, useTheme } from '@emotion/react';
import { Theme } from '@src/shared/style/types';

const LinkButton = ({ path, children }: { path: string; children: ReactNode }) => {
  const theme = useTheme();

  return (
    <Link to={path} css={CustomLink(theme)}>
      {children}
    </Link>
  );
};

export default LinkButton;

const CustomLink = (theme: Theme) => css`
  color: ${theme.fontMainColor};
  border: ${`1px solid ${theme.fontMainColor}`};
`;
