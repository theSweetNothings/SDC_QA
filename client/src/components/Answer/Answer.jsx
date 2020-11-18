import React from 'react';
import dateFormat from 'dateformat';
import { v4 as uuidv4 } from 'uuid';
import Helpful from '../Helpful/Helpful.jsx';
import styled from 'styled-components';
import { Thumbnails, Image } from '../AnswerModal/styles.js';

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
  justify-content: space-around;
  width: 40%;
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
      <Thumbnails>
        {props.answer.photos && props.answer.photos.map(photo => <Image src={photo}/>)}
      </Thumbnails>
      <AnswerMetadata>
        <p>by {props.answer.answerer_name}, {transformDate(props.answer.date)}</p>
        <p>|</p>
        <Helpful
          answer={props.answer.id}
          helpful={props.answer.helpfulness}
          updateHelp={props.updateHelp}
        />
        <p>|</p>
        <p><u>Report</u></p>
      </AnswerMetadata>
    </Container>
  );
};

export default Answer;