export enum AuthCreators {
  ASYNC_LOGIN = "ASYNC_LOGIN",
}

export type LoginCreatorT = {
  email: string
  password: string
}
