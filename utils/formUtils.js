import { i18n } from './'

export const required = value => (
  value ? undefined : i18n('FORM_VALIDATE_REQUIRED')
)

export const email = value => {
  // Taken from http://emailregex.com/
  const REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return value && REGEXP.test(value) ? undefined : i18n('FORM_VALIDATE_EMAIL_INVALID')
}

export const noWhiteSpace = value => {
  const REGEXP = /^\S*$/
  return value && REGEXP.test(value) ? undefined : i18n('FORM_VALIDATE_WHITESPACE')
}

export const passwordsMustMatch = values => {
  const errors = {}
  if (values.oldPassword === values.newPassword) {
    errors.newPassword = i18n('FORM_VALIDATE_NEW_PW_SAME')
  }
  if (values.newPassword2 !== values.newPassword) {
    errors.newPassword2 = i18n('FORM_VALIDATE_PW_MUST_MATCH')
  }
  return errors
}

export const removeWhiteSpace = value => value && value.replace(/ /g,'')
