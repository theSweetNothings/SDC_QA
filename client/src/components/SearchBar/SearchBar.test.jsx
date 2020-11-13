import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.jsx';
import QuestionList from '../QuestionList/QuestionList.jsx';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('SearchBar', () => {
  // Render the searchbar component before each test and then unmount it afterwards
  beforeEach(() => render(<SearchBar/>));
  afterEach(cleanup);

  // Unit Test for SearchBar component
  test('renders the SearchBar component with label and placeholder text', () => {
    // Check that the Label above the searchbar is correct
    expect(screen.getByText('QUESTIONS & ANSWERS')).toBeInTheDocument();
    // Check that the searchbar <input /> textbox is present
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    // Check that the placeholder text in the searchbar is correct
    expect(screen.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS...')).toBeInTheDocument();
  });

  // Integration test for whether searches update QuestionList component
  /*test('searches for results after typing 3 or more characters in search bar', () => {
    render(<QuestionList/>);
  })*/
});