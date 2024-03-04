import { combineReducers } from "@reduxjs/toolkit"
import themeReducer from "src/store/slices/themeSlice"

const rootReducer = combineReducers({
  theme: themeReducer,
})

export default rootReducer
