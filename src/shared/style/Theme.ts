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
  flexBetween: css`
    display: flex;
    justify-content: space-between;
  `,
  m_row_10: css`
    margin: 10px 0;
  `,
  m_row_20: css`
    margin: 20px 0;
  `,
  p_row_10: css`
    padding: 10px 0;
  `,
  p_row_20: css`
    padding: 20px 0;
  `,
  m_col_10: css`
    margin: 0px 10px;
  `,
  m_col_20: css`
    margin: 0px 20px;
  `,
  p_col_10: css`
    padding: 0px 10px;
  `,
  p_col_20: css`
    padding: 0px 20px;
  `,
};

const theme: Mode = {
  light: lightTheme,
  dark: darkTheme,
};

export default theme;
