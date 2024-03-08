"use client"

import Image from "next/image"
import { Box, styled } from "@mui/material"

export const Section = styled("section")({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "flex-end",
})

export const Block = styled(Box)(
  ({
    theme: {
      palette: { primary },
      spacing,
    },
  }) => ({
    display: "flex",
    flexDirection: "column",
    gap: spacing(10),
    width: "58%",
    paddingTop: spacing(25),
    paddingLeft: spacing(25),
    paddingRight: spacing(25),
    paddingBottom: spacing(9),
    marginRight: spacing(-7),
    backgroundColor: primary.light,
    borderTopLeftRadius: spacing(5),
    borderBottomLeftRadius: spacing(5),
    position: "relative",
    left: spacing(-7),
  })
)

export const Img = styled(Image)({
  width: "auto",
  height: "100vh",
})
