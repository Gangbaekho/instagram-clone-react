import React from "react";

const DirectMessageForm = (props) => {
  return (
    <form
      className="flex justify-center items-center border-check"
      style={{ height: "94px" }}
    >
      <div className="border-check c-flex-1">Imogi</div>
      <div className="border-check c-flex-7">
        <input type="text" placeholder="text" className="w-full" />
      </div>
      <div className="border-check c-flex-2">other icons</div>
    </form>
  );
};

export default DirectMessageForm;
