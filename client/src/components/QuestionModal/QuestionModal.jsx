import React, { useState } from 'react';
import axios from 'axios';
import { ModalBackground, ExitModalArticle, ExitModalBtn, ModalContent, ModalForm, ModalTextarea, ModalInput, ModalLabel, StyledButton, StyledInput, StyledText } from '../AnswerModal/styles.js';

const QuestionModal = function({ handleClose, product, toggleQuestionForm }) {
  const [ question, setQuestion ] = useState(
    { body: '', name: '', email: '' });
  const [ error, setError ] = useState(null);

  const handleChange = function(event) {
    const { name, value } = event.target;
    setQuestion(prev => {
      let newQuestion = Object.assign({}, prev);
      newQuestion[name] = value;
      return newQuestion;
    });
  };

  const handleSubmit = function(event) {
    event.preventDefault();
  };

  return (
    <ModalBackground onClick={handleClose}             name='question-background'>
        <ModalContent>
          <ExitModalArticle>
            <ExitModalBtn onClick={handleClose} name='question-close-btn'>X</ExitModalBtn>
          </ExitModalArticle>
          <h2>Ask Your Question</h2>
          <h3>About the {product.name}</h3>
          <ModalForm onSubmit={handleSubmit}>
            <ModalLabel>Your Question*
              <ModalTextarea
                type='text'
                name='body'
                value={question.body}
                placeholder='Why did you like the product or not?'
                onChange={handleChange}/>
            </ModalLabel>
            <br/>
            <ModalLabel>What is your nickname?*
              <ModalInput
                placeholder='Example: jackson11!'
                type='text'
                name='name'
                value={question.name}
                onChange={handleChange}/>
            </ModalLabel>
            <StyledText>
              <p>For privacy reasons, do not use your full name or email address</p>
            </StyledText>
            <br/>
            <ModalLabel>Your email*
              <ModalInput
                type='text'
                name='email'
                value={question.email}
                onChange={handleChange}/>
            </ModalLabel>
            <StyledText>
              <p>For authentication reasons, you will not be emailed</p>
            </StyledText>
            <br/>
            <StyledInput type='submit' value='Submit'/>
          </ModalForm>
          {error && <p>{error}</p>}
        </ModalContent>
      </ModalBackground>
  );
};

export default QuestionModal;