import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider as Provider } from "@mui/material";

const bodyFontFamily =
  "Roboto, -apple-system, 'Open Sans', Raleway, sans-serif";
const headingFontFamily = `Rubik, ${bodyFontFamily}`;

const theme = createTheme({
  palette: {
    primary: {
      main: "#97dd9e",
      dark: "#79b57f",
    },
    secondary: {
      main: "#ffffff",
      dark: "#c5c5c5",
    },
    text: {
      primary: "#303030",
      secondary: "#535353",
      button: "#ffffff",
      light: "#ffffff",
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
      fontSize: 32,
      lineHeight: "38px",
      fontWeight: "500",
    },
    h5: {
      fontSize: 23,
      lineHeight: 1.15,
    },
    h6: {
      fontFamily: bodyFontFamily,
      lineHeight: "1.1em",
    },
    body1: {
      fontSize: 22,
      lineHeight: "25.8px",
    },
    button: {
      fontSize: 21,
      textTransform: "uppercase",
    },
    subtitle1: {
      fontFamily: headingFontFamily,
      fontSize: 25,
      lineHeight: 1.15,
    },
    subtitle2: {
      fontSize: 24,
      lineHeight: "28.1px",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        scrollBehavior: "smooth",
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          padding: "0 34px",
          borderRadius: "50px",
        },
      },
    },
    MuiDivider: {
      defaultProps: { component: "span" },
      styleOverrides: {
        root: {
          display: "block",
          width: "95%",
          height: "1.5px",
          margin: "0 auto",
          backgroundColor: "black",
          opacity: 0.7,
        },
      },
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
