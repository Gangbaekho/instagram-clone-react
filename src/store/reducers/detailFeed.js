import {
  ADD_DETAIL_FEED,
  ADD_MORE_REPLY,
  ADD_REREPLY,
} from "../actions/detailFeed";
import { ADD_REPLY } from "../actions/feed";

const initialState = {
  detailFeeds: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DETAIL_FEED:
      const leftReplyCount =
        action.feed.replyCount - 10 <= 0 ? 0 : action.feed.replyCount - 10;

      const fetchedReplyCount =
        leftReplyCount > 0 ? 10 : action.feed.replyCount;

      state.detailFeeds.push({
        ...action.feed,
        fetchedReplyCount: fetchedReplyCount,
        replyCount: leftReplyCount,
      });
      return {
        ...state,
      };
    case ADD_MORE_REPLY:
      const detailFeed = state.detailFeeds.find(
        (feed) => feed._id.toString() === action.feedId
      );
      action.replies.forEach((reply) => {
        detailFeed.replyIds.push(reply);
      });
      detailFeed.replyCount -= action.replies.length;
      detailFeed.fetchedReplyCount += action.replies.length;
      return {
        ...state,
      };
    case ADD_REPLY:
      const updatedFeed = state.detailFeeds.find((feed) => {
        return feed._id.toString() === action.reply.feedId;
      });
      if (updatedFeed) {
        updatedFeed.replyIds.push(action.reply);
      }
      return {
        ...state,
      };
    case ADD_REREPLY:
      const updatedFeedOne = state.detailFeeds.find((feed) => {
        return feed._id.toString() === action.reply.feedId;
      });
      if (updatedFeedOne) {
        const updatedReply = updatedFeedOne.replyIds.find(
          (reply) => reply._id.toString() === action.reply.parentReplyId
        );
        updatedReply.rereplyIds.push(action.reply);
      }
      return {
        ...state,
      };
    default:
      return state;
  }
};
