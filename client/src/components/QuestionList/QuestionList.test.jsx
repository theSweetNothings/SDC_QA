import React from 'react';
import AnswerList from '../AnswerList/AnswerList.jsx';
import Question from '../Question/Question.jsx';
import QuestionList from './QuestionList.jsx';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('QuestionList Unit Testing', () => {
  const questions = [
    {
      question: 'Who is the main playable character in the Shadows of the Empire game',
      helpful: 55,
      answers: [
        {
          answer: 'Dash Rendar',
          user: 'User5678',
          date: 'January 1, 2011',
          helpful: 85,
          id: 1
        },
        {
          answer: 'Han Solo',
          user: 'User234',
          date: 'February 2, 2012',
          helpful: 34,
          id: 2
        },
        {
          answer: 'Chewbacca',
          user: 'User8675309',
          date: 'March 3, 2012',
          helpful: 23,
          id: 3
        }
      ]
    },
    {
      question: 'What is the name of Dash Rendar\'s ship',
      helpful: 54,
      answers: [
        {
          answer: 'Ebon Hawk',
          user: 'User5678',
          date: 'January 2, 2011',
          helpful: 24,
          id: 1
        },
        {
          answer: 'Outrider',
          user: 'User234',
          date: 'February 3, 2012',
          helpful: 86,
          id: 2
        },
        {
          answer: 'Falcon',
          user: 'User8675309',
          date: 'March 4, 2012',
          helpful: 33,
          id: 3
        }
      ]
    },
  ];

  // Mount questionlist before each test and unmount it afterwards
  beforeEach(() => render(<QuestionList questions={questions}/>));
  afterEach(cleanup);

  test('Renders question list to the screen', () => {
    expect(screen.getByText('Q: Who is the main playable character in the Shadows of the Empire game?')).toBeInTheDocument();
    expect(screen.getByText('Q: What is the name of Dash Rendar\'s ship?')).toBeInTheDocument();
    expect(screen.getByText('Dash Rendar')).toBeInTheDocument();
    expect(screen.getByText('Han Solo')).toBeInTheDocument();
    expect(screen.getByText('Chewbacca')).toBeInTheDocument();
    expect(screen.getByText('Ebon Hawk')).toBeInTheDocument();
    expect(screen.getByText('Outrider')).toBeInTheDocument();
    expect(screen.getByText('Falcon')).toBeInTheDocument();
    expect(screen.getByText('(85)')).toBeInTheDocument();
    expect(screen.getByText('(34)')).toBeInTheDocument();
    expect(screen.getByText('(23)')).toBeInTheDocument();
    expect(screen.getByText('(86)')).toBeInTheDocument();
    expect(screen.getByText('(33)')).toBeInTheDocument();
    expect(screen.getByText('(24)')).toBeInTheDocument();
    expect(screen.getByText('by User5678, January 1, 2011')).toBeInTheDocument();
    expect(screen.getByText('by User234, February 2, 2012')).toBeInTheDocument();
    expect(screen.getByText('by User8675309, March 3, 2012')).toBeInTheDocument();
    expect(screen.getByText('by User5678, January 2, 2011')).toBeInTheDocument();
    expect(screen.getByText('by User234, February 3, 2012')).toBeInTheDocument();
    expect(screen.getByText('by User8675309, March 4, 2012')).toBeInTheDocument();
  });
});