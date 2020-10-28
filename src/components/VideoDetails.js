import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div> Loading!! </div>;
  }

  return (
    <div className="detalis">
      <h2 className="detalistitle">{video.snippet.title}</h2>

      <img className="detalis-img" src={video.snippet.thumbnails.medium.url} />
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetails;
