"use client"

import { memo, useCallback } from "react"
import { Button, Typography } from "@mui/material"
import * as Styled from "src/styles"

function Error({ reset }: { reset: () => void }) {
  const onClick = useCallback(() => {
    reset()
  }, [reset])

  return (
    <Styled.Section>
      <Typography variant="h2" marginBottom={5}>
        Something went wrong!
      </Typography>

      <Button onClick={onClick} variant="contained" size="large">
        Try again
      </Button>
    </Styled.Section>
  )
}

export default memo(Error)
