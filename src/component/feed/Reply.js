import React from "react";

import default_heart from "../../image/default_heart.s.png";
import { fetchPostAPIWithJWT } from "../../utils/fetchApis";

const Reply = (props) => {
  const likeButtonHandler = () => {
    const bodyData = {
      replyId: props._id,
    };

    fetchPostAPIWithJWT("/reply/like", { body: bodyData })
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
    <section className="flex px-5 justify-between border-2 border-black border-solid w-full">
      <article className="flex border-solid border-2 border-blue-200">
        <div className="pr-2">{props.userNickName}</div>
        <div className="pl-2">{props.content}</div>
      </article>
      <article className="border-solid border-2 border-blue-200">
        <button onClick={likeButtonHandler}>
          <img src={default_heart} className="w-6" />
        </button>
      </article>
    </section>
  );
};

export default Reply;
