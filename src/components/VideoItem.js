import React from "react";
import VideoList from "./VideoList";

const VideoItem = ({ video }) => {
  return (
    <div>
      <div>{video.snippet.title}</div>
      <img src={video.snippet.thumbnails.medium.url} />
    </div>
  );
};
export default VideoItem;
