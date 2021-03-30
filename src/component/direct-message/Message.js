import React from "react";
import SERVER_ADDRESS from "../../constant/serverAddress";
import default_user from "../../image/default_user.s.png";

const Message = (props) => {
  const { from, to, content, friendProfileImage } = props;
  const fromMe = from === localStorage.getItem("userId");

  return (
    <div
      className={`flex ${
        fromMe ? "justify-end" : "justify-start"
      } items-start border-check px-5`}
    >
      {!fromMe && (
        <div>
          <img src={default_user} className="w-10 h-10" />
          {/* <img src={`${SERVER_ADDRESS}/${friendProfileImage}`} /> */}
        </div>
      )}
      <div
        className={`${
          fromMe ? "bg-gray-200" : "bg-white"
        } border-check rounded-xl p-2`}
        style={{ maxWidth: "250px" }}
      >
        {content}
      </div>
    </div>
  );
};

export default Message;
