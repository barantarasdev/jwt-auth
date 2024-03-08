import { AuthCreators, LoginCreatorT } from "src/store/sagas/authSaga/types"

export const LoginCreator = ({ email, password }: LoginCreatorT) => ({
  type: AuthCreators.ASYNC_LOGIN,
  payload: { email, password },
})
