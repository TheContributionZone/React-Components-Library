import  React, { useState, useEffect }from 'react';

const Search = () => {
    const [term, setTerm] = useState('');
        console.log('EVERY');

    useEffect(
        () => {
            console.log('AFTER EVERY AND INITIAL');
        },
        // NOTE second argument to get useEffect to also render (and call arrow function) when data is changed (term)
        // NOTE for first two useEffect scenarios, [ ] = run @ render, nothing = run first render and every re-render 
        [term]
    );

    // NOTE issue request for every time search term is altered
     

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input" 
                    />
                </div>
            </div>
        </div>
    )
};

export default Search;