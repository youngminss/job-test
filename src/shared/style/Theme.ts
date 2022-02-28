import { css, SerializedStyles } from '@emotion/react';
import { Mode, Theme } from './types';

const lightTheme: Theme = {
  fontMainColor: '#1E4174',
  fontSubColor: '#000000',
  fontOppositeColor: '#ffffff',
  bgColor: '#DDA94B',
};

const darkTheme: Theme = {
  fontMainColor: '#DDA94B',
  fontSubColor: '#ffffff',
  fontOppositeColor: '#000000',
  bgColor: '#1E4174',
};

export const utilsTheme: { [key: string]: SerializedStyles } = {
  container: css`
    height: 100%;
  `,
  flex: css`
    display: flex;
  `,
  flexCenterDirectionRow: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexCenterDirectionColumn: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  flexRowCenter: css`
    display: flex;
    justify-content: center;
  `,
  flexColumnCenter: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

const theme: Mode = {
  light: lightTheme,
  dark: darkTheme,
};

export default theme;
