import React from "react";

import { useDispatch } from "react-redux";
import { TEST_ACTION } from "../store/actions/test";

const TestPageThree = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      test3
      <button onClick={() => dispatch({ type: TEST_ACTION })}>dispatch!</button>
    </div>
  );
};

export default TestPageThree;
