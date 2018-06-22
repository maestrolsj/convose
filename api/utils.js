export const checkStatus = (response) => {
  console.log("response.status:", response.status, response);
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    let error = new Error(response.status);
    error.response = response.json() || 'API_DEFAULT_ERROR';
    throw error;
  }
};
