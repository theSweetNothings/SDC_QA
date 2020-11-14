import React from 'react';
import AnswerList from '../AnswerList/AnswerList.jsx';
import Answer from '../Answer/Answer.jsx';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('AnswerList Unit Testing', () => {
  // Answers to pass as props
  const answers = [
    {
      answer: 'Dash Rendar',
      user: 'User5678',
      date: 'January 1, 2011',
      helpful: 85,
      id: 1
    },
    {
      answer: 'Outrider',
      user: 'User234',
      date: 'February 2, 2012',
      helpful: 34,
      id: 2
    },
    {
      answer: 'Leebo',
      user: 'User8675309',
      date: 'March 3, 2012',
      helpful: 23,
      id: 3
    }
  ];
  // Mount Answer List before each test and unmount it afterwards
  beforeEach(() => render(<AnswerList answers={answers}/>));
  afterEach(cleanup);

  test('Renders answer list to the screen', () => {
    expect(screen.getByText('Dash Rendar')).toBeInTheDocument();
    expect(screen.getByText('Outrider')).toBeInTheDocument();
    expect(screen.getByText('Leebo')).toBeInTheDocument();
    expect(screen.getByText('(85)')).toBeInTheDocument();
    expect(screen.getByText('(34)')).toBeInTheDocument();
    expect(screen.getByText('(23)')).toBeInTheDocument();
    expect(screen.getByText('by User5678, January 1, 2011')).toBeInTheDocument();
    expect(screen.getByText('by User234, February 2, 2012')).toBeInTheDocument();
    expect(screen.getByText('by User8675309, March 3, 2012')).toBeInTheDocument();
  });
});