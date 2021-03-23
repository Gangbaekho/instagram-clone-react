import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";

import SERVER_ADDRESS from "../../constant/serverAddress";
import Reply from "./Reply";

import default_heart from "../../image/default_heart.s.png";
import clicked_heart from "../../image/clicked_heart.s.png";
import default_detail from "../../image/default_detail.s.png";
import clicked_detail from "../../image/clicked_detail.s.png";
import default_share from "../../image/default_share.s.png";
import clicked_share from "../../image/clicked_share.s.png";
import default_setting from "../../image/default_setting.s.png";

import { useDispatch } from "react-redux";
import { addReply, increaseLike, decreaseLike } from "../../store/actions/feed";

import { fetchPostAPIWithJWT } from "../../utils/fetchApis";

const Feed = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [isMore, setIsMore] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);
  const observed = useRef(null);

  useEffect(() => {
    const {
      offsetHeight,
      scrollHeight,
      offsetWidth,
      scrollWidth,
    } = observed.current;
    const overFlowResult =
      offsetHeight < scrollHeight || offsetWidth < scrollWidth;
    setIsOverflow(overFlowResult);
  }, [observed]);

  const [replyContent, setReplyContent] = useState("");

  const replyInputHandler = (e) => {
    setReplyContent(e.target.value);
  };

  const replyFormHandler = (e) => {
    e.preventDefault();

    const bodyData = {
      feedId: props._id,
      content: replyContent,
    };

    dispatch(addReply(bodyData));
    e.target.elements.content.value = "";
    setReplyContent("");
  };

  const likeButtonHandler = () => {
    const bodyData = {
      feedId: props._id,
    };

    if (props.isHeartClicked) {
      dispatch(decreaseLike(bodyData));
    } else {
      dispatch(increaseLike(bodyData));
    }
  };

  return (
    <section className="border-blue-500 border-solid border-2">
      <article className="flex justify-between items-center border-red-300 border-solid border-2 h-14">
        <div>
          <img
            src={SERVER_ADDRESS + "/" + props.userProfileImageUrl}
            className="w-10 inline align-middle"
          />
          <span className="align-middle">{props.userNickName}</span>
        </div>
        <button>
          <img src={default_setting} className="w-10" />
        </button>
      </article>
      <article>
        <img
          src={SERVER_ADDRESS + "/" + props.contentUrls[0]}
          className="w-full"
        />
      </article>
      <article>
        <div className="flex justify-between items-center px-5 border-2 border-solid border-black">
          <div>
            <button onClick={likeButtonHandler}>
              <img
                src={props.isHeartClicked ? clicked_heart : default_heart}
                className="w-10"
              />
            </button>
            <button>
              <img src={default_detail} className="w-10" />
            </button>
          </div>
          <div>
            <button>
              <img src={default_share} className="w-10" />
            </button>
          </div>
        </div>
        <div className="px-5 border-2 border-solid border-black font-bold">
          좋아요{" "}
          {props.likeCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}개
        </div>
        <div className="flex px-5 border-2 border-solid border-black">
          <div className="pr-2">{props.userNickName}</div>
          <div className={`pl-2 ${isMore ? "" : "truncate"}`} ref={observed}>
            {isMore
              ? props.content.split("\n").map((p) => {
                  return (
                    <span>
                      {p}
                      <br />
                    </span>
                  );
                })
              : `${props.content.split("\n")[0]}`}
            {isOverflow || props.content.split("\n").length > 1 ? (
              <div className={`${isMore ? "hidden" : "block"}`}>
                <button
                  onClick={() => {
                    setIsMore(true);
                  }}
                >
                  더보기..
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="text-gray-300 px-5">
          <button
            onClick={() => {
              history.push(`/feed/${props._id}`);
            }}
          >
            {`댓글${props.replyCount
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}개 모두 보기`}
          </button>
        </div>
        <div>
          {props.replyIds.map((reply) => {
            return (
              <Reply key={reply._id} {...reply} feedId={props._id.toString()} />
            );
          })}
        </div>
      </article>
      <form onSubmit={replyFormHandler} className="grid grid-cols-10 px-5">
        <div className="place-self-start">imogi</div>
        <input
          type="text"
          placeholder="text me!"
          name="content"
          className="w-full col-span-8 place-self-center"
          onInput={replyInputHandler}
        />
        <div className="place-self-end">
          <button>Submit</button>
        </div>
      </form>
      <article>
        <div>{moment(props.createdAt).fromNow()}</div>
      </article>
    </section>
  );
};

export default Feed;
