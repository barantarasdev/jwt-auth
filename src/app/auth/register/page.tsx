"use client"

import { memo } from "react"
import Input from "src/components/Input"
import useRegister from "src/app/auth/register/useRegister"
import { Routes } from "src/types"
import AuthBlock from "src/app/auth/components/AuthBlock"
import * as Styled from "src/app/auth/styles"
import WithPrivateRoute from "src/hocks/WithPrivateRoute"

function Register() {
  const { register, onSubmit, errors } = useRegister()

  return (
    <AuthBlock>
      <Styled.Title>Create a new account</Styled.Title>

      <Styled.Form onSubmit={onSubmit} noValidate>
        <Input
          helperText="Name"
          placeholder="Enter your Name here"
          register={register("name", { required: true })}
          error={errors.name?.message}
        />

        <Input
          helperText="Email"
          placeholder="Enter your Email here"
          type="email"
          register={register("email", { required: true })}
          error={errors.email?.message}
        />

        <Input
          helperText="Password"
          placeholder="Enter your Password here"
          type="password"
          register={register("password", { required: true })}
          error={errors.password?.message}
        />

        <Styled.Button variant="contained" size="large" type="submit">
          Sign up
        </Styled.Button>
        <Styled.CLink href={Routes.LOGIN}>Sign in to your account</Styled.CLink>
      </Styled.Form>
    </AuthBlock>
  )
}

export default memo(WithPrivateRoute(Register))
