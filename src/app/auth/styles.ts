"use client"

import { Typography, styled, Button as MUIButton } from "@mui/material"
import Link from "next/link"

export const Title = styled(Typography)({
  fontSize: 26,
  fontWeight: 600,
  textAlign: "center",
})

export const Button = styled(MUIButton)(({ theme: {} }) => ({
  width: 340,
}))

export const Form = styled("form")(({ theme: { spacing } }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: spacing(1.5),
}))

export const CLink = styled(Link)(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    textDecoration: "none",
    color: primary.main,
  })
)
