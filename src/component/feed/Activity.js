import React from "react";

import SERVER_ADDRESS from "../../constant/serverAddress";

const Activity = (props) => {
  return (
    <div
      className="flex justify-center items-center border-check"
      style={{ width: "500px" }}
    >
      <div className="border-check c-flex-1">
        <img
          src={`${SERVER_ADDRESS}/${props.profileImageUrl}`}
          className="w-full"
        />
      </div>
      <div className="border-check c-flex-8 px-3">
        {`${props.nickName}님이 사진을 좋아합니다. 댓글을 달았습니다. 팔로우 신청을 하였습니다.`}
      </div>
      <div className="border-check c-flex-1">
        <img
          src={`${SERVER_ADDRESS}/${props.profileImageUrl}`}
          className="w-11 h-11 object-cover"
        />
      </div>
    </div>
  );
};

export default Activity;
