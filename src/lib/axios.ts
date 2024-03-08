"use client"

import axios, { AxiosError, AxiosResponse } from "axios"

const options = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
}

export const authInstance = axios.create(options)
export const refreshInstance = axios.create(options)
export const instance = axios.create(options)

export const responseBody = <T>(response: AxiosResponse<T>): T => response.data

instance.interceptors.request.use(async (req) => {
  const accessToken = localStorage.getItem("accessToken") || ""

  if (accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`
  }

  return req
})

instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config
    if (error.response?.status === 401) {
      try {
        const { accessToken, refreshToken } = await refreshInstance
          .get("auth/refresh")
          .then(responseBody)

        localStorage.setItem("accessToken", accessToken)
        localStorage.setItem("refreshToken", refreshToken)

        instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`

        return await instance(originalRequest as any)
      } catch (refreshError) {
        //logout
        console.log("logout")
      }
    }
    return Promise.reject(error)
  }
)

refreshInstance.interceptors.request.use(async (req) => {
  const refreshToken = localStorage.getItem("refreshToken") || ""

  if (refreshToken) {
    req.headers.Authorization = `Bearer ${refreshToken}`
  }

  return req
})

refreshInstance.interceptors.response.use(
  (response) => response,
  async () => {
    //logout
    console.log("logout")
  }
)
