import React from 'react';
import styled from 'styled-components';
import { Box } from '../AnswerModal/styles.js';

const MoreQuestions = function({ handleClick }) {

  return (
    <Box onClick={handleClick}>
      <p>MORE ANSWERED QUESTIONS</p>
    </Box>
  );
};

export default MoreQuestions;