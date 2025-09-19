"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#03396c",
      // light: "",
      // dark: "",
    },
  },
  typography: {
    fontFamily: "var(--font-cormorant), serif",
  },
});

export default theme;
