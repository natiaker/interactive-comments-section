import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, css } from "@emotion/react";
import theme from "./styles/theme";
import { GlobalStyles } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={css`
          body {
            background-color: ${theme.palette.background.default};
          }
        `}
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
