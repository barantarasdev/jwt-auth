import { useCallback } from "react"
import { useAppDispatch } from "src/hooks/useRedux"
import { useForm } from "react-hook-form"
import { RegisterCreator } from "src/store/sagas/authSaga/authCreators"
import { RegisterCreatorT } from "src/store/sagas/authSaga/types"
import { yupResolver } from "@hookform/resolvers/yup"
import { schema } from "src/app/auth/yupValidation"

function useRegister() {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCreatorT>({
    resolver: yupResolver(schema),
  })

  const onSubmit = useCallback(({ email, password, name }: RegisterCreatorT) => {
    dispatch(RegisterCreator({ email, password, name }))
  }, [])

  return { register, onSubmit: handleSubmit(onSubmit), errors }
}

export default useRegister
