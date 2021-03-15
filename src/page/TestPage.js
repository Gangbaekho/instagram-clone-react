import React, { useState, useRef, useEffect } from "react";

const TestPage = (props) => {
  const fileInputHandler = (e) => {
    console.log(e.target.files);
  };

  return (
    <div className="border-2 border-black border-solid">
      <form>
        <div>
          <label htmlFor="test">TEST:</label>
          <input type="text" placeholder="test" id="test" />
        </div>
        <div>
          <label htmlFor="myFile">FILE:</label>
          <input
            type="file"
            id="myFile"
            onChange={fileInputHandler}
            multiple
            name="filefield"
          />
        </div>
      </form>
    </div>
  );
};

export default TestPage;
