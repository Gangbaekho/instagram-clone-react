import React from "react";

const StoryCarouselItem = (props) => {
  return (
    <div className="flex-none w-32 border-black border-2 border-solid">
      {props.children}
    </div>
  );
};

export default StoryCarouselItem;
