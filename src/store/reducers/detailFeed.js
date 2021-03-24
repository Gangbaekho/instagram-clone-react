import { ADD_DETAIL_FEED } from "../actions/detailFeed";

const initialState = {
  detailFeeds: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DETAIL_FEED:
      const fixedReplyCount =
        action.feed.replyCount - 10 <= 0 ? 0 : action.feed.replyCount - 10;
      state.detailFeeds.push({
        ...action.feed,
        fetchedReplyCount: 0,
        replyCount: fixedReplyCount,
      });
      return {
        ...state,
      };
  }
  return state;
};
