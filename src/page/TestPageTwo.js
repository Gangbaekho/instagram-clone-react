import React from "react";

import default_user from "../image/default_user.s.png";

const TestPageTwo = (props) => {
  return (
    <div className="inline-block h-96 border-2 border-solid border-black">
      <img src={default_user} className="h-full" />
    </div>
  );
};

export default TestPageTwo;
