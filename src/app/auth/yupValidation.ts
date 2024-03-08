import { object, string } from "yup"
import { VALIDATION_MESSAGES, VALIDATION_REGEXPS } from "src/app/auth/constants"

export const schema = object({
  name: string().required(VALIDATION_MESSAGES.REQUIRED).min(2, VALIDATION_MESSAGES.NAME),
  email: string()
    .required(VALIDATION_MESSAGES.REQUIRED)
    .matches(VALIDATION_REGEXPS.EMAIL, VALIDATION_MESSAGES.EMAIL),
  password: string()
    .required(VALIDATION_MESSAGES.REQUIRED)
    .matches(VALIDATION_REGEXPS.PASSWORD, VALIDATION_MESSAGES.PASSWORD),
})
