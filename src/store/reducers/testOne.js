import { TEST_ACTION } from "../actions/test";

const initialState = {
  data: [],
  description: "testOne",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST_ACTION:
      state.data.push("testOne");
      return {
        ...state,
      };
    default:
      return state;
  }
};
