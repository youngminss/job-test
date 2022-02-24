import React from 'react';
import ReactDOM from 'react-dom';
import App from '@src/App';
import GlobalStyle from '@src/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
