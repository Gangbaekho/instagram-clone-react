import {
  ADD_REPLY,
  DECREASE_LIKE,
  INCREASE_LIKE,
  SET_FEEDS,
} from "../actions/feed";

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
      const updatedFeedIndex = state.feeds.findIndex((feed) => {
        return feed._id.toString() === action.reply.feedId;
      });
      state.feeds[updatedFeedIndex].replyIds.push(action.reply);
      return {
        ...state,
      };
    case INCREASE_LIKE:
      const updatedFeedIndexOne = state.feeds.findIndex((feed) => {
        return feed._id.toString() === action.feedId;
      });
      state.feeds[updatedFeedIndexOne].isHeartClicked = true;
      state.feeds[updatedFeedIndexOne].likeCount++;
      return {
        ...state,
      };
    case DECREASE_LIKE:
      const updatedFeedIndexTwo = state.feeds.findIndex((feed) => {
        return feed._id.toString() === action.feedId;
      });
      state.feeds[updatedFeedIndexTwo].isHeartClicked = false;
      state.feeds[updatedFeedIndexTwo].likeCount--;
      return {
        ...state,
      };
    default:
      return state;
  }
};
