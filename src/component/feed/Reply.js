import React from "react";

import clicked_heart from "../../image/clicked_heart.s.png";
import default_heart from "../../image/default_heart.s.png";
import { fetchPostAPIWithJWT } from "../../utils/fetchApis";

import { useDispatch } from "react-redux";
import { increaseReplyLike, decreaseReplyLike } from "../../store/actions/feed";

const Reply = (props) => {
  const dispatch = useDispatch();

  const isHeartClicked =
    props.likeUserIds.indexOf(localStorage.getItem("userId")) > -1;

  const likeButtonHandler = () => {
    console.log(props._id.toString());
    const bodyData = {
      replyId: props._id.toString(),
      feedId: props.feedId.toString(),
    };

    if (isHeartClicked) {
      dispatch(decreaseReplyLike(bodyData));
    } else {
      dispatch(increaseReplyLike(bodyData));
    }
  };

  return (
    <section className="flex px-5 justify-between border-2 border-black border-solid w-full">
      <article className="flex border-solid border-2 border-blue-200">
        <div className="pr-2">{props.userNickName}</div>
        <div className="pl-2">{props.content}</div>
      </article>
      <article className="border-solid border-2 border-blue-200">
        <button onClick={likeButtonHandler}>
          <img
            src={isHeartClicked ? clicked_heart : default_heart}
            className="w-6"
          />
        </button>
      </article>
    </section>
  );
};

export default Reply;
