import SERVER_ADDRESS from "../../constant/serverAddress";

export const FETCH_USERS = "FETCH_USERS";

export const fetchUsers = (nickName) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${SERVER_ADDRESS}/user/${nickName}`);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      dispatch({
        type: FETCH_USERS,
        users: data.users,
      });
    } catch (error) {
      throw error;
    }
  };
};
