import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  let date = new Date(video.snippet.publishedAt);
  console.log(date);
  console.log(video);

    let itemDate = (
    (date.getMonth() + 1) + 
    '-' + 
    date.getDate() + 
    '-' + 
    date.getFullYear()
  );
  

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        {/* <p>{Date(video.snippet.publishedAt)}</p> */}
        <p>Published on: {itemDate}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
