import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import theme from './theme';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const root = document.getElementById('root');
render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>, root)
;
