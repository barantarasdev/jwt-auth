"use client"

import { ReactNode, Suspense, memo } from "react"
import ReduxProvider from "src/store/ReduxProvider"
import ThemeProvider from "src/common/themes/ThemeProvider"
import * as Styled from "src/components/Layout/styles"
import { Spinner } from "src/styles"

function Layout({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <Suspense fallback={<Spinner />}>
          <Styled.Main>{children}</Styled.Main>
        </Suspense>
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default memo(Layout)
