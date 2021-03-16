import React, { useState, useRef, useEffect } from "react";

const TestPage = (props) => {
  const buttonGetHandler = () => {
    fetch("http://localhost:8080/feed/")
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
      <button onClick={buttonGetHandler}>GET FEEDS</button>
    </div>
  );
};

export default TestPage;
