import React from 'react';
import styled from 'styled-components';
import Helpful from '../Helpful/Helpful.jsx';

const Container = style.section`
  display: flex;
`;

const Question = style.article`
  font-weight: bold
  justify-self: start;
`;

const HelpfulAndAddAnswer = style.article`
  justify-self: end;
`;

const Question = function(props) {
  return (
    <Container>
      <Question>
        <h3>{props.question}</h3>
      </Question>
      <HelpfulAndAddAnswer>
        <Helpful/>
        |
        <p>Add Answer</p>
      </HelpfulAndAddAnswer>
    </Container>
  );
};

export default Question;