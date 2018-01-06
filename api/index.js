import { checkStatus } from './utils'
import * as ENDPOINTS from './endpoints'

/**
 * Global Fetch
 */
const fetchEndpoint = ({ endpoint, id, values, method = 'POST' }) => {
  console.log('fetching endpoint: ', `${endpoint}${id ? `/${id}` : '' }`, method, id, values)
  return fetch(`${endpoint}${id ? `/${id}` : '' }`, {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values)
  })
  .then(checkStatus)
  .then(response => 
    response.json()  )
}


/**
 * Specific exported fetch funcs
 */
export const fetchLogin = values => {
  const endpoint = ENDPOINTS.LOGIN
  return fetchEndpoint({ endpoint, values })
}

/**
 * Mock fetch, in case you need it
 */
export const mockFetch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve()
    }, 1000)
  })
}


export const fetchSuggestion = values => {

  const  endpoint = ENDPOINTS.SUGGESTION + values;
  const  method   = 'GET';
  return fetchEndpoint({ endpoint, method });

}

export const fetchGuestInfo = () => {

  const  endpoint = ENDPOINTS.GUESTINFO;
  const  method   = 'POST';
  return fetchEndpoint({ endpoint, method });
}
