import {
  AuthCreators,
  LoginCreatorT,
  LogoutCreatorT,
  RegisterCreatorT,
} from "src/store/sagas/authSaga/types"

export const LoginCreator = ({ email, password, router }: LoginCreatorT) => ({
  type: AuthCreators.ASYNC_LOGIN,
  payload: { email, password, router },
})

export const RegisterCreator = ({ email, password, name, router }: RegisterCreatorT) => ({
  type: AuthCreators.ASYNC_REGISTER,
  payload: { email, password, name, router },
})

export const LogoutCreator = ({ router }: LogoutCreatorT) => ({
  type: AuthCreators.ASYNC_LOGOUT,
  payload: { router },
})
