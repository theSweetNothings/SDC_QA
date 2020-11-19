import React from 'react';
import styled from 'styled-components';
import { Box } from '../AnswerModal/styles.js';

const MoreQuestions = function({ expandQuestions }) {
  const handleClick = function(event) {
    expandQuestions();
  };

  return (
    <Box onClick={handleClick}>
      <p>MORE ANSWERED QUESTIONS</p>
    </Box>
  );
};

export default MoreQuestions;