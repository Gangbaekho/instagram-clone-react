import React from "react";

import default_user from "../../image/default_user.s.png";
import default_heart from "../../image/default_heart.s.png";
import clicked_heart from "../../image/clicked_heart.s.png";

import moment from "moment";

import { REREPLY } from "../../constant/replyType";

import { useDispatch } from "react-redux";
import { addMoreRereply } from "../../store/actions/detailFeed";
import { increaseReplyLike, decreaseReplyLike } from "../../store/actions/feed";
import {
  increaseRereplyLike,
  decreaseRereplyLike,
} from "../../store/actions/detailFeed";

const FeedDetailReply = (props) => {
  const dispatch = useDispatch();

  const isHeartClicked =
    props.likeUserIds.indexOf(localStorage.getItem("userId")) > -1;

  const likeButtonHandler = () => {
    let bodyData;
    let decreaseReplyLikeAction;
    let increaseReplyLikeAction;

    if (props.recursiveExit === undefined) {
      bodyData = {
        replyId: props._id.toString(),
        feedId: props.feedId.toString(),
      };
      decreaseReplyLikeAction = decreaseReplyLike;
      increaseReplyLikeAction = increaseReplyLike;
      console.log(bodyData);
    } else {
      bodyData = {
        rereplyId: props._id.toString(),
        replyId: props.replyId.toString(),
        feedId: props.feedId.toString(),
      };
      console.log(bodyData);
      decreaseReplyLikeAction = decreaseRereplyLike;
      increaseReplyLikeAction = increaseRereplyLike;
    }
    if (isHeartClicked) {
      dispatch(decreaseReplyLikeAction(bodyData));
    } else {
      dispatch(increaseReplyLikeAction(bodyData));
    }
  };

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
          <span className="text-sm">????????? {props.likeCount}???</span>
          {props.recursiveExit === undefined && (
            <button
              className="text-sm"
              onClick={changeReplyTypeAndParentIdHandler}
            >
              ?????? ?????? ??????
            </button>
          )}
        </div>
        <div>
          {props.recursiveExit === undefined && props.rereplyCount > 0 && (
            <button className="text-sm" onClick={showMoreRereplyHandler}>
              ---&nbsp;&nbsp;&nbsp;?????? ??????({props.rereplyCount}???)
            </button>
          )}
          {
            props.recursiveExit === undefined &&
              props.rereplyIds.map((rereply) => (
                <FeedDetailReply
                  key={rereply._id.toString()}
                  recursiveExit={true}
                  {...rereply}
                  replyId={props._id.toString()}
                  feedId={props.feedId}
                />
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
        {
          // ???????????? ????????? ?????? ??? ??? ??????.
          //
        }
        <button onClick={likeButtonHandler}>
          <img
            src={isHeartClicked ? clicked_heart : default_heart}
            className="w-5 absolute top-2 left-1/2 transform -translate-x-1/2"
          />
        </button>
      </article>
    </section>
  );
};

export default FeedDetailReply;
