import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
  align-items: center;
  background-color: steelblue;
  border-radius: 10px;
  color: seashell;
  display: flex;
  flex-direction: column;
  margin: 5% auto;
  padding: 20px;
  width: 70%;
`;

const ModalForm = styled.form`
display: flex;
flex-direction: column;
margin: 20px;
${ModalForm} > label {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: right;
}
${ModalForm} > label > input {
  margin-left: 10px;
}
${ModalForm} > p {
  align-self: center;
}
${ModalForm} > input, button {
  align-self: center;
  border-radius: 10px;
  width: 75px;
}
${ModalForm} > input, button:hover {
  cursor: pointer;
}
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

  const handleClick = function(event) {
    // Use this to open photo model
  }

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
  }

  return (
    <ModalBackground>
      <ModalContent>
        <h2>Submit your Answer</h2>
       <h3>{product.name}:  {question.question_body}</h3>
        <ModalForm onSubmit={handleSubmit}>
          <label>Your Answer*
            <input type='text' name='body' value={answer.body} onChange={handleChange}/>
          </label>
          <br/>
          <label>What is your nickname?*
            <input placeholder='Example: jack543!' type='text' name='name' value={answer.name} onChange={handleChange}/>
          </label>
          <p>For privacy reasons, do not use your full name or email address</p>
          <br/>
          <label>Your email*
            <input type='text' name='email' value={answer.email} onChange={handleChange}/>
          </label>
          <p>For authentication reasons, you will not be emailed</p>
          <br/>
          <button onClick={handleClick}>Upload photos</button>
          <br/>
          <input type='submit' value='Submit'/>
        </ModalForm>
        {error && <p>{error}</p>}
      </ModalContent>
    </ModalBackground>
  );
}

export default AnswerModal;