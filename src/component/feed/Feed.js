import React, { useState } from "react";

import SERVER_ADDRESS from "../../constant/serverAddress";
import Reply from "./Reply";
import { fetchPostAPIWithJWT } from "../../utils/fetchApis";

// import defaultUser from "../../image/default_user.s.png";

const Feed = (props) => {
  const [replyContent, setReplyContent] = useState("");

  const replyInputHandler = (e) => {
    setReplyContent(e.target.value);
  };

  const replySubmitHandler = () => {
    const bodyData = {
      feedId: props._id,
      content: replyContent,
    };

    fetchPostAPIWithJWT("/reply/", { body: bodyData })
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
        <div>dotdotdot</div>
      </article>
      <article>
        <img
          src={SERVER_ADDRESS + "/" + props.contentUrls[0]}
          className="w-full"
        />
      </article>
      <article>
        <div className="flex justify-between items-center px-5 border-2 border-solid border-black">
          <div>ICONS</div>
          <div>SHARE ICON</div>
        </div>
        <div className="px-5 border-2 border-solid border-black">
          LIKE COUNT: {props.likeCount}
        </div>
        <div className="flex px-5 border-2 border-solid border-black">
          <div className="pr-2">{props.userNickName}</div>
          <div className="pl-2">{props.content}</div>
        </div>
        {props.replyIds.map((reply) => {
          return <Reply key={reply._id} {...reply} />;
        })}
      </article>
      <article className="grid grid-cols-10 px-5">
        <div className="place-self-start">imogi</div>
        <input
          type="text"
          placeholder="text me!"
          className="w-full col-span-8 place-self-center"
          onInput={replyInputHandler}
        />
        <div className="place-self-end">
          <button onClick={replySubmitHandler}>Submit</button>
        </div>
      </article>
    </section>
  );
};

export default Feed;
