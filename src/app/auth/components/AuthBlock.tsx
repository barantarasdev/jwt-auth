import authImage from "public/images/auth.png"
import { ReactNode, memo } from "react"
import * as Styled from "src/app/auth/components/styles"

function AuthBlock({ children }: { children: ReactNode }) {
  return (
    <Styled.Section>
      <Styled.Img priority src={authImage} alt="Air layer" />

      <Styled.Block>{children}</Styled.Block>
    </Styled.Section>
  )
}

export default memo(AuthBlock)
