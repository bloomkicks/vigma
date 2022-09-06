import CssBaseline from "@mui/material/CssBaseline";
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
      light: "#fff",
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
      fontFamily: "Roboto, Raleway, 'Open Sans', 'Helvetica Neue', sans-serif",
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
    h4: {
      fontSize: "1.05rem",
      fontWeight: "500",
    },
    h6: {
      lineHeight: "1.1em",
      fontFamily: "'Didact Gothic', Cambria, sans-serif",
    },
  },
});

const ThemeProvider = (props) => {
  return (
    <Provider theme={theme}>
      <CssBaseline />
      {props.children}
    </Provider>
  );
};

export default ThemeProvider;
