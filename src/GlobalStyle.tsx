import { css } from '@emotion/react';
import { Theme } from './shared/style/types';

const GlobalStyle = (theme: Theme) => css`
  @font-face {
    font-family: 'HSSaemaul-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/HSSaemaul-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smooth: antialiased;
  }

  html {
    font-family: HSSaemaul-Regular, 'sans-serif';
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  input,
  textarea,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  body {
    background-color: ${theme.bgColor};
  }

  #root {
    position: relative;
    height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${theme.fontMainColor};
  }

  p {
    color: ${theme.fontSubColor};
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    outline: none;

    &:active,
    &:hover {
      text-decoration: none;
      outline: 0;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  input {
    outline: none;
  }
`;

export default GlobalStyle;
