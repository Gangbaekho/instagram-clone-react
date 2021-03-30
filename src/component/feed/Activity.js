import React from "react";

import SERVER_ADDRESS from "../../constant/serverAddress";

const Activity = (props) => {
  let content;
  let component;

  const feedImageComponent = (
    <img
      src={`${SERVER_ADDRESS}/${props.feedId.contentUrls[0]}`}
      className="w-11 h-11 object-cover"
    />
  );

  const followButtonComponent = (
    <button className="bg-blue-500 rounded-xl">팔로우</button>
  );

  switch (props.activityType) {
    case "REPLY":
      content = `${props.whoId.nickName}님이 댓글을 달았습니다.`;
      component = feedImageComponent;
      break;
    case "LIKE":
      content = `${props.whoId.nickName}님이 사진을 좋아합니다.`;
      component = feedImageComponent;
      break;
    case "FOLLOW":
      content = `${props.whoId.nickName}님이 팔로우 신청을 하였습니다.`;
      component = followButtonComponent;
      break;
    default:
      return;
  }

  return (
    <div
      className="flex justify-center items-center border-check"
      style={{ width: "500px" }}
    >
      <div className="border-check c-flex-1">
        <img
          src={`${SERVER_ADDRESS}/${props.whoId.profileImageUrl}`}
          className="w-full"
        />
      </div>
      <div className="border-check c-flex-8 px-3">{content}</div>
      <div className="border-check c-flex-1">{component}</div>
    </div>
  );
};

export default Activity;
