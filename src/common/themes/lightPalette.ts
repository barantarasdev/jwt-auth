import { createTheme, responsiveFontSizes, Theme } from "@mui/material/styles"

const lightPalette: Theme = createTheme({
  palette: {
    mode: "light",
  },
})

export default responsiveFontSizes(lightPalette)
