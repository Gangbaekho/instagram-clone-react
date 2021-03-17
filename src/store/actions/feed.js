import SERVER_ADDRESS from "../../constant/serverAddress";

export const SET_FEEDS = "SET_FEEDS";

export const fetchFeeds = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${SERVER_ADDRESS}/feed/`);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await response.json();
      console.log(resData);

      dispatch({ type: SET_FEEDS, feeds: resData.feeds });
    } catch (err) {
      throw err;
    }
  };
};
