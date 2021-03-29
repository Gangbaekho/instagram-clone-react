import React from "react";

import { fetchGetAPIWithJWT } from "../utils/fetchApis";

import test from "../image/test.s.jpg";

const TestPageTwo = (props) => {
  return (
    <div className="border-check h-52 w-52">
      <img src={test} className="object-cover h-full w-full" />
    </div>
  );
};

export default TestPageTwo;
