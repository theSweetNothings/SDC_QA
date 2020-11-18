import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Underscore } from '../AnswerModal/styles.js';

const Article = styled.article`
  display: flex;
`;

const Helpful = function(props) {
  const [ clicked, setClicked ] = useState(false);

  const handleClick = function(event) {
    setClicked(true);
    if (props.question) {
      axios.put(`http://52.26.193.201:3000/qa/question/${props.question}/helpful`)
        .then(() => props.updateHelp())
        .catch(error => console.log(error));
    } else if (props.answer) {
      axios.put(`http://52.26.193.201:3000/qa/answer/${props.answer}/helpful`)
        .then(() => props.updateHelp())
        .catch(error => console.log(error));
    }
  };

  return (
    <Article>
      <p style={{ marginRight: '.25rem'}}>Helpful?</p>
      <p>
        { clicked ? <u>Yes</u> :
          <Underscore onClick={handleClick}>Yes</Underscore>}
          &nbsp;
        ({props.helpful})
      </p>
    </Article>
  );
};

export default Helpful;