import { combineReducers } from "@reduxjs/toolkit"
import themeReducer from "src/store/slices/themeSlice"
import snackbarReducer from "src/store/slices/snackbarSlice"

const rootReducer = combineReducers({
  theme: themeReducer,
  snackbar: snackbarReducer,
})

export default rootReducer
