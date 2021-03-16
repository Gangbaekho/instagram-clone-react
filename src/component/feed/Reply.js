import React from "react";

const Reply = (props) => {
  return (
    <section className="flex px-5 justify-between border-2 border-black border-solid w-full">
      <article className="flex border-solid border-2 border-blue-200">
        <div className="pr-2">{props.userNickName}</div>
        <div className="pl-2">{props.content}</div>
      </article>
      <article className="border-solid border-2 border-blue-200">
        HEART ICON
      </article>
    </section>
  );
};

export default Reply;
