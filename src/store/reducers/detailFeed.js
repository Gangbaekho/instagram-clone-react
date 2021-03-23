import { ADD_DETAIL_FEED } from "../actions/detailFeed";

const initialState = {
  detailFeeds: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DETAIL_FEED:
      state.detailFeeds.push(action.feed);
      return {
        ...state,
      };
  }
  return state;
};
