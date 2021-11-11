// J REDUCER ( Department )
import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want it That Way', duration: '1:45' },
    { title: 'That Way', duration: '1:40' },
    { title: 'How It All Ends', duration: '12:34' },
    { title: 'No Way', duration: '4:32' }
  ];
};
// SECOND REDUCER: 1st arg: selected song, 2nd arg: action object
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
