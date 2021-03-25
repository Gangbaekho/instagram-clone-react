import React from "react";

import default_user from "../../image/default_user.s.png";
import default_heart from "../../image/default_heart.s.png";

import moment from "moment";

import { REREPLY } from "../../constant/replyType";

import { useDispatch } from "react-redux";
import { addMoreRereply } from "../../store/actions/detailFeed";

const FeedDetailReply = (props) => {
  const dispatch = useDispatch();

  const changeReplyTypeAndParentIdHandler = () => {
    props.changeReplyTypeAndParentIdHandler(REREPLY, props._id);
  };

  const showMoreRereplyHandler = () => {
    const feedId = props.feedId;
    const replyId = props._id;
    const skip = props.rereplyIds.length;

    dispatch(addMoreRereply({ feedId: feedId, replyId: replyId, skip: skip }));
  };

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
          {props.recursiveExit === undefined && (
            <button
              className="text-sm"
              onClick={changeReplyTypeAndParentIdHandler}
            >
              답글 달기 버튼
            </button>
          )}
        </div>
        <div>
          {props.recursiveExit === undefined && props.rereplyCount > 0 && (
            <button className="text-sm" onClick={showMoreRereplyHandler}>
              ---&nbsp;&nbsp;&nbsp;답글 보기({props.rereplyCount}개)
            </button>
          )}
          {
            props.recursiveExit === undefined &&
              props.rereplyIds.map((rereply) => (
                <FeedDetailReply recursiveExit={true} {...rereply} />
              ))
            // (
            //   <div>
            //     <FeedDetailReply recursiveExit={true} />
            //   </div>
            // )
          }
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
