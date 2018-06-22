import { checkStatus } from './utils';
import * as ENDPOINTS from './endpoints';

/**
 * Global Fetch
 */
const fetchEndpoint = ({ endpoint, id, values, method = 'POST', token }) => {
  console.log('fetching endpoint: ', `${endpoint}${id ? `/${id}` : ''}`, method, id, values, token);
  return fetch(`${endpoint}${id ? `/${id}` : ''}`, {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(values)
  })
    .then(checkStatus)
    .then((response) => response.json());
};


/**
 * Specific exported fetch funcs
 */
export const fetchLogin = (values) => {
  const endpoint = ENDPOINTS.LOGIN;
  return fetchEndpoint({ endpoint, values });
};

export const registerUser = (v) => {
  const endpoint = ENDPOINTS.REGISTER_USER;
  const token = v.token;
  const values = v.data; // userInfo

  return fetchEndpoint({ endpoint, token, values });

};
/**
 * Mock fetch, in case you need it
 */
export const mockFetch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve();
    }, 1000);
  });
};


// Fetch Chating Conversation Data from DB
export const fetchChatContent = (values) => {

  const endpoint = `${ENDPOINTS.FETCH_CONVERSATION}${values.userInfo.uuid}xx-xx${values.partnerInfo.uuid}.json?from=0&limit=10&p=${values.partnerInfo.uuid}=${values.userInfo.uuid}`;
  const method = 'GET';
  const token = values.userInfo.authentication_token;

  return fetchEndpoint({ endpoint, method, token });
};

export const fetchSuggestion = (values) => {

  const endpoint = ENDPOINTS.SUGGESTION + values;
  const method = 'GET';
  return fetchEndpoint({ endpoint, method });

};

export const fetchPeople = (values) => {

  const endpoint = ENDPOINTS.SEARCH_PEOPLE + `?page=0&limit=6`;
  const method = 'GET';
  const token = values;
  console.log("#######", token);

  return fetchEndpoint({ endpoint, method, token });
};

export const fetchGuestInfo = () => {

  const endpoint = ENDPOINTS.GUESTINFO;
  const method = 'POST';
  return fetchEndpoint({ endpoint, method });
};

