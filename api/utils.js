import { i18n } from './../utils'

export const checkStatus = response => {
  console.log('response.status: ', response.status, JSON.parse(response._bodyText))

  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    let error = new Error(response.status)
    error.response = JSON.parse(response._bodyText) && JSON.parse(response._bodyText).error || i18n('API_DEFAULT_ERROR')
    throw error
  }
}
