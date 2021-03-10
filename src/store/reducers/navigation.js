import { SET_ICON } from "../actions/navigation";

const initialState = {
  selectedIcon: "home",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ICON:
      return {
        selectedIcon: action.icon,
      };
  }

  return state;
};
