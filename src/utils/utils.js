import { emailRegex } from './constants'

const validateEmail = (email) => {
  return String(email).toLowerCase().match(emailRegex)
}

export default validateEmail
