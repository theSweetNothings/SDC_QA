import React from 'react';
import App from './App.jsx';
import { render, cleanup }  from '@testing-library/react';

describe('App', () => {
  afterEach(cleanup);

  test('renders App component', () => {
    render(<App />);
  });
});