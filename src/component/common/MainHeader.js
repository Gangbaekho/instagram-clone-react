import React from "react";

// ICONS
import home from "../../image/default_home.png";
import heart from "../../image/default_heart.png";
import message from "../../image/default_message.png";
import user from "../../image/default_user.png";
import compass from "../../image/default_compass.png";
import clickedHome from "../../image/clicked_home.png";
import clickedHeart from "../../image/clicked_heart.png";
import clickedMessage from "../../image/clicked_message.png";
import clickedUser from "../../image/clicked_user.png";
import clickedCompass from "../../image/clicked_compass.png";

// 일단 해결해야 할 문제가 무엇이냐?
// MainHeader는 해당 아이콘을 누르면
// 다른 url로 redirect 해야 한다는 것이다.
// 음. 어쩃든 이 것의 내용을 공유해야 한다는 것인데
// 일단 가장 간단한 방법으로는 MainHeader를 각각의 Page에 넣은 다음에
// redux를 통해서 관련한 것을 바꿔주는 그런 것이지. 일단은 이걸로 해볼까나.
// 그리고 나중에 고치지 뭐.

const MainHeader = (props) => {
  return (
    <div className="fixed top-0 left-0 w-full">
      <div className="max-w-custom border-solid border-4 border-light-blue-500 text-center mx-auto flex justify-between items-center">
        <div>JINSTAGRAM</div>
        <div className="hidden md:block">SEARCHBOX</div>
        <ul className="flex">
          <li>
            <img className="h-12 cursor-pointer" src={clickedHome} />
          </li>
          <li>
            <img className="h-12 cursor-pointer" src={message} />
          </li>
          <li>
            <img className="h-12 cursor-pointer" src={compass} />
          </li>
          <li>
            <img className="h-12 cursor-pointer" src={heart} />
          </li>
          <li>
            <img className="h-12 cursor-pointer" src={user} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainHeader;
