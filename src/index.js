import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import RootRouter from "./router/RootRouter";

// REDUX
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

// REDUCERS
import navigationReducer from "./store/reducers/navigation";
import feedReducer from "./store/reducers/feed";
import detailReducer from "./store/reducers/detailFeed";
import testOneReducer from "./store/reducers/testOne";
import testTwoReducer from "./store/reducers/testTwo";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  navigations: navigationReducer,
  feeds: feedReducer,
  detailFeeds: detailReducer,
  testOne: testOneReducer,
  testTwo: testTwoReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RootRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
