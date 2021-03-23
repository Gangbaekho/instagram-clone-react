import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";

import FeedDetailReply from "../component/feed/FeedDetailReply";

import { Element } from "react-scroll";

import SERVER_ADDRESS from "../constant/serverAddress";

import default_user from "../image/default_user.s.png";
import default_heart from "../image/default_heart.s.png";
import default_detail from "../image/default_detail.s.png";
import default_share from "../image/default_share.s.png";

import {} from "../utils/fetchApis";

const FeedDetailPage = (props) => {
  const { params } = props.match;

  const [isLoading, setIsLoading] = useState(true);
  const [feedDetail, setFeedDetail] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8080/feed/${params.feedId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFeedDetail(data.feed);
        setIsLoading(false);
        console.log(data.feed);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="flex flex-col justify-center w-screen h-screen border-2 border-solid border-black bg-black relative">
      <div className="absolute top-10 right-10 bg-white">XICON</div>
      <div className="flex justify-center mr-10 ml-10 border-black border-2 border-solid bg-white lg:h-detailFeed lg:bg-black">
        <div className="hidden border-black border-2 border-solid lg:block lg:h-detailFeed lg:bg-white">
          <img
            src={`${SERVER_ADDRESS}/${feedDetail.contentUrls[0]}`}
            // src={default_user}
            className="h-full"
          />
        </div>
        <div className="border-black border-2 border-solid w-60 lg:h-detailFeed lg:w-80 lg:bg-white">
          <article className="flex justify-center border-black border-2 border-solid lg:h-1/12 ">
            <div className="border-black border-2 border-solid w-10">
              <img
                src={`${SERVER_ADDRESS}/${feedDetail.userProfileImageUrl}`}
                // src={default_user}
              />
            </div>
            <div className="border-black border-2 border-solid">
              {feedDetail.userNickName}
            </div>
            <div className="border-black border-2 border-solid ">팔로잉</div>
            <div className="border-black border-2 border-solid">...</div>
          </article>
          <article className="border-black border-2 border-solid lg:hidden">
            <img
              src={`${SERVER_ADDRESS}/${feedDetail.contentUrls[0]}`}
              //   src={default_user}
              className="w-full"
            />
          </article>
          <Element
            className="hidden border-black border-2 border-solid lg:block lg:h-8/12 scroll-hide"
            id="scroll-container"
            style={{
              position: "relative",
              overflow: "auto",
              // overflowY: "scroll",
            }}
          >
            <Element
              name="scroll-container-first-element"
              style={{
                marginBottom: "200px",
              }}
            >
              {feedDetail.content}
            </Element>

            <Element
              name="scroll-container-second-element"
              style={{
                marginBottom: "200px",
              }}
            >
              {feedDetail.replyIds.map((reply) => (
                <FeedDetailReply key={reply._id} {...reply} />
              ))}
            </Element>
          </Element>
          <article className="border-black border-2 border-solid lg:h-3/12">
            <div className="flex justify-between border-black border-2 border-solid">
              <div className="border-black border-2 border-solid">
                <img src={default_heart} className="w-10 inline-block" />
                <img src={default_detail} className="w-10 inline-block" />
              </div>
              <div className="border-black border-2 border-solid">
                <img src={default_share} className="w-10 inline-block" />
              </div>
            </div>
            <div>좋아요 {feedDetail.likeCount}개</div>
            <div>{moment(props.createdAt).fromNow()}</div>
            <form className="hidden lg:grid lg:grid-cols-6 lg:px-5">
              <div className="place-self-start">imogi</div>
              <input
                type="text"
                placeholder="text me!"
                name="content"
                className="w-full col-span-4 place-self-center"
              />
              <div className="place-self-end">
                <button>게시</button>
              </div>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FeedDetailPage;
