import { SET_FEEDS } from "../actions/feed";

const initialState = {
  feeds: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FEEDS:
      return {
        feeds: action.feeds,
      };
    default:
      return state;
  }
};
