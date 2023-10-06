import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: "#C1C1C1",
      main: "#000000",
      dark: "#C1C1C1",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffffff",
      main: "#383acf",
      dark: "#383acf",
      contrastText: "#fff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: '"DM Sans", sans-serif',
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        fontFamily: '"DM Sans",sans-serif',
        fontSize: "18px",
        lineHeight: "26px",
      },
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
