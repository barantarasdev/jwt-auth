"use client"

import { memo } from "react"
import Input from "src/components/Input"
import useLogin from "src/app/auth/login/useLogin"
import { Routes } from "src/types"
import AuthBlock from "src/app/auth/components/AuthBlock"
import * as Styled from "src/app/auth/styles"
import WithPrivateRoute from "src/hocks/WithPrivateRoute"

function Login() {
  const { register, onSubmit } = useLogin()

  return (
    <AuthBlock>
      <Styled.Title>Sign in to your account</Styled.Title>

      <Styled.Form onSubmit={onSubmit} noValidate>
        <Input
          helperText="Email"
          placeholder="Enter your Email here"
          type="email"
          register={register("email", { required: true })}
        />

        <Input
          helperText="Password"
          placeholder="Enter your Password here"
          type="password"
          register={register("password", { required: true })}
        />

        <Styled.Button variant="contained" size="large" type="submit">
          Sign in
        </Styled.Button>
        <Styled.CLink href={Routes.REGISTER}>Create a new account</Styled.CLink>
      </Styled.Form>
    </AuthBlock>
  )
}

export default memo(WithPrivateRoute(Login))
