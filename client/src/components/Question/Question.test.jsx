import React from 'react';
import Question from './Question.jsx';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { questions } from '../QuestionList/dummyQuestions.js';

describe('Question Unit Testing', () => {
  // Render Question before each test and unmount it afterwards
  beforeEach(() => render(<Question question={questions[0]}/>));
  afterEach(cleanup);

  test('Renders Question component to screen', () => {
    expect(screen.getByText('Q: Who is the main playable character in the Shadows of the Empire game?')).toBeInTheDocument();
  });

  // Integration Test between Question and Helpful
  test('Question renders Helper component to screen', () => {
    expect(screen.getByText('Helpful?')).toBeInTheDocument();
    expect(screen.getByText('Yes')).toBeInTheDocument();
    expect(screen.getByText('(55)')).toBeInTheDocument();
  });

  test('Question renders Add Answer to screen', () => {
    expect(screen.getByText('Add Answer')).toBeInTheDocument();
  });
});