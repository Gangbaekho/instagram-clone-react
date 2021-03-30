import React from "react";
import default_user from "../../image/default_user.s.png";

const Conversation = (props) => {
  return (
    <div className="flex items-center border-check pl-5 hover:bg-gray-200 cursor-pointer">
      <div>
        <img src={default_user} className="w-14 h-14" />
      </div>
      <div>
        <h3 className="font-bold">userId</h3>
      </div>
    </div>
  );
};

export default Conversation;
