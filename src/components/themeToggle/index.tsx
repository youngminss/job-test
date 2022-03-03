import { css, useTheme } from '@emotion/react';
import { Theme } from '@src/shared/style/types';

const ThemeToggle = ({ mode, setToggle }: { mode: string; setToggle: () => void }) => {
  const theme = useTheme();

  return (
    <button css={ToggleContainer(theme)} onClick={setToggle}>
      {mode === 'dark' ? '🌚' : '🌞'}
    </button>
  );
};

export default ThemeToggle;

const ToggleContainer = (theme: Theme) => css`
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2em;
  height: 2em;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);
  font-size: 2rem;
  background-color: ${theme.fontMainColor};
`;
