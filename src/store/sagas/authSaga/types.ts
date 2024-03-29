import { AppRouterInstance } from "next/dist/shared/lib/app-router-context"

export enum AuthCreators {
  ASYNC_LOGIN = "ASYNC_LOGIN",
  ASYNC_REGISTER = "ASYNC_REGISTER",
  ASYNC_LOGOUT = "ASYNC_LOGOUT",
}

export type LoginCreatorT = {
  email: string
  password: string
  router: AppRouterInstance
}

export type RegisterCreatorT = {
  name: string
  email: string
  password: string
  router: AppRouterInstance
}

export type LogoutCreatorT = {
  router: AppRouterInstance
}
