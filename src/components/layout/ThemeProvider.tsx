import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as Provider, createTheme } from "@mui/material/styles";

const bodyFontFamily =
  "Roboto, -apple-system, 'Open Sans', Raleway, sans-serif";
const headingFontFamily = `Rubik, ${bodyFontFamily}`;

const theme = createTheme({
  palette: {
    primary: {
      main: "#97dd9e",
      dark: "#79b57f",
      contrastText: "#303030",
    },
    secondary: {
      main: "#ffffff",
      dark: "#c9c9c9",
      contrastText: "#535353",
    },
    info: {
      main: "#3b3983",
    },
    background: {
      default: "transparent",
    },
  },
  typography: {
    htmlFontSize: 16,
    allVariants: {
      fontFamily: bodyFontFamily,
    },
    h1: {
      fontFamily: headingFontFamily,
      // fontSize: 48,
      // lineHeight: "56px",
      fontSize: "3.2rem",
      lineHeight: 1.167,
      fontWeight: "500",
    },
    h2: {
      fontFamily: headingFontFamily,
      // fontSize: 38,
      // lineHeight: "45px",
      fontSize: "2.375rem",
      lineHeight: 1.184,
      fontWeight: "500",
    },
    h3: {
      fontFamily: headingFontFamily,
      // fontSize: 26,
      // lineHeight: "30.8px",
      fontSize: "1.625rem",
      lineHeight: 1.185,
      fontWeight: "500",
    },
    h4: {
      fontFamily: headingFontFamily,
      // fontSize: 32,
      // lineHeight: "38px",
      fontSize: "2rem",
      lineHeight: 1.188,
      fontWeight: "500",
    },
    h5: {
      // fontSize: 23,
      fontSize: "1.4375rem",
      lineHeight: 1.15,
    },
    h6: {
      fontFamily: bodyFontFamily,
      fontSize: "1.3rem",
      lineHeight: 1.2,
    },
    body1: {
      // fontSize: 22,
      // lineHeight: "25.8px",
      fontSize: "1.375rem",
      lineHeight: 1.173,
    },
    body2: {
      // fontSize: 20,
      // lineHeight: "23px",
      fontSize: "1.25rem",
      lineHeight: 1.15,
    },
    button: {
      // fontSize: 21,
      fontSize: "1.3125rem",
      lineHeight: 1.9,
      textTransform: "uppercase",
    },
    subtitle1: {
      fontFamily: headingFontFamily,
      // fontSize: 25,
      fontSize: "1.5625rem",
      lineHeight: 1.2,
    },
    subtitle2: {
      // fontSize: 24,
      fontSize: "1.5rem",
      lineHeight: 1.2,
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

const ThemeProvider = (props: any) => {
  return (
    <Provider theme={theme}>
      <CssBaseline />
      {props.children}
    </Provider>
  );
};

export default ThemeProvider;
