import React, { useState, useEffect } from "react";

import Feed from "./Feed";

import SERVER_ADDRESS from "../../constant/serverAddress";

const FeedContainer = (props) => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch(`${SERVER_ADDRESS}/feed/`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setFeeds(data.feeds);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="mt-10 border-black border-2 border-solid space-y-10">
      {feeds.map((feed) => {
        return <Feed key={feed._id} {...feed} />;
      })}
    </div>
  );
};

export default FeedContainer;
