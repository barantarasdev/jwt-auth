"use client"

import { Box, FormHelperText, styled } from "@mui/material"

export const Block = styled(Box)({
  width: "100%",
})

export const HelperText = styled(FormHelperText)({
  fontSize: 18,
  fontWeight: 500,
})

export const Error = styled(FormHelperText)(
  ({
    theme: {
      palette: { error },
    },
  }) => ({
    height: 20,
    fontWeight: 700,
    color: error.main,
  })
)
