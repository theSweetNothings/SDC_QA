import React, { useState } from 'react';
import { ModalBackground, ExitModalArticle, ExitModalBtn, ModalContent, ModalForm, ModalTextarea, ModalInput, ModalLabel, StyledButton, StyledInput, StyledText } from '../AnswerModal/styles.js';
import { handleChange, handleSubmit } from '../AnswerModal/helpers.js';

const QuestionModal = function({ handleClose, product, toggleQuestionForm }) {
  const [ question, setQuestion ] = useState(
    { body: '', name: '', email: '' });
  const [ error, setError ] = useState(null);

  return (
    <ModalBackground onClick={handleClose}             name='question-background'>
        <ModalContent>
          <ExitModalArticle>
            <ExitModalBtn onClick={handleClose} name='question-close-btn'>X</ExitModalBtn>
          </ExitModalArticle>
          <h2>Ask Your Question</h2>
          <h3>About the {product.name}</h3>
          <ModalForm onSubmit={() => handleSubmit(event, toggleQuestionForm, question, product.id, setError)}>
            <ModalLabel>Your Question*
              <ModalTextarea
                type='text'
                name='body'
                value={question.body}
                placeholder='Why did you like the product or not?'
                onChange={() => handleChange(event, setQuestion)}/>
            </ModalLabel>
            <br/>
            <ModalLabel>What is your nickname?*
              <ModalInput
                placeholder='Example: jackson11!'
                type='text'
                name='name'
                value={question.name}
                onChange={() => handleChange(event, setQuestion)}/>
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
                onChange={() => handleChange(event, setQuestion)}/>
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