"use client"

import { CircularProgress, styled } from "@mui/material"

export const Spinner = styled(CircularProgress)(({ theme: { mixins } }) => ({
  ...mixins.positionCenter,
}))

export const Section = styled("section")(({ theme: { mixins } }) => ({
  ...mixins.positionCenter,
  textAlign: "center",
}))
