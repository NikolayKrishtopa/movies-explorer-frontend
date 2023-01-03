import { useState, useCallback, useEffect } from 'react'
import { ALERT_MESSAGES, FORM_FIELDS_NAMES } from '../utils/constants'
import validateEmail from '../utils/utils'

export default function useFormAndValidation(initialValues = {}) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState(false)

  const checkValidity = (errors) =>
    !Object.values(errors).some((e) => e.length > 0)

  // ***NOTE: Standart browser validator for email has been
  // overwritten with the custom one using regex***
  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
    if (name === FORM_FIELDS_NAMES.EMAIL) {
      if (!validateEmail(value)) {
        setErrors({ ...errors, [name]: ALERT_MESSAGES.INCORRECT_EMAIL_FORMAT })
      } else {
        setErrors({ ...errors, [name]: '' })
      }
    } else {
      setErrors({ ...errors, [name]: e.target.validationMessage })
    }
  }

  useEffect(() => {
    setIsValid(checkValidity(errors))
  }, [errors])

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues)
      setErrors(newErrors)
      setIsValid(newIsValid)
    },
    [setValues, setErrors, setIsValid]
  )

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  }
}
