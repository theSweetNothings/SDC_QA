import React from 'react';
import AnswerList from '../AnswerList/AnswerList.jsx';
import Answer from '../Answer/Answer.jsx';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('AnswerList Unit Testing', () => {
  // Answers to pass as props
  const answers = [
    {
      body: 'Outrider',
      answerer_name: 'User234',
      date: '2020-07-02T00:00:00.000Z',
      helpfulness: 34,
      id: 2
    },
    {
      body: 'Leebo',
      answerer_name: 'User8675309',
      date: '2020-07-02T00:00:00.000Z',
      helpfulness: 23,
      id: 3
    },
    {
      body: 'Dash Rendar',
      answerer_name: 'User5678',
      date: '2020-07-02T00:00:00.000Z',
      helpfulness: 85,
      id: 1
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
    //expect(screen.getByText('by User5678, January 1, 2011')).toBeInTheDocument();
    //expect(screen.getByText('by User234, February 2, 2012')).toBeInTheDocument();
    //expect(screen.getByText('by User8675309, March 3, 2012')).toBeInTheDocument();
  });
});