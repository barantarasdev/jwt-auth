import { AuthCreators, LoginCreatorT, RegisterCreatorT } from "src/store/sagas/authSaga/types"

export const LoginCreator = ({ email, password }: LoginCreatorT) => ({
  type: AuthCreators.ASYNC_LOGIN,
  payload: { email, password },
})

export const RegisterCreator = ({ email, password, name }: RegisterCreatorT) => ({
  type: AuthCreators.ASYNC_REGISTER,
  payload: { email, password, name },
})
