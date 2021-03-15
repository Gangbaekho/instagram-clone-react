import React from "react";

import Feed from "./Feed";

const FeedContainer = (props) => {
  return (
    <div className="mt-10 border-black border-2 border-solid ">
      <Feed />
      <Feed />
      <Feed />
    </div>
  );
};

export default FeedContainer;
