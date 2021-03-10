import React from "react";
import MainHeader from "../component/common/MainHeader";

import { useSelector } from "react-redux";

const FeedPage = (props) => {
  const navigationState = useSelector((state) => state.navigations);
  console.log(navigationState);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-indigo-500 underline">
        This is feed page
      </h1>
      <MainHeader />
    </div>
  );
};

export default FeedPage;
