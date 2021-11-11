import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import './VideoItem.css';



const App = () => {

  // 👉  Fetching videos based around this piece of STATE
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  // 👉  Putting together this useEffect function to search for videos
  useEffect(()=> {
    onTermSubmit("buildings");
  }, []);
  // 👉  onTermSubmit Making the request and updating our videos piece of STATE
  const onTermSubmit = async (term) => {
    console.log('Hey 18');
    console.log(term);
      
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
      
    });
 
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
 
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
            <div id="demo" className="itemDate"></div>
          </div>
          <div className="five wide column">
            <VideoList
              // onVideoSelect={(video) => setSelectedVideo(video)}
              onVideoSelect={setSelectedVideo}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


