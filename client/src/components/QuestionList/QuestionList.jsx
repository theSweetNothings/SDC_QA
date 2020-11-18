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
  const [ clickedQuestion, setClickedQuestion ] = useState(null);const [ showPhotosModal, setShowPhotosModal ] = useState(false);

  const toggleAnswerForm = function(bool, query) {
    setShowAnswerModal(bool);
    query && setClickedQuestion(query);
  };

  const togglePhotosModal = function(bool) {
    setShowPhotosModal(bool);
  };

  const handleClose = function(event) {
    const name = event.target.getAttribute('name');
    if (name === 'answer-background' || name === 'answer-close-btn') {
      toggleAnswerForm(false);
    } else if (name === 'photos-background' || name === 'photos-close-btn') {
      togglePhotosModal(false);
    }
  };

  return (
    <Container>
      {// Sort questions in desc order by helpfulness & render a Question component for each sorted question
      props.questions
        .sort((a,b) => b.question_helpfulness - a.question_helpfulness)
        .map(question => (
          <Section key={question.question_id}>
            <Question
              question={question}
              product={props.product}
              toggleAnswerForm={toggleAnswerForm}
              updateHelp={props.updateHelp}
            />
            <AnswerList
              answers={Object.values(question.answers)}
              updateHelp={props.updateHelp}
            />
          </Section>
        ))
      }
      {showAnswerModal && <AnswerModal
        product={props.product}
        question={clickedQuestion}
        showPhotosModal={showPhotosModal}
        toggleAnswerForm={toggleAnswerForm}
        togglePhotosModal={togglePhotosModal}
        handleClose={handleClose}
      />}
    </Container>
  );
}

export default QuestionList;