import React from 'react';
import Answer from '../Answer/Answer.jsx';

const AnswerList = function(props) {
  return (
    <section>
      {props.answers.map(answer => (
        <Answer key={answer.id} answer={answer}/>
      ))}
    </section>
  );
};

export default AnswerList;