export interface Theme {
  bgColor: string;
  fontMainColor: string;
  fontSubColor: string;
}

export interface Mode {
  light: Theme;
  dark: Theme;
}
