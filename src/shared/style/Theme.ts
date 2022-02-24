import { Theme, Mode } from './types';

const lightTheme: Theme = {
  fontMainColor: '#1E4174',
  fontSubColor: '#000000',
  bgColor: '#DDA94B',
};

const darkTheme: Theme = {
  fontMainColor: '#DDA94B',
  fontSubColor: '#ffffff',
  bgColor: '#1E4174',
};

const theme: Mode = {
  light: lightTheme,
  dark: darkTheme,
};

export default theme;
