import React from "react";

import StoryCarousel from "../common/StoryCarousel";
import StoryCarouselItem from "../common/StoryCarouselItem";

import defaultUser from "../../image/default_user.s.png";

const StoryContainer = (props) => {
  return (
    <StoryCarousel>
      <StoryCarouselItem>
        <img src={defaultUser} />
      </StoryCarouselItem>
      <StoryCarouselItem>
        <img src={defaultUser} />
      </StoryCarouselItem>
      <StoryCarouselItem>
        <img src={defaultUser} />
      </StoryCarouselItem>
      <StoryCarouselItem>
        <img src={defaultUser} />
      </StoryCarouselItem>
      <StoryCarouselItem>
        <img src={defaultUser} />
      </StoryCarouselItem>
      <StoryCarouselItem>
        <img src={defaultUser} />
      </StoryCarouselItem>
      <StoryCarouselItem>
        <img src={defaultUser} />
      </StoryCarouselItem>
      <StoryCarouselItem>
        <img src={defaultUser} />
      </StoryCarouselItem>
      <StoryCarouselItem>
        <img src={defaultUser} />
      </StoryCarouselItem>
      <StoryCarouselItem>
        <img src={defaultUser} />
      </StoryCarouselItem>
    </StoryCarousel>
  );
};

export default StoryContainer;
