"use client"

import { PayloadAction } from "@reduxjs/toolkit"
import { call, put, takeLatest } from "redux-saga/effects"
import { Routes } from "src/types"
import {
  AuthCreators,
  LoginCreatorT,
  LogoutCreatorT,
  RegisterCreatorT,
} from "src/store/sagas/authSaga/types"
import AuthService from "src/services/authSerices"
import { setSnackBar } from "src/store/slices/snackbarSlice"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context"

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

function* logoutWorker(action: PayloadAction<LogoutCreatorT>) {
  const refreshToken = localStorage.getItem("refreshToken")

  if (refreshToken) {
    yield call(AuthService.logout, refreshToken as string)

    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    localStorage.removeItem("name")
  }

  action.payload.router.push(Routes.LOGIN)
}

function* authWatcher() {
  yield takeLatest(AuthCreators.ASYNC_LOGIN, loginWorker)
  yield takeLatest(AuthCreators.ASYNC_REGISTER, registerWorker)
  yield takeLatest(AuthCreators.ASYNC_LOGOUT, logoutWorker)
}

export default authWatcher
