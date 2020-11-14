import React from 'react';
import Helpful from '../Helpful/Helpful.jsx';
import styled from 'styled-components';

const Container = styled.section`
  font-size: 12px;
  justify-content: space-around;
`;

const StyledAnswer = styled.article`
  display: flex;
  justify-content: start;
`;

const AnswerMetadata = styled.article`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 50%;
`;

const Answer = function(props) {
  return (
    <Container>
      <StyledAnswer>
        <p><strong style={{ fontSize: '16px'}}>A: </strong> {props.answer.answer}</p>
      </StyledAnswer>
      <AnswerMetadata>
        <p>by {props.answer.user}, {props.answer.date}</p>
        |
        <Helpful helpful={props.answer.helpful}/>
        |
        <p><u>Report</u></p>
      </AnswerMetadata>
    </Container>
  );
};

export default Answer;