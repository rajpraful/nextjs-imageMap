import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontWeightRegular: 300,
      button: { textTransform: "none" },
      fontSize: 45,
    },
    spacing: 35,
    palette: {
      type: "light",
      primary: {
        main: "#56c5d0",
      },
      text: {
        primary: "#231f20",
      },
    },
    shape: {
      borderRadius: 15,
    },
    transitions: {
      duration: {
        enteringScreen: 1000,
        leavingScreen: 800
      }
    }
  })
);
