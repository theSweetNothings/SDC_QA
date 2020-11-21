import React, { lazy, Suspense } from 'react';
import Answer from '../Answer/Answer.jsx';
const MoreAnswers = lazy(() => import('../MoreAnswers/MoreAnswers.jsx'));

const AnswerList = function(props) {
  // Sort answers in desc order by helpfulness & render an Answer component for each sorted question
  const answers = props.answers
    .sort((a,b) => b.helpfulness - a.helpfulness)
    .map(answer => (
      <Answer
        key={answer.id}
        answer={answer}
        updateHelp={props.updateHelp}
      />
  ));

  return (
    <section>
      { answers.length > 2 ? answers.slice(0, 2) : answers }
        { answers.length > 2 && <Suspense fallback={<section></section>}>
          <MoreAnswers answers={answers.slice(2)}/>
        </Suspense> }
    </section>
  );
};

export default AnswerList;