import React from "react";

import { fetchPostAPIWithJWT } from "../utils/fetchApis";

const TestPageTwo = (props) => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const content = e.target.elements.reply.value;

    const bodyData = { content: content };

    fetchPostAPIWithJWT("/reply/", { body: bodyData })
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
          <label htmlFor="reply">REPLY:</label>
          <input type="text" placeholder="REPLY TEXT" id="reply" name="reply" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default TestPageTwo;
