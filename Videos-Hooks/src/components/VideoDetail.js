import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  const date = new Date(video.snippet.publishedAt);
  let itemDate = (
    (date.getMonth() + 1) + 
    '-' + 
    date.getDate() + 
    '-' + 
    date.getFullYear()
  );
  document.getElementById("demo").innerHTML = itemDate;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
