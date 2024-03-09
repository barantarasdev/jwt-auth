"use client"

import { User } from "src/types"
import { authRequests } from "src/services/apiClient"

const AuthService = {
  login: async (user: Omit<User, "name">) => authRequests.post("auth/login", user),
  register: (user: User) => authRequests.post("auth/register", user),
  logout: (refreshToken: string) => authRequests.post("auth/logout", { refreshToken }),
}

export default AuthService
