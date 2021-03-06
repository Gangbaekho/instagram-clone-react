import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// PAGES
import ActivityPage from "../page/ActivityPage";
import DirectMessagePage from "../page/DirectMessagePage";
import ExplorePage from "../page/ExplorePage";
import FeedPage from "../page/FeedPage";
import IndividualPage from "../page/IndividualPage";
import SigninPage from "../page/SigninPage";
import SignupPage from "../page/SignupPage";
import AddPage from "../page/AddPage";
import NotExistPage from "../page/NotExistPage";
import TestPage from "../page/TestPage";
import TestPageTwo from "../page/TestPageTwo";
import TestPageThree from "../page/TestPageThree";
import FeedDetailPage from "../page/FeedDetailPage";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={FeedPage} exact />
          <Route path="/direct-message" component={DirectMessagePage} exact />
          <Route path="/explore" component={ExplorePage} exact />
          <Route path="/individual" component={IndividualPage} exact />
          <Route path="/activity" component={ActivityPage} exact />
          <Route path="/signin" component={SigninPage} exact />
          <Route path="/signup" component={SignupPage} exact />
          <Route path="/add" component={AddPage} exact />
          <Route path="/test" component={TestPage} exact />
          <Route path="/test2" component={TestPageTwo} exact />
          <Route path="/test3" component={TestPageThree} exact />
          <Route path="/feed/:feedId" component={FeedDetailPage} exact />

          <Route component={NotExistPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default RootRouter;
