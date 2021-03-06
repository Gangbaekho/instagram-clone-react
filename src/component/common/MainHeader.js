import React, { useState, useRef, useLayoutEffect } from "react";

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
import { fetchUsers } from "../../store/actions/user";

import {
  FEED,
  DIRECT_MESSAGE,
  EXPLORE,
  ACTIVITY,
  ADD,
  INDIVISUAL,
} from "../../constant/page";

import UserList from "../common/UserList";
import { fetchGetAPIWithJWT } from "../../utils/fetchApis";
import ActivityContainer from "../feed/ActivityContainer";

const MainHeader = (props) => {
  const myRef = useRef();
  const inputRef = useRef();

  let typingTimer;
  const doneTypingInterval = 1000;

  const { selectedIcon } = useSelector((state) => state.navigations);
  const history = useHistory();
  const dispatch = useDispatch();

  const [finding, setFinding] = useState(false);
  const [isActivityClicked, setIsActivityClicked] = useState(false);
  const [activities, setActivities] = useState([]);

  const iconClickHandler = (icon) => {
    dispatch(setIcon(icon));
    history.push(`/${icon}`);
  };

  const whenTimeout = () => {
    const nickName = inputRef.current.value;
    if (!nickName) {
      return;
    }
    dispatch(fetchUsers(nickName));
    setFinding(true);
  };

  const keyUpHandler = () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(whenTimeout, doneTypingInterval);
  };

  const keyDownHandler = () => {
    clearTimeout(typingTimer);
  };

  const clickHeartIconHandler = () => {
    setIsActivityClicked(true);
    dispatch(setIcon(ACTIVITY));
    fetchGetAPIWithJWT("/activity/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setActivities(data.activities);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useLayoutEffect(() => {
    console.dir(myRef.current.getBoundingClientRect());
  });

  return (
    <div
      className="fixed top-0 left-0 w-full border-solid border-2 border-gray-500 bg-white"
      ref={myRef}
    >
      {finding && (
        <div
          className="fixed w-screen h-screen z-10"
          onClick={() => {
            setFinding(false);
          }}
        >
          <div className="fixed z-20 w-96 top-16 left-1/2 border-black border-2 border-solid transform -translate-x-1/2">
            <UserList />
          </div>
        </div>
      )}
      {isActivityClicked && (
        <div
          className="fixed w-screen h-screen z-10"
          onClick={() => {
            setIsActivityClicked(false);
            dispatch(setIcon(FEED));
          }}
        >
          <div
            className="fixed z-20 top-16 right-3 border-check"
            style={{ width: "500px" }}
          >
            <ActivityContainer activities={activities} />
          </div>
        </div>
      )}
      <div className=" text-center mx-auto flex justify-between items-center py-2">
        <div className="font-custom w-60 text-2xl">JINSTAGRAM</div>
        <div className="hidden sm:block sm:border-2 sm:border-black sm:border-solid">
          <input
            type="text"
            placeholder="Enter Nickname"
            ref={inputRef}
            onKeyUp={keyUpHandler}
            onKeyDown={keyDownHandler}
            onFocus={() => {
              setFinding(true);
            }}
          />
        </div>
        <ul className="flex">
          <li>
            <img
              className="h-10 cursor-pointer"
              src={selectedIcon === FEED || "" ? clickedHome : home}
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
              onClick={clickHeartIconHandler}
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
