import React, { useState, useRef, useEffect } from "react";

import default_user from "../image/default_user.s.png";
import default_heart from "../image/default_heart.s.png";
import default_detail from "../image/default_detail.s.png";
import default_share from "../image/default_share.s.png";

const TestPage = (props) => {
  return (
    <section className="flex flex-col justify-center w-screen h-screen border-2 border-solid border-black bg-black relative">
      <div className="absolute top-10 right-10 bg-white">XICON</div>
      <div className="flex justify-center mr-10 ml-10 border-black border-2 border-solid bg-white">
        <div className="border-black border-2 border-solid w-60">
          <article className="flex justify-center border-black border-2 border-solid">
            <div className="border-black border-2 border-solid w-10">
              <img src={default_user} />
            </div>
            <div className="border-black border-2 border-solid">Ronaldo</div>
            <div className="border-black border-2 border-solid">팔로잉</div>
            <div className="border-black border-2 border-solid">...</div>
          </article>
          <article className="border-black border-2 border-solid">
            <img src={default_user} className="w-full" />
          </article>
          <article className="flex justify-between border-black border-2 border-solid">
            <div className="border-black border-2 border-solid">
              <img src={default_heart} className="w-10 inline-block" />
              <img src={default_detail} className="w-10 inline-block" />
            </div>
            <div className="border-black border-2 border-solid">
              <img src={default_share} className="w-10 inline-block" />
            </div>
          </article>
          <article className="border-black border-2 border-solid">
            좋아요 100개
          </article>
          <article>2일전</article>
        </div>
      </div>
    </section>
  );
};

export default TestPage;
