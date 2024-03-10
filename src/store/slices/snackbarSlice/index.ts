import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import initialState from "src/store/slices/snackbarSlice/constants"

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    setSnackBar: (_, action: PayloadAction<string | null>) => ({
      snackbar: action.payload,
    }),
  },
})

export const { setSnackBar } = snackbarSlice.actions
export default snackbarSlice.reducer
