"use client"

import { memo } from "react"
import WithAuthRoute from "src/hocks/WithAuthRoute"

function Main() {
  return <>Home</>
}

export default memo(WithAuthRoute(Main))
