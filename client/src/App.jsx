import React from 'react';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import QuestionList from './components/QuestionList/QuestionList.jsx';
import styled from 'styled-components';

const StyledContainer = styled.section`
  font-family: Arial, Helvetica, sans-serif;
`;

const App = function() {
  return (
    <StyledContainer>
      <SearchBar/>
      <QuestionList/>
    </StyledContainer>
  );
};

export default App;