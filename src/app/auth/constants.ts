export const VALIDATION_MESSAGES = {
  REQUIRED: "This field is required",
  EMAIL: "This is not valid email",
  NAME: "Minimum 2 symbols",
  PASSWORD: "This is not valid password ( A, a, 1, / )",
}

export const VALIDATION_REGEXPS = {
  EMAIL:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/,
}
