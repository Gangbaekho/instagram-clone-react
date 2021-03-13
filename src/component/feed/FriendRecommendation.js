import React from "react";
import userProfileImage from "../../image/default_user.s.png";

const FriendRecommendation = (props) => {
  return (
    <div className="flex border-2 justify-between items-center border-solid border-black w-96">
      <div
        className={`border-2 border-solid border-black ${
          props.owner ? "w-20 h-20" : "w-14 h-14"
        } rounded-full`}
      >
        <img
          className="w-full h-full object-contain rounded-full"
          src={userProfileImage}
        />
      </div>
      <div className="border-2 border-solid border-black w-48">
        <div className="font-bold">NickName</div>
        <div className="text-gray-400">Introduction</div>
      </div>
      <div className="border-2 border-solid border-black w-16">
        <button className="text-blue-500 ">Convert</button>
      </div>
    </div>
  );
};

export default FriendRecommendation;
