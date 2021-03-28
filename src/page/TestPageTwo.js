import React from "react";

import { fetchPostAPIWithJWT } from "../utils/fetchApis";

const TestPageTwo = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          fetchPostAPIWithJWT("/feed/test/feed", { body: {} })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        Fetch
      </button>
    </div>
  );
};

export default TestPageTwo;
