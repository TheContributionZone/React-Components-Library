# Videos - with Hooks and Function Components

This takes the other VIDEOS component and refactors it to work with FUNCTION COMPONENTS. 

<img src="./src/images/demo.png" width="70%" />

## SearchBar.js
### Imports
```
import React, { useState, useEffect } from "react";
```
REFACTORED:
```
import React, { useState } from 'react';
```
<hr><hr><hr>

### Components
```
class SearchBar extends React.Component {
  state = { term: '' };
```

REFACTORED:
```
const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');
```
<hr><hr><hr>

### Event Handlers

```
onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };
```
 
REFACTORED:
```
  const onSubmit = (event) => { 
    event.preventDefault();

    onFormSubmit(term);
  };
```
<hr><hr><hr>

### JSX Block
```
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
```
REFACTORED:
```
  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            // onChange={onInputChange} OR:
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
```
<hr><hr><hr>

<hr><hr><hr>

## App.js

### Components:
```
const App = () => {
```
REFACTORED:
```
class App extends React.Component {
```
<hr><hr><hr>

### State: 

```
  state = { videos: [], selectedVideo: null };
```
REFACTORED:
```
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
```
<hr><hr><hr>

### Lifecycle Methods > Hooks

```
  componentDidMount() {
    this.onTermSubmit("buildings");
  }
```
REFACTORED:
```
  useEffect(()=> {
    onTermSubmit("buildings");
  }, []);
```
<hr><hr><hr>

### Removing 'this'
```
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
```
REFACTORED:
```  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);

  };
```
<hr><hr><hr>

### Removing 'this'
```
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
```


REFACTORED:
```
  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };
```
<hr><hr><hr>

### JSX Block
```
render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default App;
```


REFACTORED:
```
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={onVideoSelect}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

```
<hr><hr><hr>