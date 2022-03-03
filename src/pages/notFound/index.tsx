import { useNavigate } from 'react-router-dom';
import { css, useTheme } from '@emotion/react';

const NotFound = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-size: 1.5rem;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          height: 300px;
          padding: 0 20px;
        `}
      >
        <h1>Not founded 😥</h1>
        <span
          css={css`
            color: ${theme.fontSubColor};
            text-align: center;
          `}
        >
          Oops !{' '}
          <span
            css={css`
              color: ${theme.fontMainColor};
            `}
          >
            {window.location.href}
          </span>{' '}
          not exist !
        </span>
        <button
          css={css`
            padding: 5px 10px;
            border: 3px solid ${theme.fontMainColor};
            border-radius: 5px;
            color: ${theme.fontSubColor};
            font-size: 1.5rem;

            &:hover {
              background-color: ${theme.fontMainColor};
              color: ${theme.fontOppositeColor};
            }
          `}
          onClick={() => navigate('/')}
        >
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
