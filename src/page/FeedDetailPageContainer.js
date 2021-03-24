import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addDetailFeed } from "../store/actions/detailFeed";
import FeedDetailPage from "./FeedDetailPage";

const FeedDetailPageContainer = (props) => {
  const dispatch = useDispatch();
  const { params } = props.match;
  const detailFeeds = useSelector((state) => state.detailFeeds.detailFeeds);
  const detailFeed = detailFeeds.find((feed) => feed._id === params.feedId);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    if (!detailFeed) {
      await dispatch(addDetailFeed(params.feedId));
    }
    setIsLoading(false);
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <FeedDetailPage detailFeed={detailFeed} feedId={params.feedId} />
    </>
  );
};

export default FeedDetailPageContainer;
