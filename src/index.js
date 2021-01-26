import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#e6d335",
      main: "#e0c903",
      dark: "#ccb80b",
      contrastText: "#1e4d79",
    },
    secondary: {
      light: "#568bbe",
      main: "#2c6eae",
      dark: "#1e4d79",
      contrastText: "#d7dfe4",
    },
    bgGrey: {
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
      fontSize: "1.9em",
    },
    h2: {
      fontFamily: "'Merriweather', serif",
      fontWeight: "700",
      fontSize: "1.5em",
    },
    h3: {
      fontFamily: "'Merriweather', serif",
      fontWeight: "700",
      fontSize: "1em",
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
      maxWidth: "650px",
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
  <Router basename="/portfolioReactApp">
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>
);

ReactDOM.render(app, document.getElementById("root"));
