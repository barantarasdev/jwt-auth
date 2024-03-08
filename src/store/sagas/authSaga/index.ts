"use client"

import { PayloadAction } from "@reduxjs/toolkit"
import { redirect } from "next/navigation"
import { call, takeLatest } from "redux-saga/effects"
import { Routes } from "src/types"
import { AuthCreators, LoginCreatorT } from "src/store/sagas/authSaga/types"
import AuthService from "src/services/authSerices"

function* loginWorker(action: PayloadAction<LoginCreatorT>) {
  const { email, password } = action.payload

  try {
    const { accessToken, refreshToken } = yield call(AuthService.login, {
      email,
      password,
    })

    localStorage.setItem("accessToken", accessToken)
    localStorage.setItem("refreshToken", refreshToken)

    redirect(Routes.HOME)
  } catch (error: any) {
    console.log(error?.response?.data?.message || "ERROR")
  }
}

function* authWatcher() {
  yield takeLatest(AuthCreators.ASYNC_LOGIN, loginWorker)
}

export default authWatcher
