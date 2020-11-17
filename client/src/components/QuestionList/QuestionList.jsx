import React from 'react';
import styled from 'styled-components';
import AnswerList from '../AnswerList/AnswerList.jsx';
import Answer from '../Answer/Answer.jsx';
import Question from '../Question/Question.jsx';

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
        .sort((a,b) => b.question_helpfulness - a.question_helpfulness)
        .map(question => (
          <Section key={question.question_id}>
            <Question
              question={question.question_body}
              helpful={question.question_helpfulness}
              product={props.product}
              toggleAnswerForm={props.toggleAnswerForm}
            />
            <AnswerList answers={Object.values(question.answers)}/>
          </Section>
        ))
      }
    </Container>
  );
}

export default QuestionList;