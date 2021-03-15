import React, { useState, useRef, useEffect } from "react";

import { fetchPostFormDataWithJWT } from "../utils/fetchApis";

const TestPage = (props) => {
  const formSubmitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("test", e.target.elements.test.value);
    formData.append("image", e.target.elements.image.files[0]);
    fetchPostFormDataWithJWT("/feed/test", { body: formData })
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

  return (
    <div className="border-2 border-black border-solid">
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="test">TEST:</label>
          <input type="text" placeholder="test" id=" test" name="test" />
        </div>
        <div>
          <label htmlFor="image">IMAGE:</label>
          <input type="file" id="image" name="image" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default TestPage;
