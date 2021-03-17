import { ADD_REPLY, SET_FEEDS } from "../actions/feed";

const initialState = {
  feeds: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FEEDS:
      return {
        feeds: action.feeds,
      };
    case ADD_REPLY:
      console.log("state.feeds", state.feeds);
      console.log("action.feedId", action.reply);
      const updatedFeedIndex = state.feeds.findIndex((feed) => {
        return feed._id.toString() === action.reply.feedId;
      });
      console.log("updatedFeedIndex", updatedFeedIndex);
      state.feeds[updatedFeedIndex].replyIds.push(action.reply);
      return {
        ...state,
      };
    default:
      return state;
  }
};
