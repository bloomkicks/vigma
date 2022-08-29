import { createTheme, ThemeProvider as Provider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#97dd9e",
    },
    text: {
      primary: "#303030",
      secondary: "#535353",
      button: "#ffffff",
    },
    info: {
      main: "#3b3983",
    },
    background: {
      default: "transparent",
    },
  },
  typography: {
    allVariants: {
      fontFamily:
        "Roboto, 'Segoe UI', Raleway, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
    h1: {
      fontSize: "1.8rem",
      fontWeight: "500",
    },
    h2: {
      fontWeight: "400",
      fontSize: "1.3rem",
    },
    h3: {
      fontSize: "1.1rem",
    },
    h6: {
      fontFamily: "'Didact Gothic', Cambria, sans-serif",
    },
  },
});

const ThemeProvider = (props) => {
  return <Provider theme={theme}>{props.children}</Provider>;
};

export default ThemeProvider;
