import React from 'react';
import Helpful from './Helpful.jsx';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Helpful Unit Testing', () => {
  // Render Helpful before each test and unmount it afterwards
  beforeEach(() => render(<Helpful helpful={25}/>));
  afterEach(cleanup);

  test('Renders Helpful component to page with props passed to Yes', () => {
    expect(screen.getByText('Helpful?')).toBeInTheDocument();
    expect(screen.getByText('Yes')).toBeInTheDocument();
    expect(screen.getByText('(25)')).toBeInTheDocument();
  });
});