import React from "react";
import { Element } from "react-scroll";

const ScrollContainer = (props) => {
  return (
    <Element
      className={`border-check scroll-hide ${props.passClass}`}
      id="scroll-container"
      style={{
        position: "relative",
        overflow: "auto",
        ...props.customStyle,
      }}
    >
      {props.children}
    </Element>
  );
};

export default ScrollContainer;
