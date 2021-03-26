import {
  ADD_DETAIL_FEED,
  ADD_MORE_REPLY,
  ADD_MORE_REREPLY,
  ADD_REREPLY,
  INCREASE_REREPLY_LIKE,
  DECREASE_REREPLY_LIKE,
} from "../actions/detailFeed";

import {
  ADD_REPLY,
  INCREASE_LIKE,
  DECREASE_LIKE,
  INCREASE_REPLY_LIKE,
  DECREASE_REPLY_LIKE,
} from "../actions/feed";

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
    case ADD_MORE_REREPLY:
      const detailFeedTwo = state.detailFeeds.find(
        (feed) => feed._id.toString() === action.feedId
      );
      if (detailFeedTwo) {
        const targetReply = detailFeedTwo.replyIds.find(
          (reply) => reply._id.toString() === action.replyId
        );
        action.replies.forEach((rereply) => {
          targetReply.rereplyIds.push(rereply);
        });
        targetReply.rereplyCount -= action.replies.length;
      }
    case INCREASE_LIKE:
      const updatedFeedIndexOne = state.detailFeeds.findIndex((feed) => {
        return feed._id.toString() === action.feedId;
      });
      if (updatedFeedIndexOne >= 0) {
        state.detailFeeds[updatedFeedIndexOne].isHeartClicked = true;
        state.detailFeeds[updatedFeedIndexOne].likeCount++;
      }
      return {
        ...state,
      };
    case DECREASE_LIKE:
      const updatedFeedIndexTwo = state.detailFeeds.findIndex((feed) => {
        return feed._id.toString() === action.feedId;
      });
      if (updatedFeedIndexTwo >= 0) {
        state.detailFeeds[updatedFeedIndexTwo].isHeartClicked = false;
        state.detailFeeds[updatedFeedIndexTwo].likeCount--;
      }
      return {
        ...state,
      };
    case INCREASE_REPLY_LIKE:
      const updatedFeedIndexThree = state.detailFeeds.findIndex((feed) => {
        return feed._id.toString() === action.feedId;
      });
      if (updatedFeedIndexThree >= 0) {
        const updatedReplyIndex = state.detailFeeds[
          updatedFeedIndexThree
        ].replyIds.findIndex((reply) => {
          return reply._id.toString() === action.replyId;
        });

        state.detailFeeds[updatedFeedIndexThree].replyIds[
          updatedReplyIndex
        ].likeUserIds.push(action.userId);
      }

      return {
        ...state,
      };
    case DECREASE_REPLY_LIKE:
      const updatedFeedIndexFour = state.detailFeeds.findIndex((feed) => {
        return feed._id.toString() === action.feedId;
      });
      if (updatedFeedIndexFour >= 0) {
        const updatedReplyIndexOne = state.detailFeeds[
          updatedFeedIndexFour
        ].replyIds.findIndex((reply) => {
          return reply._id.toString() === action.replyId;
        });
        const filteredLikeUserIds = state.detailFeeds[
          updatedFeedIndexFour
        ].replyIds[updatedReplyIndexOne].likeUserIds.filter((userId) => {
          return userId.toString() !== action.userId;
        });

        state.detailFeeds[updatedFeedIndexFour].replyIds[
          updatedReplyIndexOne
        ].likeUserIds = filteredLikeUserIds;
      }
      return {
        ...state,
      };
    case INCREASE_REREPLY_LIKE:
      const updatedFeedCustom = state.detailFeeds.find((feed) => {
        return feed._id.toString() === action.feedId;
      });
      if (updatedFeedCustom) {
        const updatedReplyCustom = updatedFeedCustom.replyIds.find((reply) => {
          return reply._id.toString() === action.replyId;
        });
        if (updatedReplyCustom) {
          const updatedRereplyCustom = updatedReplyCustom.rereplyIds.find(
            (rereply) => rereply._id.toString() === action.rereplyId
          );
          if (updatedRereplyCustom) {
            updatedRereplyCustom.likeUserIds.push(action.userId);
          }
        }
      }
      return {
        ...state,
      };
    case DECREASE_REREPLY_LIKE:

    default:
      return state;
  }
};
