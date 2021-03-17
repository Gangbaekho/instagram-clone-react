import React, { useEffect } from "react";

// COMPONENTS
import MainHeader from "../component/common/MainHeader";
import StoryContainer from "../component/feed/StoryContainer";
import FeedContainer from "../component/feed/FeedContainer";
import FriendRecommendationContainer from "../component/feed/FriendRecommendationContainer";

import { useSelector, useDispatch } from "react-redux";

import { fetchFeeds } from "../store/actions/feed";

const FeedPage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeeds());
  }, []);
  const allState = useSelector((state) => state);
  console.log(allState);

  return (
    <>
      <MainHeader />
      <div className="border-2 border-black border-solid lg:flex lg:justify-center">
        <div className="mt-20 min-w-xs max-w-sm mx-auto lg:w-96 lg:flex-1 lg:mx-0">
          <StoryContainer />
          <FeedContainer />
        </div>
        <div className="hidden lg:block mt-20">
          <FriendRecommendationContainer />
        </div>
      </div>
    </>
  );
};

export default FeedPage;
