import React from 'react';
import Helpful from '../Helpful/Helpful.jsx';
import styled from 'styled-components';

const StyledArticle = styled.article`
  display: flex;
  justify-content: start;
`;

const Answer = function(props) {
  return (
    <section>
      <StyledArticle>
        <h3><strong>A: </strong></h3>
        <p>{props.answer.answer}</p>
      </StyledArticle>
      <StyledArticle>
        <p>by {props.answer.user}, {props.answer.date}</p>
        |
        <Helpful helpful={props.answer.helpful}/>
        |
        <p><u>Report</u></p>
      </StyledArticle>
    </section>
  );
};

export default Answer;