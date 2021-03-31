import React, { useRef } from "react";

const Modal = (props) => {
  const modalRef = useRef();

  return (
    <div
      className={`${
        props.isOpen ? "" : "hidden"
      } fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-50 z-30`}
      ref={modalRef}
      onClick={() => {
        props.openModalHandler(false);
      }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
