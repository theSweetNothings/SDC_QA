import React from 'react';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import { render, screen, cleanup }  from '@testing-library/react';
import '@testing-library/jest-dom';

describe('App Unit Test', () => {
  afterEach(cleanup);

  test('renders App component', () => {
    render(<QuestionsAndAnswers match={{ params: { id: 2 }}}/>);
  });
});

describe('App Async Integration Tests', () => {
  afterEach(cleanup);

  test('On mount, performs get request to API for Question and Answer data', async () => {
    render(<QuestionsAndAnswers match={{ params: { id: 2 }}}/>);
    // Confirm nothing is rendered before GET request
    expect(screen.queryByText('Q:')).toBeNull();
    // Check whether get request updates state and passes props to other child components
    expect(await screen.findByText(/Q: Do you ship to Canada?/)).toBeInTheDocument();
  });
});