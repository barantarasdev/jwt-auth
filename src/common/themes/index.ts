import { createTheme } from "@mui/material"
import type { Theme } from "@mui/material/styles"
import lightPalette from "src/common/themes/lightPalette"
import darkPalette from "src/common/themes/darkPalette"

const createCommonTheme = (theme: Theme): Theme =>
  createTheme({
    ...theme,
    spacing: 5,
    mixins: {
      flexCenter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      positionCenter: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      },
      textEllipsis: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
    },
  })

export const lightTheme = createTheme(createCommonTheme(lightPalette))
export const darkTheme = createTheme(createCommonTheme(darkPalette))
