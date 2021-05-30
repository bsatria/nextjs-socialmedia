import fetch from "isomorphic-unfetch";

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  if (response.status === 401) {
    window.location = publicRuntimeConfig.REACT_APP_LOGIN;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const parseJSON = response =>
  response.json().then(data => ({ ...data, status: response.status }));

const fetchReq = (url, method, data) => {
  let body;
  let content;
  if (method === "post") {
    if (data instanceof FormData) {
      body = { body: data };
    } else {
      body = { body: JSON.stringify(data) };
      content = {
        "Content-Type": "application/json"
      };
    }
  }
  const options = {
    method: method.toUpperCase(),
    ...body,
    headers: {
      ...content
    }
  };
  return fetch(url, options)
    .then(response => response.json())
    .then(result => result)
    .catch(error => error);
};

export default fetchReq;
