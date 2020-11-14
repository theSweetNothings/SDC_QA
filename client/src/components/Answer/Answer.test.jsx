import React from 'react';
import Answer from './Answer.jsx';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Answer Unit Testing', () => {
  // Mount Answer to the DOM before each test and unmount it afterwards
  beforeEach(() => render(<Answer answer='Dash Rendar' helpful={85} user={{ name: 'User5678', date: 'January 1, 2011'}}/>));
  afterEach(cleanup);

  test('Renders Answer component to the screen', () => {
    expect(screen.getByText('A:')).toBeInTheDocument();
    expect(screen.getByText('Dash Rendar')).toBeInTheDocument();
  });

  // Integration test between Answer and Helpful Components
  test('Answer renders Helper component to screen', () => {
    expect(screen.getByText('Helpful?')).toBeInTheDocument();
    expect(screen.getByText('Yes (85)')).toBeInTheDocument();
  });

  test('Answer renders username with date to screen', () => {
    expect(screen.getByText('by User5678, January 1, 2011')).toBeInTheDocument();
  });

  test('Answer renders Report navlink to screen', () => {
    expect(screen.getByText('Report')).toBeInTheDocument();
  });
});