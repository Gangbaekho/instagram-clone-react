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
    <div className="border-2 border-solid border-black relative">
      <Element
        className="absolute top-0 -right-5"
        id="scroll-container"
        style={{
          position: "relative",
          height: "200px",
          overflowY: "scroll",
        }}
      >
        <Element
          name="scroll-container-first-element"
          style={{
            marginBottom: "200px",
          }}
        >
          <div>
            <h1>Test</h1>
            <h2>Test</h2>
            <p>ASDjlkasjdlkajslkdjaklsd</p>
          </div>
        </Element>

        <Element
          name="scroll-container-second-element"
          style={{
            marginBottom: "200px",
          }}
        >
          second element inside container
        </Element>
      </Element>
    </div>
  );
};

export default TestPageTwo;
