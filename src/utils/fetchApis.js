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

export { fetchPostAPI };
