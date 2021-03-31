import React, { useRef } from "react";

const Modal = (props) => {
  return (
    <div
      className={`${
        props.isOpen ? "" : "hidden"
      } fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-50 z-20`}
      onClick={() => {
        console.log("parent clicked");
        props.openModalHandler(false);
      }}
    >
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
