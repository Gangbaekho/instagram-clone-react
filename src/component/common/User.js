import React from "react";

import SERVER_ADDRESS from "../../constant/serverAddress";
import default_user from "../../image/default_user.s.png";

const User = (props) => {
  const addToFollowListHandler = () => {
    alert(props._id);
  };

  return (
    <div className="border-2 border-black border-solid bg-white hover:bg-gray-100">
      <section className="flex justify-items-center items-center space-x-3">
        <article className="border-2 border-solid border-black rounded-full overflow-hidden">
          <img
            src={`${SERVER_ADDRESS}/${props.profileImageUrl}`}
            className="w-14"
          />
        </article>
        <article className="border-2 border-solid border-black">
          <h4 className="font-bold">{props.nickName}</h4>
          {props.userName && (
            <h4 className="text-gray-500">{props.userName}</h4>
          )}
        </article>
        <article>
          <button
            className="bg-blue-500 rounded-lg"
            onClick={addToFollowListHandler}
          >
            팔로우
          </button>
        </article>
      </section>
    </div>
  );
};

export default User;
