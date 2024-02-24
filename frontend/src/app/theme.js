"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
      fontStyle: "normal",
      fontFamily: 'monospace'
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 500,
      fontStyle: "normal",
      fontFamily: 'monospace'
    },
    h3: {
      fontSize: "1.2rem",
      fontWeight: 500,
      fontStyle: "normal",
      fontFamily: 'monospace'
    },
    h4: {
      fontSize: "1rem",
      fontWeight: 500,
      fontStyle: "normal",
      fontFamily: 'monospace'
    },
    h5: {
      fontSize: "0.875rem",
      fontWeight: 500,
      fontStyle: "normal",
      fontFamily: 'monospace'
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      fontStyle: "normal",
      fontFamily: 'monospace'
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      fontStyle: "normal",
      fontFamily: 'monospace'
    },
  },
});

export default theme;
