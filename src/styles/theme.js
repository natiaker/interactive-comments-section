import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(238, 40%, 52%)",
      light: "hsl(239, 57%, 85%)",
    },
    background: {
      default: "hsl(228, 33%, 97%)",
    },
    text: {
      primary: "hsl(211, 10%, 45%)",
      secondary: "hsl(212, 24%, 26%)",
    },
  },
  typography: {
    fontFamily: 'font-family: "Rubik", sans-serif',
  },
});

export default theme;
