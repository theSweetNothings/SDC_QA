import React from 'react';
import dateFormat from 'dateformat';
import Helpful from '../Helpful/Helpful.jsx';
import styled from 'styled-components';

const Container = styled.section`
  font-size: 12px;
  justify-content: space-around;
`;

const StyledAnswer = styled.article`
  display: flex;
  flex-wrap: nowrap;
  justify-content: start;
`;

const AnswerMetadata = styled.article`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 300px;
`;

const Answer = function(props) {
  // Helper Function for formatting date
  const transformDate = function(date) {
    let updated = new Date(props.answer.date);
    return dateFormat( updated, 'mmmm d, yyyy');
    /*updated = updated.toString().split(' ').slice(1, 4);
    updated[1] = updated[1].concat(',');
    return updated.join(' ');*/
  }

  return (
    <Container>
      <StyledAnswer>
        <p><strong style={{ fontSize: '16px'}}>A: </strong> {props.answer.body}</p>
      </StyledAnswer>
      <AnswerMetadata>
        <p>by {props.answer.answerer_name}, {transformDate(props.answer.date)}</p>
        |
        <Helpful helpful={props.answer.helpfulness}/>
        |
        <p><u>Report</u></p>
      </AnswerMetadata>
    </Container>
  );
};

export default Answer;