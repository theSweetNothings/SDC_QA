import React from 'react';
import { Box } from '../AnswerModal/styles.js';

const AddQuestion = function({ toggleQuestionForm }) {
  return (
    <Box onClick={() => toggleQuestionForm(true)}>
      <p>ADD A QUESTION +</p>
    </Box>
  );
};

export default AddQuestion;