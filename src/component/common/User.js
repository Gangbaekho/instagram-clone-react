import React from "react";

import SERVER_ADDRESS from "../../constant/serverAddress";
import { fetchPostAPIWithJWT } from "../../utils/fetchApis";

const User = (props) => {
  const addToFollowListHandler = () => {
    fetchPostAPIWithJWT("/follow/", { body: { followeeId: props._id } })
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
    <div className="border-check bg-white hover:bg-gray-100">
      <section className="flex justify-items-center items-center space-x-3">
        <article className="border-check rounded-full overflow-hidden">
          <img
            src={`${SERVER_ADDRESS}/${props.profileImageUrl}`}
            className="w-14"
          />
        </article>
        <article className="border-check">
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
