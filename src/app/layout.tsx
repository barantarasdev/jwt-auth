import { ReactNode, memo } from "react"
import type { Metadata } from "next"
import Layout from "src/components/Layout"

export const metadata: Metadata = {
  title: "title",
  description: "description",
}

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

export default memo(RootLayout)
