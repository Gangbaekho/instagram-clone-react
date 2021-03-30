import React from "react";
import Activity from "./Activity";
import { Element } from "react-scroll";

const ActivityContainer = (props) => {
  return (
    <Element
      className="border-check scroll-hide"
      id="scroll-container"
      style={{
        position: "relative",
        overflow: "auto",
        height: "300px",
        // overflowY: "scroll",
      }}
    >
      {props.activities.map((activity) => (
        <Element key={activity._id.toString()}>
          <Activity {...activity} />
        </Element>
      ))}
    </Element>
  );
};

export default ActivityContainer;
