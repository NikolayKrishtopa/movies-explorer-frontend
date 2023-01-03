const SHORT_DURATION = 40
const INITIAL_MOVIES_QTY = {
  MOBILE: 5,
  TABLET: 8,
  DESKTOP: 12,
}
const ITEMS_PER_ROW = {
  MOBILE: 1,
  TABLET: 2,
  DESKTOP: 3,
}
const SCREEN_WIDTH = {
  MOBILE: 320,
  TABLET: 480,
  DESKTOP: 800,
}

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const FORM_FIELDS_NAMES = {
  NAME: 'name',
  EMAIL: 'email',
  PASSWORD: 'password',
}

const ALERT_MESSAGES = {
  INCORRECT_EMAIL_FORMAT: 'Недопустимый формат email',
}

export {
  SHORT_DURATION,
  SCREEN_WIDTH,
  INITIAL_MOVIES_QTY,
  ITEMS_PER_ROW,
  emailRegex,
  FORM_FIELDS_NAMES,
  ALERT_MESSAGES,
}
