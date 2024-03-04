import { useMemo } from "react"
import { Theme, createTheme } from "@mui/material"

import { darkTheme, lightTheme } from "src/common/themes"
import { useAppSelector } from "src/hooks/useRedux"
import { ThemeNames } from "src/types"

function useTheme() {
  const { theme: selectedTheme } = useAppSelector((state) => state.theme)

  const theme = useMemo((): Theme => {
    switch (selectedTheme) {
      case ThemeNames.light:
        return lightTheme
      case ThemeNames.dark:
        return darkTheme
      default:
        return createTheme()
    }
  }, [selectedTheme])

  return { theme }
}

export default useTheme
