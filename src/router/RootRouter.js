import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// PAGES
import ActivityPage from "../page/ActivityPage";
import AuthPage from "../page/AuthPage";
import DirectMessagePage from "../page/DirectMessagePage";
import ExplorePage from "../page/ExplorePage";
import FeedPage from "../page/FeedPage";
import IndividualPage from "../page/IndividualPage";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={FeedPage} exact />
          <Route path="/auth" component={AuthPage} exact />
          <Route path="/direct-message" component={DirectMessagePage} exact />
          <Route path="/explore" component={ExplorePage} exact />
          <Route path="/individual" component={IndividualPage} exact />
          <Route path="/activity" component={ActivityPage} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default RootRouter;
