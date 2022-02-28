import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    bgColor: string;
    fontMainColor: string;
    fontSubColor: string;
    fontOppositeColor: string;
  }
}
