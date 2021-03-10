import React from "react";

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

const MainHeader = (props) => {
  const { selectedIcon } = useSelector((state) => state.navigations);
  const history = useHistory();
  const dispatch = useDispatch();

  const iconClickHandler = (icon) => {
    dispatch(setIcon(icon));
    history.push(`/${icon}`);
  };

  return (
    <div className="fixed top-0 left-0 w-full border-solid border-2 border-gray-500 bg-white">
      <div className="max-w-custom text-center mx-auto flex justify-between items-center py-2">
        <div className="font-custom text-2xl">JINSTAGRAM</div>
        <div className="hidden sm:block">SEARCHBOX</div>
        <ul className="flex">
          <li>
            <img
              className="h-10 cursor-pointer"
              src={selectedIcon === "" ? clickedHome : home}
              onClick={iconClickHandler.bind(this, "")}
            />
          </li>
          <li>
            <img
              className="h-10 cursor-pointer"
              src={selectedIcon === "direct-message" ? clickedMessage : message}
              onClick={iconClickHandler.bind(this, "direct-message")}
            />
          </li>
          <li>
            <img
              className="h-10 cursor-pointer"
              src={selectedIcon === "explore" ? clickedCompass : compass}
              onClick={iconClickHandler.bind(this, "explore")}
            />
          </li>
          <li>
            <img
              className="h-10 cursor-pointer"
              src={selectedIcon === "activity" ? clickedHeart : heart}
              onClick={iconClickHandler.bind(this, "activity")}
            />
          </li>
          <li>
            <img
              className="h-10 cursor-pointer"
              src={selectedIcon === "add" ? clickedAdd : add}
              onClick={iconClickHandler.bind(this, "add")}
            />
          </li>
          <li>
            <img
              className="h-10 cursor-pointer"
              src={selectedIcon === "individual" ? clickedUser : user}
              onClick={iconClickHandler.bind(this, "individual")}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainHeader;
