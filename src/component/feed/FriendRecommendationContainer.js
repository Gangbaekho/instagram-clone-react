import React from "react";
import FriendRecommendation from "./FriendRecommendation";

const FriendRecommendationContainer = (props) => {
  return (
    <div className="w-min border-solid border-black border-2 px-4 space-y-4">
      <FriendRecommendation owner={true} />
      <div className="flex justify-between">
        <div className="text-gray-400">회원님을 위한 추천</div>
        <div>
          <button className="font-bold">모두 보기</button>
        </div>
      </div>
      <FriendRecommendation />
      <FriendRecommendation />
    </div>
  );
};

export default FriendRecommendationContainer;
