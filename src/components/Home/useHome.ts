import { useRouter } from "next/navigation"
import { useCallback, useMemo } from "react"
import { useAppDispatch } from "src/hooks/useRedux"
import { LogoutCreator } from "src/store/sagas/authSaga/authCreators"

function useHome() {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const name = useMemo(() => {
    return localStorage.getItem("name")
  }, [])

  const logout = useCallback(() => {
    dispatch(LogoutCreator({ router }))
  }, [])

  return { logout, name }
}

export default useHome
