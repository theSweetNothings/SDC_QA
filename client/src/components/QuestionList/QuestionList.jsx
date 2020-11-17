import React, { useState } from 'react';
import styled from 'styled-components';
import AnswerList from '../AnswerList/AnswerList.jsx';
import Answer from '../Answer/Answer.jsx';
import Question from '../Question/Question.jsx';
import AnswerModal from '../AnswerModal/AnswerModal.jsx';
import PhotosModal from '../PhotosModal/PhotosModal.jsx';

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
  const [ showPhotosModal, setShowPhotosModal ] = useState(false);

  const toggleAnswerForm = function(bool, query) {
    setShowAnswerModal(bool);
    query && setClickedQuestion(query);
  };

  const togglePhotosModal = function(bool) {
    setShowPhotosModal(bool);
  }

  const handleClose = function(event) {
    const name = event.target.getAttribute('name');
    if (name === 'background' || name === 'close-btn') {
      toggleAnswerForm(false);
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
            />
            <AnswerList answers={Object.values(question.answers)}/>
          </Section>
        ))
      }
      {showAnswerModal && <AnswerModal
        product={props.product}
        question={clickedQuestion}
        toggleAnswerForm={toggleAnswerForm}
        togglePhotosModal={togglePhotosModal}
      />}
      {showPhotosModal && <PhotosModal />}
    </Container>
  );
}

export default QuestionList;