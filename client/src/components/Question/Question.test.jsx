import React from 'react';
import Question from './Question.jsx';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Question Unit Testing', () => {
  // Render Question before each test and unmount it afterwards
  beforeEach(() => render(<Question question='Who what which when where why whether how'/>));
  afterEach(cleanup);

  test('Renders Question component to screen', () => {
    expect(screen.getByText('Q: Who what which when where why whether how?')).toBeInTheDocument();
  });
});