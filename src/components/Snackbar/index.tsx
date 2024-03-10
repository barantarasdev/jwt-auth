import { Alert, Snackbar as MUISnackbar, Slide } from "@mui/material"
import useSnackbar from "src/components/Snackbar/useSnackbar"

function Snackbar() {
  const { message, isOpen, onClose } = useSnackbar()

  return (
    <MUISnackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={isOpen}
      onClose={onClose}
      autoHideDuration={3000}
      TransitionComponent={Slide}
    >
      <Alert onClose={onClose} severity="error" variant="filled">
        {message}
      </Alert>
    </MUISnackbar>
  )
}

export default Snackbar
