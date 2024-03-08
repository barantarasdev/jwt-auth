"use client"

import { User } from "src/types"
import { authRequests } from "src/services/apiClient"

const AuthService = {
  login: async (user: Omit<User, "name">) => authRequests.post("auth/login", user),
}

export default AuthService
