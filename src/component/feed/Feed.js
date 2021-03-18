import React, { useState } from "react";

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
import { addReply } from "../../store/actions/feed";

import { fetchPostAPIWithJWT } from "../../utils/fetchApis";

const Feed = (props) => {
  const dispatch = useDispatch();

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

    fetchPostAPIWithJWT("/feed/like", { body: bodyData })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
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
              <img src={default_heart} className="w-10" />
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
        <div className="px-5 border-2 border-solid border-black">
          LIKE COUNT: {props.likeCount}
        </div>
        <div className="flex px-5 border-2 border-solid border-black">
          <div className="pr-2">{props.userNickName}</div>
          <div className="pl-2">{props.content}</div>
        </div>
        <div>
          {props.replyIds.map((reply) => {
            return <Reply key={reply._id} {...reply} />;
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
    </section>
  );
};

export default Feed;
