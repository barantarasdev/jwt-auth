import { memo } from "react"
import { Spinner } from "src/styles"

function Loading() {
  return <Spinner />
}

export default memo(Loading)
