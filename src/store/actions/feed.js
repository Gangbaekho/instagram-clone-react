import SERVER_ADDRESS from "../../constant/serverAddress";

import { fetchPostAPIWithJWT } from "../../utils/fetchApis";

export const SET_FEEDS = "SET_FEEDS";
export const ADD_REPLY = "ADD_REPLY";
export const INCREASE_LIKE = "INCREASE_LIKE";
export const DECREASE_LIKE = "DECREASE_LIKE";

export const fetchFeeds = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${SERVER_ADDRESS}/feed/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

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

export const addReply = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${SERVER_ADDRESS}/reply/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const reply = {
        content: data.content,
        feedId: data.feedId,
        createdAt: new Date(),
        likeCount: 0,
        rereplyIds: [],
        updatedAt: new Date(),
        userId: localStorage.getItem("userId"),
        userNickName: localStorage.getItem("userNickName"),
        userProfileImageUrl: localStorage.getItem("userProfileImageUrl"),
        _id: Date.now(),
      };

      dispatch({ type: ADD_REPLY, reply: reply });
    } catch (err) {
      throw err;
    }
  };
};

export const increaseLike = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetchPostAPIWithJWT("/feed/like/increase", {
        body: data,
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      dispatch({
        type: INCREASE_LIKE,
        userId: localStorage.getItem("userId"),
        feedId: data.feedId,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const decreaseLike = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetchPostAPIWithJWT("/feed/like/decrease", {
        body: data,
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      dispatch({
        type: DECREASE_LIKE,
        userId: localStorage.getItem("userId"),
        feedId: data.feedId,
      });
    } catch (err) {
      throw err;
    }
  };
};
