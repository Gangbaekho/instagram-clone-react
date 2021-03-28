import {
  ADD_REPLY,
  DECREASE_LIKE,
  DECREASE_REPLY_LIKE,
  INCREASE_LIKE,
  INCREASE_REPLY_LIKE,
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
      console.log("INCREASE LIKE IN FEED REDUCER");
      console.log("What the");
      const updatedFeedIndexOne = state.feeds.findIndex((feed) => {
        return feed._id.toString() === action.feedId;
      });
      console.log(updatedFeedIndexOne);
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
    case INCREASE_REPLY_LIKE:
      const updatedFeedIndexThree = state.feeds.findIndex((feed) => {
        return feed._id.toString() === action.feedId;
      });
      const updatedReplyIndex = state.feeds[
        updatedFeedIndexThree
      ].replyIds.findIndex((reply) => {
        return reply._id.toString() === action.replyId;
      });
      if (updatedReplyIndex >= 0) {
        state.feeds[updatedFeedIndexThree].replyIds[
          updatedReplyIndex
        ].likeUserIds.push(action.userId);
      }

      return {
        ...state,
      };
    case DECREASE_REPLY_LIKE:
      const updatedFeedIndexFour = state.feeds.findIndex((feed) => {
        return feed._id.toString() === action.feedId;
      });
      const updatedReplyIndexOne = state.feeds[
        updatedFeedIndexFour
      ].replyIds.findIndex((reply) => {
        return reply._id.toString() === action.replyId;
      });
      if (updatedReplyIndexOne >= 0) {
        const filteredLikeUserIds = state.feeds[updatedFeedIndexFour].replyIds[
          updatedReplyIndexOne
        ].likeUserIds.filter((userId) => {
          return userId.toString() !== action.userId;
        });

        state.feeds[updatedFeedIndexFour].replyIds[
          updatedReplyIndexOne
        ].likeUserIds = filteredLikeUserIds;
      }
      return {
        ...state,
      };

    default:
      return state;
  }
};
