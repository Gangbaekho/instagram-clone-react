import React from "react";

import { useDispatch } from "react-redux";
import { TEST_ACTION } from "../store/actions/test";

import default_user from "../image/default_user.s.png";
import test from "../image/test.s.jpg";

const TestPageThree = (props) => {
  return (
    <div className="border-check ">
      <div
        className="flex justify-center items-center border-check"
        style={{ width: "500px" }}
      >
        <div className="border-check c-flex-1">
          <img src={default_user} className="w-full" />
        </div>
        <div className="border-check c-flex-8 px-3">
          ID님이 사진을 좋아합니다... ID님이 사진을 좋아합니다... ID님이 사진을
          좋아합니다...
        </div>
        <div className="border-check c-flex-1">
          <img src={test} className="w-11 h-11 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default TestPageThree;
