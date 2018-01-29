const BASE_URL           = 'http://beta.convose.com'
const PATH_LOGIN         = '/v1/users/login'
const PATH_SUGGESTION    =  '/autocomplete/interests'
const PATH_GUESTINFO     =  '/users/guest'
const PATH_SEARCH_PEOPLE =  '/suggestions.json'
const PATH_CONVERSATION  =  '/chat/'
const PATH_REGISTERUSER  =  '/users.json'

export const LOGIN = `${BASE_URL}${PATH_LOGIN}`
export const SUGGESTION= `${BASE_URL}${PATH_SUGGESTION}`
export const GUESTINFO = `${BASE_URL}${PATH_GUESTINFO}`
export const SEARCH_PEOPLE = `${BASE_URL}${PATH_SEARCH_PEOPLE}`
export const FETCH_CONVERSATION = `${BASE_URL}${PATH_CONVERSATION}`
export const REGISTER_USER      = `${BASE_URL}${PATH_REGISTERUSER}`

