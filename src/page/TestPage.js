import React, { useState, useRef, useEffect } from "react";

const TestPage = (props) => {
  return (
    <div className="flex flex-col justify-center w-screen h-screen border-2 border-solid border-black bg-black relative">
      <div className="absolute top-10 right-10 bg-white">XICON</div>
      <div className="flex justify-center mr-10 ml-10 border-black border-2 border-solid bg-white">
        <div className="border-black border-2 border-solid w-60">
          <article className="flex justify-center border-black border-2 border-solid">
            <div className="border-black border-2 border-solid">사진</div>
            <div className="border-black border-2 border-solid">이름</div>
            <div className="border-black border-2 border-solid">팔로잉</div>
            <div className="border-black border-2 border-solid">...</div>
          </article>
          <article className="border-black border-2 border-solid">사진</article>
          <article className="flex border-black border-2 border-solid">
            <div className="border-black border-2 border-solid">아이콘즈</div>
            <div className="border-black border-2 border-solid">공유</div>
          </article>
          <article className="border-black border-2 border-solid">
            좋아요
          </article>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
