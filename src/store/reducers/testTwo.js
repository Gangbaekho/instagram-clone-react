import { TEST_ACTION } from "../actions/test";

const initialState = {
  data: [],
  description: "testTwo",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST_ACTION:
      state.data.push("testTwo");
      return {
        ...state,
      };
    default:
      return state;
  }
};
