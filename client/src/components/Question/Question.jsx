import React from 'react';
import styled from 'styled-components';
import Helpful from '../Helpful/Helpful.jsx';

const Container = styled.section`
  display: flex;
`;

const StyledQuestion = styled.article`
  font-weight: bold
  justify-self: start;
`;

const HelpfulAndAddAnswer = styled.article`
  justify-self: end;
`;

const Question = function(props) {
  return (
    <Container>
      <StyledQuestion>
        <h3>Q: {props.question}?</h3>
      </StyledQuestion>
      <HelpfulAndAddAnswer>
        <Helpful helpful={props.helpful}/>
        |
        <p>Add Answer</p>
      </HelpfulAndAddAnswer>
    </Container>
  );
};

export default Question;