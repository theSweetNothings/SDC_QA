import React from 'react';
import Question from './Question.jsx';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Question Unit Testing', () => {
  // Render Question before each test and unmount it afterwards
  beforeEach(() => render(<Question question='Who is the main playable character in the Shadows of the Empire game' helpful={34}/>));
  afterEach(cleanup);

  test('Renders Question component to screen', () => {
    expect(screen.getByText('Q: Who is the main playable character in the Shadows of the Empire game?')).toBeInTheDocument();
  });

  // Integration Test between Question and Helpful
  test('Question renders Helper component to screen', () => {
    expect(screen.getByText('Helpful?')).toBeInTheDocument();
    expect(screen.getByText('Yes (34)')).toBeInTheDocument();
  });

  test('Question renders Add Answer to screen', () => {
    expect(screen.getByText('Add Answer')).toBeInTheDocument();
  });
});