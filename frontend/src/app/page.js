import Image from "next/image";
import ButtonMain from "./components/Button";
import theme from "./theme";
import { ThemeProvider, Typography } from "@mui/material";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography variant="h1">Home H1 Section</Typography>
        <Typography variant="h2">H2 Section</Typography>
        <Typography variant="h3">H3 Section</Typography>
        <Typography variant="h4">H4 Section</Typography>
        <Typography variant="h5">H5 Section</Typography>
        <Typography variant="body1">Welcome to the Praecipio Hackathon p section</Typography>
        <ButtonMain onClick={() => alert('Button Clicked')}>Button</ButtonMain>
      </div>
    </ThemeProvider>
  );
}
