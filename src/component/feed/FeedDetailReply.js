import React from "react";

import default_user from "../../image/default_user.s.png";
import default_heart from "../../image/default_heart.s.png";

import moment from "moment";

const FeedDetailReply = (props) => {
  return (
    <section className="grid grid-cols-6 border-2 border-solid border-black max-w-custom">
      <article className="border-2 border-black border-solid">
        <img src={default_user} className="w-full" />
      </article>
      <article className="border-2 border-black border-solid col-span-4">
        <a href="http://www.naver.com">{props.userNickName}</a> {props.content}
        <div>
          <span className="text-sm">{moment(props.createdAt).fromNow()}</span>
          <span className="text-sm">좋아요 {props.likeCount}개</span>
          <button className="text-sm">답글 달기 버튼</button>
        </div>
        <div>
          {props.recursiveExit === undefined && (
            <button className="text-sm">
              ---&nbsp;&nbsp;&nbsp;답글 보기(8개)
            </button>
          )}
          {props.recursiveExit === undefined && (
            <div>
              <FeedDetailReply recursiveExit={true} />
            </div>
          )}
        </div>
      </article>
      <article className="border-2 border-black border-solid relative">
        <img
          src={default_heart}
          className="w-5 absolute top-2 left-1/2 transform -translate-x-1/2"
        />
      </article>
    </section>
  );
};

export default FeedDetailReply;
