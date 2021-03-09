import SERVER_ADDRESS from "../constant/serverAddress";

const postFetchApi = (endpoint, method, body, headers = {}) => {
  fetch(SERVER_ADDRESS + endpoint, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { postFetchApi };
