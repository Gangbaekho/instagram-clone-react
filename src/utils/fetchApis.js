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

const fetchPostFomDataWithJWT = (
  endpoint,
  {
    method = "POST",
    headers = {
      "Content-Type": "multipart/form-data",
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

export { fetchPostAPI, fetchPostAPIWithJWT, fetchPostFomDataWithJWT };
