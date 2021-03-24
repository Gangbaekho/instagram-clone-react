import SERVER_ADDRESS from "../../constant/serverAddress";

export const ADD_DETAIL_FEED = "SET_DETAIL_FEED";
export const ADD_MORE_REPLY = "ADD_MORE_REPLY";

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

export const addMoreReply = (feedId, skip) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${SERVER_ADDRESS}/reply/more`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ feedId: feedId, skip: skip }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await response.json();

      dispatch({
        type: ADD_MORE_REPLY,
        feedId: feedId,
        replies: resData.replies,
      });
    } catch (err) {
      throw err;
    }
  };
};
