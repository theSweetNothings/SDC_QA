import React from 'react';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import styled from 'styled-components';

const StyledContainer = styled.section`
  font-family: Arial, Helvetica, sans-serif;
`;

const App = function() {
  return (
    <StyledContainer>
      <SearchBar/>
    </StyledContainer>
  );
};

export default App;