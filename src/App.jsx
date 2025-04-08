import React from "react";
import LandingPage from "./components/LandingPage";
import "./styles.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <LandingPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
