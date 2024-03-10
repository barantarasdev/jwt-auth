"use client"

import { styled } from "@mui/material"

export const Section = styled("section")(({ theme: { mixins } }) => ({
  ...mixins.positionCenter,
}))
