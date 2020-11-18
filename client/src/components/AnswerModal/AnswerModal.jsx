import React, { useState } from 'react';
import axios from 'axios';
import { ModalBackground, ExitModalArticle, ExitModalBtn, ModalContent, ModalForm, ModalTextarea, ModalInput, ModalLabel, StyledButton, StyledInput, StyledText } from './styles.js';
import PhotosModal from '../PhotosModal/PhotosModal.jsx';

const AnswerModal = function({ product, question,showPhotosModal, toggleAnswerForm, togglePhotosModal, handleClose }) {
  const [ answer, setAnswer ] = useState(
    { body: '', name: '', email: '', photos: null });
  const [ error, setError ] = useState(null);

  // Updates state with uploaded photos
  const handleUpload = function(pictures) {
    /*
    let fdPictures = pictures.map(pic => {
      let fd = new FormData();
      fd.append('image', pic);
      console.log(fd);
      return fd;
    });*/

    setAnswer(prev => {
      let updated = Object.assign({}, prev);
      updated.photos = pictures;
      return updated;
    });
    togglePhotosModal(false);
  };

  const handleChange = function(event) {
    const { name, value } = event.target;
    setAnswer(prev => {
      let newAnswer = Object.assign({}, prev);
      newAnswer[name] = value;
      return newAnswer;
    });
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
          "email": answer.email,
          "photos": answer.photos
        }
        axios.post(`http://52.26.193.201:3000/qa/${question.question_id}/answers`, body)
          .then(response => console.log(response))
          .then(() => setError(null))
          .then(() => toggleAnswerForm(false))
          .catch(error => console.log(error));
      } else {
        setError('Provided email address is not in correct email format')
      }
    } else {
      setError('You must enter the following: answer, nickname, and email');
    }
  };

  return (
    <>
      <ModalBackground onClick={handleClose}             name='answer-background'>
        <ModalContent>
          <ExitModalArticle>
            <ExitModalBtn onClick={handleClose} name='answer-close-btn'>X</ExitModalBtn>
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
      {showPhotosModal && <PhotosModal handleClose={handleClose} handleUpload={handleUpload}/>}
    </>
  );
}

export default AnswerModal;