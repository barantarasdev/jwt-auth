import { useCallback } from "react"
import { useAppDispatch } from "src/hooks/useRedux"
import { useForm } from "react-hook-form"
import { LoginCreator } from "src/store/sagas/authSaga/authCreators"
import { LoginCreatorT } from "src/store/sagas/authSaga/types"

function useLogin() {
  const dispatch = useAppDispatch()
  const { register, handleSubmit } = useForm<LoginCreatorT>()

  const onSubmit = useCallback(({ email, password }: LoginCreatorT) => {
    dispatch(LoginCreator({ email, password }))
  }, [])

  return { register, onSubmit: handleSubmit(onSubmit) }
}

export default useLogin
