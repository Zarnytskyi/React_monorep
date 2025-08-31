import React, { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Typography } from "@mui/material";
import styled from "@emotion/styled";

const ToggleButton = styled("button")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  border: "none",
  padding: "12px 24px",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
  marginTop: "20px",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#1976d2",
      },
      background: {
        default: "#f5f5f5",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#90caf9",
      },
      background: {
        default: "#121212",
      },
    },
  });

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Typography variant="h4" gutterBottom>
          {darkMode ? "Тёмная тема" : "Светлая тема"}
        </Typography>
        <ToggleButton onClick={toggleTheme}>
          Переключить тему
        </ToggleButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
