import React from "react";

import SERVER_ADDRESS from "../../constant/serverAddress";

// import defaultUser from "../../image/default_user.s.png";

const Feed = (props) => {
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
        <div className="flex justify-between items-center px-5">
          <div>ICONS</div>
          <div>SHARE ICON</div>
        </div>
        <div className="px-5">LIKE COUNT: {props.likeCount}</div>
        <div className="px-5">{props.content}</div>
        <div className="px-5">REPLY AREA</div>
      </article>
      <article className="grid grid-cols-10 px-5">
        <div className="place-self-start">imogi</div>
        <input
          type="text"
          placeholder="text me!"
          className="w-full col-span-8 place-self-center"
        />
        <div className="place-self-end">submit</div>
      </article>
    </section>
  );
};

export default Feed;
