"use client"

import { CircularProgress, styled } from "@mui/material"

export const Spinner = styled(CircularProgress)(({ theme: { mixins } }) => ({
  ...mixins.positionCenter,
}))
