import { Theme, createTheme, responsiveFontSizes } from "@mui/material/styles"

const darkPalette: Theme = createTheme({
  palette: {
    mode: "dark",
  },
})

export default responsiveFontSizes(darkPalette)
