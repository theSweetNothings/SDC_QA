import React, { useState } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.section`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const ModalContent = styled.article`
  background-color: steelblue;
  margin: 5% auto;
  padding: 20px 10px;
  width: 70%;
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const AnswerModal = function({ product, question }) {
  const [ answer, setAnswer ] = useState({
    body: '',
    name: '',
    email: '',
    photos: []
  });
  const [ error, setError ] = useState(null);

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
  }

  const handleSubmit = function(event) {
    event.preventDefault();
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (answer.body && answer.name && answer.email) {
      if (emailRegex.test(answer.email)) {
        console.log('good request');
        // Add post request here
        setError(null);
      } else {
        setError('Provided email address is not acceptable format')
      }
    } else {
      setError('Please complete all mandatory fields');
    }
  }

  return (
    <ModalBackground>
      <ModalContent>
        <h2>Submit your Answer</h2>
       <h3>{product.name}: {question}</h3>
        <ModalForm onSubmit={handleSubmit}>
          <label>Your Answer*
            <input type='text' name='body' value={answer.body} onChange={handleChange}/>
          </label>
          <label>What is your nickname?*
            <input placeholder='Example: jack543!' type='text' name='name' value={answer.name} onChange={handleChange}/>
          </label>
          <label>Your email*
            <input type='text' name='email' value={answer.email} onChange={handleChange}/>
          </label>
          <label>Upload your photos
            <input type='text' name='photos' value={answer.photos} onChange={handleChange}/>
          </label>
          <input type='submit' value='Submit'/>
        </ModalForm>
        {error && <p>{error}</p>}
      </ModalContent>
    </ModalBackground>
  );
}

export default AnswerModal;