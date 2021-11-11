import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    // this.props === { songs: state.songs }
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// function that takes state object, run calculation to turn data in props
const mapStateToProps = state => {
  console.log(state);
  // returns object that gets passed into Component as props
  return { songs: state.songs };
};

// connect function, react component
export default connect(
  mapStateToProps,
  // passing selectedSong (ACTION CREATOR) in as a 2nd arg to allow connect function to pass it into our component as a prop
  // takes the action that is returned and sends it into the dispatch function
  { selectSong }
)(SongList);
