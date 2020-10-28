import React from "react";
import VideoList from "./VideoList";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="eachvideo">
      <div className="title">{video.snippet.title}</div>
      <img src={video.snippet.thumbnails.medium.url} />
    </div>
  );
};
export default VideoItem;
