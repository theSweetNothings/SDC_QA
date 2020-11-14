import React from 'react';
import styled from 'styled-components';
import AnswerList from '../AnswerList/AnswerList.jsx';
import Answer from '../Answer/Answer.jsx';
import Question from '../Question/Question.jsx';
import { v4 as uuidv4 } from 'uuid';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 80%;
`;

const QuestionList = function(props) {
  return (
    <Container>
      {// Sort questions in desc order by helpfulness & render a Question component for each sorted question
      props.questions
        .sort((a,b) => b.helpful - a.helpful)
        .map(question => (
          <Section key={uuidv4()}>
            <Question question={question.question} helpful={question.helpful}/>
            <AnswerList answers={question.answers}/>
          </Section>
        ))
      }
    </Container>
  );
}

export default QuestionList;