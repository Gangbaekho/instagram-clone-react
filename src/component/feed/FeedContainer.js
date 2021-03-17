import React, { useState, useEffect } from "react";

import Feed from "./Feed";

import SERVER_ADDRESS from "../../constant/serverAddress";

import { useSelector, useDispatch } from "react-redux";

const FeedContainer = (props) => {
  const loadedFeeds = useSelector((state) => state.feeds.feeds);

  return (
    <div className="mt-10 border-black border-2 border-solid space-y-10">
      {loadedFeeds.map((feed) => {
        return <Feed key={feed._id} {...feed} />;
      })}
    </div>
  );
};

export default FeedContainer;
