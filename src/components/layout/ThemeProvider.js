import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider as Provider } from "@mui/material";

const bodyFontFamily =
  "Roboto, -apple-system, 'Open Sans', Raleway, sans-serif";
const headingFontFamily = `Rubik, ${bodyFontFamily}`;

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
      fontFamily: bodyFontFamily,
    },
    h1: {
      fontFamily: headingFontFamily,
      fontSize: 48,
      lineHeight: "56.9px",
      fontWeight: "500",
    },
    h2: {
      fontFamily: headingFontFamily,
      fontSize: 38,
      lineHeight: "45px",
      fontWeight: "600",
    },
    h3: {
      fontFamily: headingFontFamily,
      fontSize: 26,
      lineHeight: "30.8px",
      fontWeight: "600",
    },
    h4: {
      fontFamily: headingFontFamily,
      fontSize: "1.05rem",
      fontWeight: "500",
    },
    h6: {
      fontFamily: headingFontFamily,
      lineHeight: "1.1em",
    },
    body1: {
      fontSize: 24,
      lineHeight: "28.1px",
    },
    body2: {
      fontSize: 22,
      lineHeight: "25.8px",
    },
    button: {
      fontSize: 21,
      lineHeight: "24.6px",
      textTransform: "uppercase",
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
