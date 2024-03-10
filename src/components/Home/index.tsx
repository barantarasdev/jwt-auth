"use client"

import { memo } from "react"
import WithAuthRoute from "src/hocks/WithAuthRoute"
import * as Styled from "src/components/Home/styles"
import { Typography } from "@mui/material"
import useHome from "src/components/Home/useHome"

function Main() {
  const { logout, name } = useHome()

  return (
    <Styled.Section>
      <Styled.Button onClick={logout} variant="contained" size="large">
        Logout
      </Styled.Button>

      <Typography variant="h1">Welcome, {name}!</Typography>
    </Styled.Section>
  )
}

export default memo(WithAuthRoute(Main))
