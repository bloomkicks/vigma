import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as Provider, createTheme } from "@mui/material/styles";

const bodyFontFamily =
  "Roboto, -apple-system, 'Open Sans', Raleway, sans-serif";
const bigHeadingFontFamily = `Raleway, ${bodyFontFamily}`;
const headingFontFamily = `Rubik, ${bodyFontFamily}`;

const theme = createTheme({
  palette: {
    primary: {
      main: "#97dd9e",
      dark: "#79b57f",
      contrastText: "#303030",
    },
    secondary: {
      main: "#97D0DD",
      dark: "#2B6EAB",
      // main: "#ffffff",
      // dark: "#d5d5d5",
      // contrastText: "#535353",
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
    fontFamily: bodyFontFamily,
    allVariants: {
      fontFamily: bodyFontFamily,
      fontWeight: "400",
    },
    h1: {
      fontFamily: bigHeadingFontFamily,
      // fontSize: 48,
      // lineHeight: "56px",
      fontSize: "5rem",
      lineHeight: 1.12,
      fontWeight: "800",
    },
    h2: {
      fontFamily: bigHeadingFontFamily,
      // fontSize: 38,
      // lineHeight: "45px",
      fontSize: "2.3rem",
      lineHeight: 1.184,
      fontWeight: "700",
    },
    h3: {
      fontFamily: bodyFontFamily,
      // fontSize: 26,
      // lineHeight: "30.8px",
      fontSize: "1.625rem",
      lineHeight: 1.185,
      fontWeight: "500",
    },
    h4: {
      fontFamily: bodyFontFamily,
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
      fontSize: "1.35rem",
      lineHeight: 1.175,
    },
    body2: {
      // fontSize: 20,
      // lineHeight: "23px",
      fontSize: "1.2rem",
      lineHeight: 1.15,
    },
    button: {
      // fontSize: 21,
      fontSize: "1.15rem",
      lineHeight: 1.175,
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
      fontSize: "1.48rem",
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
        root: ({ ownerState }) => {
          let result = {};
          if (ownerState.variant === "contained") {
            result = {
              padding: "9px 35px",
              borderRadius: "50px",
            };
            if (ownerState.color === "primary") {
              result["&:hover, &:focus"] = {
                backgroundColor: "rgb(135, 205, 142)",
              };
            }
          }
          return result;
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          display: "block",
          width: "95%",
          height: "1.4px",
          margin: "0 auto",
          backgroundColor: "black",
          opacity: 0.3,
          border: "none",
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
