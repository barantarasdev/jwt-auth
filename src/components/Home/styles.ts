"use client"

import { styled, Button as MUIButton } from "@mui/material"

export const Section = styled("section")(({ theme: { mixins } }) => ({
  width: "100%",
  height: "100vh",
  ...mixins.flexCenter,
  position: "relative",
}))

export const Button = styled(MUIButton)({
  position: "absolute",
  top: 30,
  right: 30,
})
