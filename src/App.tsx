import { Global, ThemeProvider } from '@emotion/react';
import Router from '@src/Routes';
import ThemeToggle from '@src/components/themeToggle';
import GlobalStyle from '@src/GlobalStyle';
import { default as THEME } from '@shared/style/Theme';
import useTheme from '@hooks/useTheme';

const App = () => {
  const [theme, onToggle] = useTheme();

  return (
    <ThemeProvider theme={THEME[theme]}>
      <Global styles={GlobalStyle(THEME[theme])} />
      <Router />
      <ThemeToggle mode={theme} setToggle={onToggle} />
    </ThemeProvider>
  );
};

export default App;
