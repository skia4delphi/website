import React from 'react';
import ReactDOM from 'react-dom';
import { NextUIProvider } from '@nextui-org/react';

import App from './components/App';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <NextUIProvider theme={theme}>
      <App />
    </NextUIProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
