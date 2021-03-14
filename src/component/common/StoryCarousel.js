import React, { useState } from "react";

const StoryCarousel = (props) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const numOfItems = props.children.length;

  const MAX_INDEX =
    numOfItems % 4 === 0
      ? Math.floor(numOfItems / 4) - 1
      : Math.floor(numOfItems / 4);

  return (
    <div className="flex justify-between">
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
      <div className="overflow-hidden max-w-xs border-black border-2 border-solid">
        <div
          className="flex transform transition duration-300 ease-in-out"
          style={{ transform: `translate(-${carouselIndex * 512}px,0px)` }}
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
