import React, { useRef, useLayoutEffect } from "react";

// ICONS
import home from "../../image/default_home.s.png";
import heart from "../../image/default_heart.s.png";
import message from "../../image/default_message.s.png";
import user from "../../image/default_user.s.png";
import compass from "../../image/default_compass.s.png";
import clickedHome from "../../image/clicked_home.s.png";
import clickedHeart from "../../image/clicked_heart.s.png";
import clickedMessage from "../../image/clicked_message.s.png";
import clickedUser from "../../image/clicked_user.s.png";
import clickedCompass from "../../image/clicked_compass.s.png";
import add from "../../image/default_add.s.png";
import clickedAdd from "../../image/clicked_add.s.png";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setIcon } from "../../store/actions/navigation";

import {
  FEED,
  DIRECT_MESSAGE,
  EXPLORE,
  ACTIVITY,
  ADD,
  INDIVISUAL,
} from "../../constant/page";

const MainHeader = (props) => {
  const myRef = useRef();
  const inputRef = useRef();
  let typingTimer;
  const doneTypingInterval = 1000;

  const { selectedIcon } = useSelector((state) => state.navigations);
  const history = useHistory();
  const dispatch = useDispatch();

  const iconClickHandler = (icon) => {
    dispatch(setIcon(icon));
    history.push(`/${icon}`);
  };

  const whenTimeout = () => {
    const nickName = inputRef.current.value;
    fetch(`http://localhost:8080/user/${nickName}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const keyUpHandler = () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(whenTimeout, doneTypingInterval);
  };

  const keyDownHandler = () => {
    clearTimeout(typingTimer);
  };

  useLayoutEffect(() => {
    console.dir(myRef.current.getBoundingClientRect());
  });

  return (
    <div
      className="fixed top-0 left-0 w-full border-solid border-2 border-gray-500 bg-white"
      ref={myRef}
    >
      <div className=" text-center mx-auto flex justify-between items-center py-2">
        <div className="font-custom text-2xl">JINSTAGRAM</div>
        <div className="hidden sm:block sm:border-2 sm:border-black sm:border-solid">
          <input
            type="text"
            placeholder="Enter Nickname"
            ref={inputRef}
            onKeyUp={keyUpHandler}
            onKeyDown={keyDownHandler}
          />
        </div>
        <ul className="flex">
          <li>
            <img
              className="h-10 cursor-pointer"
              src={selectedIcon === FEED ? clickedHome : home}
              onClick={iconClickHandler.bind(this, FEED)}
            />
          </li>
          <li>
            <img
              className="h-10 cursor-pointer"
              src={selectedIcon === DIRECT_MESSAGE ? clickedMessage : message}
              onClick={iconClickHandler.bind(this, DIRECT_MESSAGE)}
            />
          </li>
          <li>
            <img
              className="h-10 cursor-pointer"
              src={selectedIcon === EXPLORE ? clickedCompass : compass}
              onClick={iconClickHandler.bind(this, EXPLORE)}
            />
          </li>
          <li>
            <img
              className="h-10 cursor-pointer"
              src={selectedIcon === ACTIVITY ? clickedHeart : heart}
              onClick={iconClickHandler.bind(this, ACTIVITY)}
            />
          </li>
          <li>
            <img
              className="h-10 cursor-pointer"
              src={selectedIcon === ADD ? clickedAdd : add}
              onClick={iconClickHandler.bind(this, ADD)}
            />
          </li>
          <li>
            <img
              className="h-10 cursor-pointer"
              src={selectedIcon === INDIVISUAL ? clickedUser : user}
              onClick={iconClickHandler.bind(this, INDIVISUAL)}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainHeader;
