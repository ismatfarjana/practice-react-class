import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div> Loading!! </div>;
  }

  const videoSrc = `http://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="detalis">
      <iframe className="detalis-img" src={videoSrc} />
      <h2 className="detalistitle">{video.snippet.title}</h2>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetails;
