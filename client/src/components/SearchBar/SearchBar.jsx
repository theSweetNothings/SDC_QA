import React, { useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: space-around;
  width: 80%;
`;

const StyledInput = styled.input`
  height: 50px;
  font-weight: bold;
  padding-left: 10px;
`;

const SearchBar = function() {
  // State
  const [ searched, setSearched ] = useState('');

  // Event handler for updating searched
  const handleChange = function(event) {
    const { value } = event.target;
    setSearched(value);
  };

  return (
    <StyledContainer>
      <StyledForm>
        <label>QUESTIONS & ANSWERS</label>
        <StyledInput
          placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
          value={searched}
          onChange={handleChange}
        />
      </StyledForm>
    </StyledContainer>
  );
};

export default SearchBar;