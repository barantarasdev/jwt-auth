"use client"

import { useEffect, useState } from "react"
import { redirect } from "next/navigation"
import { Routes } from "src/types"

export default function WithPrivateRoute(Component: any) {
  return function IsAuth(props: any) {
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    useEffect(() => {
      const accessToken = localStorage.getItem("accessToken")

      if (accessToken) {
        redirect(Routes.HOME)
      } else {
        setIsAuthenticated(false)
      }
    }, [])

    if (isAuthenticated) {
      return null
    }

    return <Component {...props} />
  }
}
