import React from 'react';
import styled from 'styled-components';
import AnswerList from '../AnswerList/AnswerList.jsx';
import Answer from '../Answer/Answer.jsx';
import Question from '../Question/Question.jsx';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const QuestionList = function(props) {
  return (
    <StyledSection>
      {props.questions.map(question => (
        <StyledSection>
          <Question question={question.question}/>
          <AnswerList answers={question.answers}/>
        </StyledSection>
      ))}
    </StyledSection>
  );
}

export default QuestionList;