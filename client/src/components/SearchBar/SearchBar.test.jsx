import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.jsx';
import QuestionList from '../QuestionList/QuestionList.jsx';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('SearchBar Unit Testing', () => {
  // Render the searchbar component before each test and then unmount it afterwards
  beforeEach(() => render(<SearchBar/>));
  afterEach(cleanup);

  // Test whether all children nodes of SearchBar render correctly
  test('renders the SearchBar component with label and placeholder text', () => {
    // Check that the Label and the searchbar are present
    expect(screen.getByText('QUESTIONS & ANSWERS')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    // Check that the placeholder text in the searchbar is correct
    expect(screen.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS...')).toBeInTheDocument();
  });

  // Test whether the search bar responds to user input
  test('updates search bar when user types into textbox', () => {
    // Confirm user typed input isn't rendered to screen
    expect(screen.queryByText(/User Input/)).toBeNull();
    // Simulate user typing 'User Input' into the text box
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'User Input'}
    });
    // Check whether 'User Input' has been rendered to the screen in the input box
    const searchBarText = screen.getByRole('textbox').value;
    expect(searchBarText).toBe('User Input');
  });
});

// Integration Tests for Search Bar
// Test whether typing 3 or more characters in search bar causes rendered question list to update