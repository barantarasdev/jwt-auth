import { createTheme, responsiveFontSizes, Theme } from "@mui/material/styles"

const lightPalette: Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#F3D335",
      light: "#FCFEFF",
    },
    secondary: {
      main: "#B0BAC3",
    },
    background: {
      default: "#E6F3FF",
    },
    text: {
      primary: "#000000",
      secondary: "#7C838A",
    },
    error: {
      main: "#ff3333",
    },
  },
})

export default responsiveFontSizes(lightPalette)
