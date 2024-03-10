import { useCallback, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "src/hooks/useRedux"
import { setSnackBar } from "src/store/slices/snackbarSlice"

function useSnackbar() {
  const { snackbar: message } = useAppSelector((state) => state.snackbar)
  const dispatch = useAppDispatch()
  const [currentMessage, setCurrentMessage] = useState("")

  const onClose = useCallback(() => {
    dispatch(setSnackBar(null))
  }, [dispatch])

  useEffect(() => {
    if (message) {
      setCurrentMessage(message)
    }
  }, [message])

  return { isOpen: !!message, message: currentMessage, onClose }
}

export default useSnackbar
