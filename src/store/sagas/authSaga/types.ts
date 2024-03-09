export enum AuthCreators {
  ASYNC_LOGIN = "ASYNC_LOGIN",
  ASYNC_REGISTER = "ASYNC_REGISTER",
}

export type LoginCreatorT = {
  email: string
  password: string
}

export type RegisterCreatorT = {
  name: string
  email: string
  password: string
}
