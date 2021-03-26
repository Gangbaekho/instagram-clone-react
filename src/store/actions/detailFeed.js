import SERVER_ADDRESS from "../../constant/serverAddress";

import moment from "moment";

import { fetchPostAPIWithJWT } from "../../utils/fetchApis";

export const ADD_DETAIL_FEED = "SET_DETAIL_FEED";
export const ADD_MORE_REPLY = "ADD_MORE_REPLY";
export const ADD_REREPLY = "ADD_REREPLY";
export const ADD_MORE_REREPLY = "ADD_MORE_REREPLY";
export const INCREASE_REREPLY_LIKE = "INCREASE_REREPLY_LIKE";
export const DECREASE_REREPLY_LIKE = "DECREASE_REREPLY_LIKE";

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

export const addRereply = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${SERVER_ADDRESS}/reply/rereply`, {
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
        parentReplyId: data.replyId,
        feedId: data.feedId,
        createdAt: new Date(),
        updatedAt: new Date(),
        likeCount: 0,
        rereplyIds: [],
        rereplyCount: 0,
        likeUserIds: [],
        updatedAt: new Date(),
        userId: localStorage.getItem("userId"),
        userNickName: localStorage.getItem("userNickName"),
        userProfileImageUrl: localStorage.getItem("userProfileImageUrl"),
        _id: moment.now(),
      };

      dispatch({ type: ADD_REREPLY, reply: reply });
    } catch (err) {
      throw err;
    }
  };
};

export const addMoreRereply = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${SERVER_ADDRESS}/reply/${data.replyId}/rereply`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ skip: data.skip }),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await response.json();

      dispatch({
        type: ADD_MORE_REREPLY,
        feedId: data.feedId,
        replyId: data.replyId,
        replies: resData.replies,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const increaseRereplyLike = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetchPostAPIWithJWT("/reply/like/increase", {
        body: { replyId: data.rereplyId, feedId: data.feedId },
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      dispatch({
        type: INCREASE_REREPLY_LIKE,
        userId: localStorage.getItem("userId"),
        feedId: data.feedId,
        replyId: data.replyId,
        rereplyId: data.rereplyId,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const decreaseRereplyLike = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetchPostAPIWithJWT("/reply/like/decrease", {
        body: data,
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      dispatch({
        type: DECREASE_REREPLY_LIKE,
        userId: localStorage.getItem("userId"),
        feedId: data.feedId,
        replyId: data.replyId,
        rereplyId: data.rereplyId,
      });
    } catch (err) {
      throw err;
    }
  };
};
