import React from "react";

const ModalConatiner = (props) => {
  return (
    <div
      className={`${
        props.isOpen ? "" : "hidden"
      } fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-50 z-30`}
    >
      {props.children}
    </div>
  );
};

export default ModalConatiner;
