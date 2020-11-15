import React from 'react';
import AnswerList from '../AnswerList/AnswerList.jsx';
import Question from '../Question/Question.jsx';
import QuestionList from './QuestionList.jsx';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('QuestionList Unit Testing', () => {
  const questions = [
    {
      question_id: 123,
      question_body: 'Who is the main playable character in the Shadows of the Empire game?',
      question_helpfulness: 55,
      answers: {
        78: {
          body: 'Dash Rendar',
          answerer_name: 'User5678',
          date: '2020-07-02T00:00:00.000Z',
          helpfulness: 85,
          id: 78
        },
        23: {
          body: 'Han Solo',
          answerer_name: 'User234',
          date: '2020-08-24T00:00:00.000Z',
          helpfulness: 34,
          id: 23
        },
        33: {
          body: 'Chewbacca',
          answerer_name: 'User8675309',
          date: '2020-08-24T00:00:00.000Z',
          helpfulness: 23,
          id: 33
        }
      }
    },
    {
      question_id: 456,
      question_body: 'What is the name of Dash Rendar\'s ship?',
      question_helpfulness: 54,
      answers: {
        11: {
          body: 'Ebon Hawk',
          answerer_name: 'User5678',
          date: '2020-08-24T00:00:00.000Z',
          helpfulness: 24,
          id: 11
        },
        29: {
          body: 'Outrider',
          answerer_name: 'User234',
          date: '2020-08-24T00:00:00.000Z',
          helpfulness: 86,
          id: 29
        },
        37: {
          body: 'Falcon',
          answerer_name: 'User8675309',
          date: '2020-08-24T00:00:00.000Z',
          helpfulness: 33,
          id: 37
        }
      }
    },
    {
      question_id: 125,
      question_body: 'Who is the main playable character in Shadows of the Empire game?',
      answers: {
        78: {
          body: 'dash Rendar',
          answerer_name: 'User5678',
          date: '2020-07-02T00:00:00.000Z',
          helpfulness: 851,
          id: 781
        },
        23: {
          body: 'han Solo',
          answerer_name: 'User234',
          date: '2020-08-24T00:00:00.000Z',
          helpfulness: 341,
          id: 231
        },
        33: {
          body: 'chewbacca',
          answerer_name: 'User8675309',
          date: '2020-08-24T00:00:00.000Z',
          helpfulness: 231,
          id: 331
        }
      }
    },
    {
      question_id: 126,
      question_body: 'Who is the main character in the Shadows of the Empire game?',
      answers: {
        78: {
          body: 'ash Rendar',
          answerer_name: 'User5678',
          date: '2020-07-02T00:00:00.000Z',
          helpfulness: 852,
          id: 782
        },
        23: {
          body: 'han Solo',
          answerer_name: 'User234',
          date: '2020-08-24T00:00:00.000Z',
          helpfulness: 342,
          id: 232
        },
        33: {
          body: 'chewbacca',
          answerer_name: 'User8675309',
          date: '2020-08-24T00:00:00.000Z',
          helpfulness: 232,
          id: 332
        }
      }
    },
    {
      question_id: 127,
      question_body: 'Who\'s the main playable character in the Shadows of the Empire game?',
      answers: {
        78: {
          body: 'dash Rendar',
          answerer_name: 'User5678',
          date: '2020-07-02T00:00:00.000Z',
          helpfulness: 853,
          id: 783
        },
        23: {
          body: 'han Solo',
          answerer_name: 'User234',
          date: '2020-08-24T00:00:00.000Z',
          helpfulness: 343,
          id: 233
        },
        33: {
          body: 'chewbacca',
          answerer_name: 'User8675309',
          date: '2020-08-24T00:00:00.000Z',
          helpfulness: 233,
          id: 333
        }
      }
    }
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
    /*expect(screen.getByText('by User5678, January 1, 2011')).toBeInTheDocument();
    expect(screen.getByText('by User234, February 2, 2012')).toBeInTheDocument();
    expect(screen.getByText('by User8675309, March 3, 2012')).toBeInTheDocument();
    expect(screen.getByText('by User5678, January 2, 2011')).toBeInTheDocument();
    expect(screen.getByText('by User234, February 3, 2012')).toBeInTheDocument();
    expect(screen.getByText('by User8675309, March 4, 2012')).toBeInTheDocument();*/
  });

  test('Renders no more than 4 questions to screen', () => {
    expect(screen.getAllByText('Q:', { exact: false }).length).toBe(4);
  });
});