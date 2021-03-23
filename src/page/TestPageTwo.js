import React from "react";

import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const TestPageTwo = (props) => {
  return (
    <div>
      Is it possible to recursive?
      {props.recursiveExit === undefined && (
        <div>
          <TestPageTwo recursiveExit={true} />
          <TestPageTwo recursiveExit={true} />
          <TestPageTwo recursiveExit={true} />
        </div>
      )}
    </div>
  );
};

export default TestPageTwo;
