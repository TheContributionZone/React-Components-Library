import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  // const onInputChange = (event) => {
  //   setTerm(event.target.value);// this.setState({term: event.target.value});
  // }; REMOVE COMMENTS TO SYNC WITH LINE 24

  const onSubmit = (event) => { // event handler
    event.preventDefault();

    onFormSubmit(term);
  };

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
