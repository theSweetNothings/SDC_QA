import React, { useState } from 'react';
import styled from 'styled-components';
import Helpful from '../Helpful/Helpful.jsx';

const Container = styled.section`
  display: flex;
  justify-content: space-between;
`;

const StyledQuestion = styled.article`
  font-weight: bold;
  justify-self: start;
  width: 60%;
`;

const HelpfulAndAddAnswer = styled.article`
  display: flex;
  flex-wrap: nowrap;
  font-size: 12px;
  justify-self: end;
  justify-content: space-around;
  max-width: 250px;
  min-width: 200px;
`;

const StyledText = styled.p`
  :hover {
    cursor: pointer;
  }
`;

const Question = function({ helpful, product, question }) {
  const [ showAnswerModal, setAnswerShowModal ] = useState(false);

  const toggleAnswerForm = function(bool) {
    setAnswerShowModal(bool);
  }
  const handleClick = function(event) {
    toggleAnswerForm(true);
  }

  return (
    <Container>
      <StyledQuestion>
        <p>Q: {question}</p>
      </StyledQuestion>
      <HelpfulAndAddAnswer>
        <Helpful helpful={helpful}/>
        <p>|</p>
        <StyledText onClick={handleClick}><u>Add Answer</u></StyledText>
      </HelpfulAndAddAnswer>
      {showAnswerModal && <AnswerModal question={question} product={product}/>}
    </Container>
  );
};

export default Question;