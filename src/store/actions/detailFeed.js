import SERVER_ADDRESS from "../../constant/serverAddress";

export const ADD_DETAIL_FEED = "SET_DETAIL_FEED";

export const addDetailFeed = (feedId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${SERVER_ADDRESS}/feed/${feedId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await response.json();

      dispatch({ type: ADD_DETAIL_FEED, feed: resData.feed });
    } catch (err) {
      throw err;
    }
  };
};
