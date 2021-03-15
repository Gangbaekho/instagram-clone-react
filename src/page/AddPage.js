import React from "react";
import MainHeader from "../component/common/MainHeader";

import {
  fetchPostAPIWithJWT,
  fetchPostFormDataWithJWT,
} from "../utils/fetchApis";

import { useHistory } from "react-router-dom";

const AddPage = (props) => {
  const history = useHistory();

  const submitFormHandler = (e) => {
    e.preventDefault();
    const content = e.target.elements.content.value;
    const image = e.target.elements.image.files[0];

    const formData = new FormData();
    formData.append("content", content);
    formData.append("image", image);
    fetchPostFormDataWithJWT("/feed/", { body: formData })
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
    <div>
      <MainHeader />
      <div className="border-red-400 border-2 border-solid mt-20 ">
        <form onSubmit={submitFormHandler}>
          <div>
            <label htmlFor="content">CONTENT:</label>
            <textarea
              id="content"
              name="content"
              placeholder="text here"
            ></textarea>
          </div>
          <div>
            <label htmlFor="image">IMAGE FILES:</label>
            <input type="file" name="image" id="image" />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddPage;
