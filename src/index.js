import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    // Tell MUI what's the font-size on the html element is.
    htmlFontSize: 10,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: "700",
        },
        h2: {
          fontWeight: "700",
        },
        h3: {},
        body1: {},
      },
    },
  },
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
