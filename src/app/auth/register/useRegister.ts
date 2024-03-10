import { useCallback } from "react"
import { useAppDispatch } from "src/hooks/useRedux"
import { useForm } from "react-hook-form"
import { RegisterCreator } from "src/store/sagas/authSaga/authCreators"
import { RegisterCreatorT } from "src/store/sagas/authSaga/types"
import { yupResolver } from "@hookform/resolvers/yup"
import { schema } from "src/app/auth/yupValidation"
import { useRouter } from "next/navigation"

function useRegister() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<RegisterCreatorT, "router">>({
    resolver: yupResolver(schema),
  })

  const onSubmit = useCallback(({ email, password, name }: Omit<RegisterCreatorT, "router">) => {
    dispatch(RegisterCreator({ email, password, name, router }))
  }, [])

  return { register, onSubmit: handleSubmit(onSubmit), errors }
}

export default useRegister
