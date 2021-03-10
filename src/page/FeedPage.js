import React from "react";
import MainHeader from "../component/common/MainHeader";

import { useSelector } from "react-redux";

const FeedPage = (props) => {
  const navigationState = useSelector((state) => state.navigations);
  console.log(navigationState);

  return (
    <div>
      <MainHeader />
    </div>
  );
};

export default FeedPage;
