import React from "react";

import StoryCarousel from "../common/StoryCarousel";
import StoryCarouselItem from "../common/StoryCarouselItem";

import defaultUser from "../../image/default_user.s.png";

// StoryCarousel 의 크기는 적당한데
// StoryCarouselItem의 크기를 수정해야 할 듯.
// 너무 사진이 크게 나온다.
// Navigation Image도 이상하게 나옴.
// 수정해야 함.

// 각각의 Component들의 역할이
// 어디까지인지 헷갈려서
// Component를 좀 더 세분화해야 할 듯 하다.
// 어떤 역할을 하는지 적어놔야겠다.

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
