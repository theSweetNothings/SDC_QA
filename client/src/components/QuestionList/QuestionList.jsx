import React, { useState } from 'react';
import styled from 'styled-components';
import AnswerList from '../AnswerList/AnswerList.jsx';
import Answer from '../Answer/Answer.jsx';
import Question from '../Question/Question.jsx';
import AnswerModal from '../AnswerModal/AnswerModal.jsx';

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
  const [ showAnswerModal, setShowAnswerModal ] = useState(false);
  const [ clickedQuestion, setClickedQuestion ] = useState(null);

  const toggleAnswerForm = function(bool, query) {
    setShowAnswerModal(bool);
    // setClickedQuestion(query);
  };

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
              toggleAnswerForm={toggleAnswerForm}
            />
            <AnswerList answers={Object.values(question.answers)}/>
          </Section>
        ))
      }
      {showAnswerModal && <AnswerModal />}
    </Container>
  );
}

export default QuestionList;