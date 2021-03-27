import React from "react";

import default_user from "../../image/default_user.s.png";

const User = (props) => {
  return (
    <div className="border-2 border-black border-solid bg-white hover:bg-gray-100">
      <section className="flex justify-items-center items-center">
        <article className="border-2 border-solid border-black rounded-full overflow-hidden">
          <img src={default_user} className="w-14" />
        </article>
        <article className="border-2 border-solid border-black">
          <h4 className="font-bold">cristiano</h4>
          <h4 className="text-gray-500">Cristiano Ronaldo</h4>
        </article>
      </section>
    </div>
  );
};

export default User;
