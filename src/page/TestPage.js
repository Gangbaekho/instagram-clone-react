import React, { useState, useRef, useEffect } from "react";
import CustomCarousel from "../component/common/CustomCarousel";

const TestPage = (props) => {
  const [translateXValue, setTranslateXValue] = useState(0);
  const [myCss, setMyCss] = useState("");

  useEffect(() => {
    setMyCss(`translate(${translateXValue * 160}px,0px)`);
    console.log(myCss);
  }, [translateXValue]);

  const myRef = useRef();

  return (
    <div className="flex">
      <div>
        <button
          onClick={() => {
            setTranslateXValue((prev) => prev - 1);
            console.log(translateXValue);
          }}
        >
          Back
        </button>
      </div>
      <div className="max-w-md overflow-hidden border-2 border-yellow-900 border-solid">
        <div
          ref={myRef}
          className="flex border-2 border-black border-solid transform"
          style={{ transform: myCss }}
        >
          <div className="w-40 border-2 border-blue-500 border-solid flex-none">
            Item 1
          </div>
          <div className="w-40 border-2 border-blue-500 border-solid flex-none">
            Item 2
          </div>
          <div className="w-40 border-2 border-blue-500 border-solid flex-none">
            Item 3
          </div>
          <div className="w-40 border-2 border-blue-500 border-solid flex-none">
            Item 4
          </div>
          <div className="w-40 border-2 border-blue-500 border-solid flex-none">
            Item 5
          </div>
          <div className="w-40 border-2 border-blue-500 border-solid flex-none">
            Item 6
          </div>
          <div className="w-40 border-2 border-blue-500 border-solid flex-none">
            Item 7
          </div>
          <div className="w-40 border-2 border-blue-500 border-solid flex-none">
            Item 8
          </div>
          <div className="w-40 border-2 border-blue-500 border-solid flex-none">
            Item 9
          </div>
          <div className="w-40 border-2 border-blue-500 border-solid flex-none">
            Item 10
          </div>
          <div className="w-40 border-2 border-blue-500 border-solid flex-none">
            Item 11
          </div>
          <div className="w-40 border-2 border-blue-500 border-solid flex-none">
            Item 12
          </div>
          <div className="w-40 border-2 border-blue-500 border-solid flex-none">
            Item 13
          </div>
          <div className="w-40 border-2 border-blue-500 border-solid flex-none">
            Item 14
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            console.log("forward");
          }}
        >
          Forward
        </button>
      </div>
    </div>
  );
};

export default TestPage;
