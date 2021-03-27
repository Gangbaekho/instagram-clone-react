import { FETCH_USERS } from "../actions/user";

const initialState = {
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      state.users = action.users;
      return {
        ...state,
      };
    default:
      return state;
  }
};
