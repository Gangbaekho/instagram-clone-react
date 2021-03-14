import React, { useState } from "react";

const StoryCarousel = (props) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const numOfItems = props.children.length;

  const MAX_INDEX =
    numOfItems % 5 === 0
      ? Math.floor(numOfItems / 5) - 1
      : Math.floor(numOfItems / 5);

  return (
    <div className="flex">
      <div>
        <button
          onClick={() => {
            if (carouselIndex > 0) {
              setCarouselIndex((prev) => prev - 1);
            }
          }}
        >
          Backward
        </button>
      </div>
      <div className="overflow-hidden max-w-sm border-black border-2 border-solid">
        <div
          className="flex transform transition duration-300 ease-in-out"
          style={{ transform: `translate(-${carouselIndex * 640}px,0px)` }}
        >
          {props.children}
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            if (carouselIndex < MAX_INDEX) {
              setCarouselIndex((prev) => prev + 1);
            }
          }}
        >
          Forward
        </button>
      </div>
    </div>
  );
};

export default StoryCarousel;
