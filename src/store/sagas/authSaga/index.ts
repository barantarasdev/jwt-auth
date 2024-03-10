"use client"

import { PayloadAction } from "@reduxjs/toolkit"
import { call, put, takeLatest } from "redux-saga/effects"
import { Routes } from "src/types"
import { AuthCreators, LoginCreatorT, RegisterCreatorT } from "src/store/sagas/authSaga/types"
import AuthService from "src/services/authSerices"
import { setSnackBar } from "src/store/slices/snackbarSlice"

function* loginWorker(action: PayloadAction<LoginCreatorT>) {
  const { email, password, router } = action.payload

  try {
    const { accessToken, refreshToken, name } = yield call(AuthService.login, {
      email,
      password,
    })

    localStorage.setItem("accessToken", accessToken)
    localStorage.setItem("refreshToken", refreshToken)
    localStorage.setItem("name", name)

    router.push(Routes.HOME)
  } catch (error: any) {
    yield put(setSnackBar(error?.response?.data?.message || "ERROR"))
  }
}

function* registerWorker(action: PayloadAction<RegisterCreatorT>) {
  const { name, email, password, router } = action.payload

  try {
    const { accessToken, refreshToken } = yield call(AuthService.register, {
      name,
      email,
      password,
    })

    localStorage.setItem("accessToken", accessToken)
    localStorage.setItem("refreshToken", refreshToken)
    localStorage.setItem("name", name)

    router.push(Routes.HOME)
  } catch (error: any) {
    yield put(setSnackBar(error?.response?.data?.message || "ERROR"))
  }
}

function* authWatcher() {
  yield takeLatest(AuthCreators.ASYNC_LOGIN, loginWorker)
  yield takeLatest(AuthCreators.ASYNC_REGISTER, registerWorker)
}

export default authWatcher
