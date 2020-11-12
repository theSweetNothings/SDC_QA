import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.jsx';
import QuestionList from '../QuestionList/QuestionList.jsx';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('SearchBar', () => {
  beforeEach(() => render(<SearchBar/>));
  afterEach(cleanup);

  // Unit Test for SearchBar component
  test('renders the SearchBar component with label and placeholder text', () => {
    expect(screen.getByText('QUESTIONS & ANSWERS')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS...')).toBeInTheDocument();
  });

  // Integration test for whether searches update QuestionList component
  /*test('searches for results after typing 3 or more characters in search bar', () => {
    render(<QuestionList/>);
  })*/
});