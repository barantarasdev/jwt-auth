import { memo } from "react"
import { Typography } from "@mui/material"
import { Routes } from "src/types"
import Link from "next/link"
import * as Styled from "src/styles"

function NotFound() {
  return (
    <Styled.Section>
      <Typography variant="h3">
        404 <br />
        The page you are looking for has been lost in space.
      </Typography>

      <Link href={Routes.HOME}>Return Home</Link>
    </Styled.Section>
  )
}

export default memo(NotFound)
