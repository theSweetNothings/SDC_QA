import React from 'react';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import QuestionList from './components/QuestionList/QuestionList.jsx';
import styled from 'styled-components';

const StyledContainer = styled.section`
  font-family: Arial, Helvetica, sans-serif;
`;

const questions = [
  {
    question: 'Who is the main playable character in the Shadows of the Empire game',
    answers: [
      {
        answer: 'Dash Rendar',
        user: 'User5678',
        date: 'January 1, 2011',
        helpful: 85,
        id: 1
      },
      {
        answer: 'Han Solo',
        user: 'User234',
        date: 'February 2, 2012',
        helpful: 34,
        id: 2
      },
      {
        answer: 'Chewbacca',
        user: 'User8675309',
        date: 'March 3, 2012',
        helpful: 23,
        id: 3
      }
    ]
  },
  {
    question: 'What is the name of Dash Rendar\'s ship',
    answers: [
      {
        answer: 'Ebon Hawk',
        user: 'User5678',
        date: 'January 2, 2011',
        helpful: 24,
        id: 1
      },
      {
        answer: 'Outrider',
        user: 'User234',
        date: 'February 3, 2012',
        helpful: 86,
        id: 2
      },
      {
        answer: 'Falcon',
        user: 'User8675309',
        date: 'March 4, 2012',
        helpful: 33,
        id: 3
      }
    ]
  },
];

const App = function() {
  return (
    <StyledContainer>
      <SearchBar/>
      <QuestionList questions={questions}/>
    </StyledContainer>
  );
};

export default App;