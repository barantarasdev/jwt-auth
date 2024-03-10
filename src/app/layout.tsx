import { ReactNode, memo } from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import Layout from "src/components/Layout"

const poppins = Poppins({
  weight: ["400", "500", "600"],
  style: ["normal"],
  subsets: ["latin"],
  preload: true,
})

export const metadata: Metadata = {
  title: "title",
  description: "description",
}

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

export default memo(RootLayout)
