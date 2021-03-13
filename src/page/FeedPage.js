import React from "react";

// COMPONENTS
import MainHeader from "../component/common/MainHeader";
import StoryContainer from "../component/feed/StoryContainer";
import FeedContainer from "../component/feed/FeedContainer";
import FriendRecommendationContainer from "../component/feed/FriendRecommendationContainer";

import { useSelector } from "react-redux";

const FeedPage = (props) => {
  const navigationState = useSelector((state) => state.navigations);
  console.log(navigationState);

  return (
    <>
      <MainHeader />
      <div className="lg:flex lg:justify-center">
        <div className="mt-20 min-w-sm max-w-sm mx-auto ">
          <StoryContainer />
          <FeedContainer />
        </div>
        <div className="hidden min-w-xxs lg:block lg:mt-20">
          <FriendRecommendationContainer />
        </div>
      </div>
    </>
  );
};

export default FeedPage;
