import { memo } from "react"
import { TextField } from "@mui/material"
import * as Styled from "src/components/Input/styles"

type Props = {
  helperText: string
  placeholder: string
  register: any
  type?: string
  error?: string
}

function Input({ placeholder, helperText, register, type, error }: Props) {
  return (
    <Styled.Block>
      <Styled.HelperText id={helperText}>{helperText}</Styled.HelperText>
      <TextField
        id={helperText}
        type={type}
        error={!!error?.length}
        placeholder={placeholder}
        fullWidth
        {...register}
      />
      <Styled.Error>{error}</Styled.Error>
    </Styled.Block>
  )
}

export default memo(Input)
