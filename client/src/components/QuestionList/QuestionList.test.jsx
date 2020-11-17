import React from 'react';
import AnswerList from '../AnswerList/AnswerList.jsx';
import Question from '../Question/Question.jsx';
import QuestionList from './QuestionList.jsx';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { questions } from './dummyQuestions.js';

describe('QuestionList Unit & Integration Testing', () => {
  // Mount questionlist before each test and unmount it afterwards
  beforeEach(() => render(<QuestionList questions={questions} product={{ name: 'Star Wars' }}/>));
  afterEach(cleanup);

  test('Renders question list to the screen', () => {
    expect(screen.getByText('Q: Who is the main playable character in the Shadows of the Empire game?')).toBeInTheDocument();
    expect(screen.getByText('Q: What is the name of Dash Rendar\'s ship?')).toBeInTheDocument();
  });

  /*test('Renders no more than 4 questions to screen', () => {
    expect(screen.getAllByText('Q:', { exact: false }).length).toBe(4);
  });*/

  test('Integrates Helpful component into rendered questions', () => {
    expect(screen.getByText('(55)')).toBeInTheDocument();
    expect(screen.getByText('(54)')).toBeInTheDocument();
  });
});