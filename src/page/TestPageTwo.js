import React from "react";

import { fetchGetAPIWithJWT } from "../utils/fetchApis";

const TestPageTwo = (props) => {
  return (
    <div className="border-check h-52 w-52">
      <button
        onClick={() => {
          fetchGetAPIWithJWT("/activity/test")
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
        Test
      </button>
    </div>
  );
};

export default TestPageTwo;
