"use client"

import { memo, useMemo } from "react"
import WithAuthRoute from "src/hocks/WithAuthRoute"
import * as Styled from "src/components/Home/styles"
import { Typography } from "@mui/material"

function Main() {
  const name = useMemo(() => {
    return localStorage.getItem("name")
  }, [])

  return (
    <Styled.Section>
      <Typography variant="h1">Welcome, {name}!</Typography>
    </Styled.Section>
  )
}

export default memo(WithAuthRoute(Main))
