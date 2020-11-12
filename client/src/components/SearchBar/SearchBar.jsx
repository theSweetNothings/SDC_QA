import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = function() {
  const [ searched, setSearched ] = useState('');

  useEffect(() => {
    if (searched.length >= 3) {
      axios.get('http://52.26.193.201:3000/qa/5')
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }
  }, [searched]);

  const handleChange = function(event) {
    const { value } = event.target;
    setSearched(value);
  };

  return (
    <div className='question-searchbar'>
      <form>
      <label>QUESTIONS & ANSWERS</label>
      <input
        placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
        aria-label='searchbar'
        value={searched}
        onChange={handleChange}
      />
    </form>
    </div>
  );
};

export default SearchBar;