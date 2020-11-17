import React, { useState, useRef } from 'react';
import axios from 'axios';
import { ModalBackground, ExitModalArticle, ExitModalBtn, ModalContent, ModalForm, ModalTextarea, ModalInput, ModalLabel, StyledButton, StyledInput, StyledText } from './styles.js';

const AnswerModal = function({ product, question, toggleAnswerForm, togglePhotosModal }) {
  const [ answer, setAnswer ] = useState({
    body: '',
    name: '',
    email: '',
    photos: []
  });
  const [ error, setError ] = useState(null);
  const background = useRef('background');

  const handleChange = function(event) {
    const { name, value } = event.target;
    if (name === 'photos') {
      setAnswer(prev => {
        let newAnswer = Object.assign({}, prev);
        newAnswer.photos.push(value);
        return newAnswer;
      });
    } else {
      setAnswer(prev => {
        let newAnswer = Object.assign({}, prev);
        newAnswer[name] = value;
        return newAnswer;
      });
    }
  };

  const handleClose = function(event) {
    const name = event.target.getAttribute('name');
    if (name === 'background' || name === 'close-btn') {
      toggleAnswerForm(false);
    }
  };

  const handleClick = function(event) {
    // Use this to open photo model
    event.preventDefault();
    togglePhotosModal(true);
  };

  const handleSubmit = function(event) {
    event.preventDefault();
    // Regex for checking email format
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (answer.body && answer.name && answer.email) {
      if (emailRegex.test(answer.email)) {
        const body = {
          "body": answer.body,
          "name": answer.name,
          "email": answer.email
        }
        axios.post(`http://52.26.193.201:3000/qa/${question.question_id}/answers`, body)
          .then(response => console.log(response))
          .then(() => setError(null))
          .catch(error => console.log(error));
      } else {
        setError('Provided email address is not in correct email format')
      }
    } else {
      setError('You must enter the following: answer, nickname, and email');
    }
  };

  return (
    <ModalBackground onClick={handleClose} name='background'>
      <ModalContent>
        <ExitModalArticle>
          <ExitModalBtn onClick={handleClose} name='close-btn'>X</ExitModalBtn>
        </ExitModalArticle>
        <h2>Submit your Answer</h2>
        <h3>{product.name}:  {question.question_body}</h3>
        <ModalForm onSubmit={handleSubmit}>
          <ModalLabel>Your Answer*
            <ModalTextarea
              type='text'
              name='body'
              value={answer.body}
              onChange={handleChange}/>
          </ModalLabel>
          <br/>
          <ModalLabel>What is your nickname?*
            <ModalInput
              placeholder='Example: jack543!'
              type='text'
              name='name'
              value={answer.name}
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
              value={answer.email}
              onChange={handleChange}/>
          </ModalLabel>
          <StyledText>
            <p>For authentication reasons, you will not be emailed</p>
          </StyledText>
          <br/>
          <StyledButton onClick={handleClick}>Upload photos
          </StyledButton>
          <br/>
          <StyledInput type='submit' value='Submit'/>
        </ModalForm>
        {error && <p>{error}</p>}
      </ModalContent>
    </ModalBackground>
  );
}

export default AnswerModal;