import React from "react";

import { useSelector, useDispatch } from "react-redux";

const TestPageThree = (props) => {
  const dispatch = useDispatch();
  const testState = useSelector((state) => state.test);

  if (!testState.persons.find((person) => person.name === "jinsoo")) {
    dispatch({ type: "SETUP" });
    return <div>Loading...</div>;
  }

  const myPerson = testState.persons.find((person) => person.name === "jinsoo");

  return (
    <div>
      {myPerson.hello.map((item) => {
        return <div key={item}>{item}</div>;
      })}
      <button onClick={() => dispatch({ type: "INCREASE" })}>INCREASE</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>DESCREASE</button>
    </div>
  );
};

export default TestPageThree;
