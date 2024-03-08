import { authInstance, responseBody } from "src/lib/axios"

export const authRequests = {
  post: <T>(url: string, body: {}): Promise<T> => authInstance.post(url, body).then(responseBody),
}
