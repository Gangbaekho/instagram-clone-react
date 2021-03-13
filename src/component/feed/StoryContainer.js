import React from "react";

// 음. 어떻게 하는게 로직으로 맞을까.
// 일단 max-width를 설정하는게 맞긴 하는것 같은데
// max-width만 설정을 해주면 된다.

// 그래 일단은 max-width를 설정한 것이고
// 그 다음에 해야 할 것은?
// margin auto를 하긴 하는데, 친구 목록을 포함해서이긴 하네.
// 여기서 해도 되지 않을까 싶긴 한데 한 번 해보자

const StoryContainer = (props) => {
  return (
    <div className="border-black border-2 border-solid">
      This is Story container.
    </div>
  );
};

export default StoryContainer;
