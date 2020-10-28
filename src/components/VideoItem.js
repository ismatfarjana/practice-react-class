import React from "react";
import VideoList from "./VideoList";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="eachvideo">
      <img src={video.snippet.thumbnails.medium.url} />
      <div className="title">{video.snippet.title}</div>
    </div>
  );
};
export default VideoItem;
