import SERVER_ADDRESS from "../constant/serverAddress";

const fetchPostAPI = (
  endpoint,
  {
    method = "POST",
    headers = { "Content-Type": "application/json" },
    body,
  } = {}
) => {
  return fetch(SERVER_ADDRESS + endpoint, {
    method: method,
    headers: headers,
    body: JSON.stringify(body),
  });
};

const fetchPostAPIWithJWT = (
  endpoint,
  {
    method = "POST",
    headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body,
  } = {}
) => {
  return fetch(SERVER_ADDRESS + endpoint, {
    method: method,
    headers: headers,
    body: JSON.stringify(body),
  });
};

const fetchPostFormDataWithJWT = (
  endpoint,
  {
    method = "POST",
    headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body,
  } = {}
) => {
  return fetch(SERVER_ADDRESS + endpoint, {
    method: method,
    headers: headers,
    body: body,
  });
};

const fetchGetAPIWithJWT = (
  endpoint,
  {
    method = "GET",
    headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  } = {}
) => {
  return fetch(SERVER_ADDRESS + endpoint, {
    method: method,
    headers: headers,
  });
};

export {
  fetchPostAPI,
  fetchPostAPIWithJWT,
  fetchPostFormDataWithJWT,
  fetchGetAPIWithJWT,
};
