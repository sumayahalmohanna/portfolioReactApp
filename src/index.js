import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#e6d335",
      main: "#e0c903",
      dark: "#9c8c02",
      contrastText: "#0c0e14",
    },
    secondary: {
      light: "#568bbe",
      main: "#2c6eae",
      dark: "#1e4d79",
      contrastText: "#d7dfe4",
    },
    bgWhite: {
      light: "#d7dfe4",
      main: "#d7dfe4",
      dark: "#d7dfe4",
      contrastText: "#0c0e14",
    },
    bgTouchOfBlue: {
      light: "#ccdbe1",
      main: "#ccdbe1",
      dark: "#ccdbe1",
      contrastText: "#0c0e14",
    },
    bgLightBlue: {
      light: "#a0c4dd",
      main: "#a0c4dd",
      dark: "#a0c4dd",
      contrastText: "#0c0e14",
    },
    bgBlack: {
      light: "#0c0e14",
      main: "#0c0e14",
      dark: "#0c0e14",
      contrastText: "#d7dfe4",
    },
  },
  typography: {
    fontFamily: "'Merriweather', 'Roboto'",
    h1: {
      fontFamily: "'Merriweather', serif",
      fontWeight: "900",
      fontSize: "2em",
    },
    h2: {
      fontFamily: "'Merriweather', serif",
      fontWeight: "700",
      fontSize: "1.5em",
    },
    h4: {
      fontFamily: "'Merriweather', serif",
      fontWeight: "700",
      fontSize: ".8em",
    },
    body1: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: "400",
      fontSize: ".8em",
      lineHeight: "1.5",
    },
    body2: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: "300",
      fontSize: ".7em",
      lineHeight: "1.5",
    },
    button: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: "600",
    },
  },
});

const app = (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  </BrowserRouter>
);

ReactDOM.render(app,
  document.getElementById('root')
);
