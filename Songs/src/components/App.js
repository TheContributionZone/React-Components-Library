import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import './App.css';

const App = () => {
  return (
    <div>
      <div className="ui container grid songHeader">

        <div className="ui fixed top sticky songHeader">
          <div className="ui row">
            <div className="column eight wide songHeader">
              REDUX Song Selector
              
            </div>
          </div>
        </div>


        <div className="ui mainBody row">
          <div className="column eight wide">
            <SongList />
          </div>
          <div className="column eight wide">
            <SongDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
