import React from "react";
import userProfileImage from "../../image/default_user.s.png";

const FriendRecommendation = (props) => {
  return (
    <div className="flex justify-between items-center w-96">
      <div
        className={`${props.owner ? "w-20 h-20" : "w-14 h-14"} rounded-full`}
      >
        <img
          className="w-full h-full object-contain rounded-full"
          src={userProfileImage}
        />
      </div>
      <div className="w-48">
        <div className="font-bold">NickName</div>
        <div className="text-gray-400">Introduction</div>
      </div>
      <div className="w-16 text-right">
        <button className="text-blue-500 ">
          {props.owner ? "전환" : "팔로우"}
        </button>
      </div>
    </div>
  );
};

export default FriendRecommendation;
