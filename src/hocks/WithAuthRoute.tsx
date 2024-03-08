"use client"

import { useEffect, useState } from "react"
import { redirect } from "next/navigation"
import { Routes } from "src/types"

export default function WithAuthRoute(Component: any) {
  return function IsAuth(props: any) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
      const accessToken = localStorage.getItem("accessToken")

      if (accessToken) {
        setIsAuthenticated(true)
      } else {
        redirect(Routes.LOGIN)
      }
    }, [])

    if (!isAuthenticated) {
      return null
    }

    return <Component {...props} />
  }
}
