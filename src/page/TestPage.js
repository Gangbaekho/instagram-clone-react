import React, { useState, useRef, useEffect } from "react";
import CustomCarousel from "../component/common/CustomCarousel";

// 한 번에 보여줄 갯수
// 한 칸에 차지하는 너비
// 전체 Item의 갯수가 필요함.

const TestPage = (props) => {
  const [translateXValue, setTranslateXValue] = useState(0);
  const [myCss, setMyCss] = useState("");

  const myRef = useRef();

  console.dir(myRef.current.children.length);

  useEffect(() => {
    setMyCss(`translate(${translateXValue * 320}px,0px)`);
    console.log(myCss);
  }, [translateXValue]);

  return (
    <div className="flex">
      <div>
        <button
          onClick={() => {
            if (translateXValue < 0) {
              setTranslateXValue((prev) => prev + 1);
            }
          }}
        >
          Back
        </button>
      </div>
      <div className="max-w-md overflow-hidden border-2 border-yellow-900 border-solid">
        <div
          className="flex transform transition delay-150 duration-200 ease-in-out "
          style={{ transform: myCss }}
          ref={myRef}
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
            if (translateXValue > -5) {
              setTranslateXValue((prev) => prev - 1);
            }
          }}
        >
          Forward
        </button>
      </div>
    </div>
  );
};

export default TestPage;
