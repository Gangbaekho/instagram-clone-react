import React from "react";
import MainHeader from "../component/common/MainHeader";

import { fetchPostAPIWithJWT } from "../utils/fetchApis";

import { useHistory } from "react-router-dom";

const AddPage = (props) => {
  const history = useHistory();

  const submitFormHandler = (e) => {
    e.preventDefault();
    const content = e.target.elements.content.value;
    const contentUrl = e.target.elements.contentUrls.value;

    fetchPostAPIWithJWT("/feed/", {
      body: { content: content, contentUrl: contentUrl },
    })
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
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              name="content"
              placeholder="text here"
            ></textarea>
          </div>
          <div>
            <label htmlFor="contentUrls">contentUrls:</label>
            <input
              type="text"
              name="conteotUrls"
              id="contentUrls"
              placeholder="text me"
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddPage;
