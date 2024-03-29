import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { PostProvider } from "./PostContext.jsx";
// import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

// eslint-disable-next-line react-refresh/only-export-components
const THEME = createTheme({
  typography: {
    fontFamily: `"Cairo", sans-serif`,
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={THEME}>
        <PostProvider>
          <App />
        </PostProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
