import React from 'react';
import Question from '../Question/Question.jsx';
import AnswerModal from './AnswerModal.jsx';
import { render, screen, cleanup }  from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Answer Modal Unit Testing', () => {
  beforeEach(() => render(<Question question='Who is the main playable character in the Shadows of the Empire game?' helpful={34}/>));
  afterEach(cleanup);

  test('Answer Modal is not rendered before "Add Answer" is clicked', () => {
    expect(screen.querybyText('Submit your Answer')).toBeNull();
    expect(screen.queryByRole('textbox')).toBeNull();
    expect(screen.getByText('Your Answer*')).toBeNull();
    expect(screen.getByText('What is your nickname?*')).toBeNull();
    expect(screen.getByText('Your email*')).toBeNull();
    expect(screen.getByText('Upload your photos')).toBeNull();
    expect(screen.getByText('Submit')).toBeNull();
  });

  test('Clicking "Add Answer" causes Answer Modal to be rendered', () => {
    screen.debug();
    fireEvent.click(screen.getByText('Add Answer'));
    screen.debug();
    expect(screen.getByText('Submit your Answer')).toBeInTheDocument();
    expect(screen.getByText('Your Answer')).toBeInTheDocument();
    expect(screen.getByText('What is your nickname?')).toBeInTheDocument();
    expect(screen.getByText('Your email')).toBeInTheDocument();
    expect(screen.getByText('Upload your photos')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Example: jack543!')).toBeInTheDocument();
  });
});

describe('Add Answer performs Form Validation upon submission', () => {
  beforeEach(() => render(<Question question='Who is the main playable character in the Shadows of the Empire game?' helpful={34}/>));
  afterEach(cleanup);

  test('Answer Modal requires an answer', () => {
    fireEvent.click(screen.getByText('Add Answer'));
    fireEvent.change(screen.getByLabelText('nickname'), {
      target: { value: 'Han Solo'}
    });
    fireEvent.change(screen.getByLabelText('email'), {
      target: { value: 'hsolo@agffa.net' }
    });
    fireEvent.click(screen.getByText('Submit'));
    expect(screen.getByText('Please complete all mandatory fields')).toBeInTheDocument();
  });

  test('Answer Modal requires a nickname', () => {
    fireEvent.click(screen.getByText('Add Answer'));
    fireEvent.change(screen.getByLabelText('answer'), {
      target: { value: 'Han Solo'}
    });
    fireEvent.change(screen.getByLabelText('email'), {
      target: { value: 'hsolo@agffa.net' }
    });
    fireEvent.click(screen.getByText('Submit'));
    expect(screen.getByText('Please complete all mandatory fields')).toBeInTheDocument();
  });

  test('Answer Modal requires an email address', () => {
    fireEvent.click(screen.getByText('Add Answer'));
    fireEvent.change(screen.getByLabelText('nickname'), {
      target: { value: 'Han Solo'}
    });
    fireEvent.change(screen.getByLabelText('answer'), {
      target: { value: 'Han Solo' }
    });
    fireEvent.click(screen.getByText('Submit'));
    expect(screen.getByText('Please complete all mandatory fields')).toBeInTheDocument();
  });

  test('Provided email address must be in correct email format', () => {
    fireEvent.click(screen.getByText('Add Answer'));
    fireEvent.change(screen.getByLabelText('nickname'), {
      target: { value: 'Han Solo'}
    });
    fireEvent.change(screen.getByLabelText('answer'), {
      target: { value: 'Han Solo' }
    });
    fireEvent.change(screen.getByLabelText('email'), {
      target: { value: 'hsolo@agffanet' }
    });
    fireEvent.click(screen.getByText('Submit'));
    expect(screen.getByText('Provided email address is not acceptable format')).toBeInTheDocument();
  });

  test('Provided email address must be in correct email format', () => {
    fireEvent.click(screen.getByText('Add Answer'));
    fireEvent.change(screen.getByLabelText('nickname'), {
      target: { value: 'Han Solo'}
    });
    fireEvent.change(screen.getByLabelText('answer'), {
      target: { value: 'Han Solo' }
    });
    fireEvent.change(screen.getByLabelText('email'), {
      target: { value: 'hsoloagffa.net' }
    });
    fireEvent.click(screen.getByText('Submit'));
    expect(screen.getByText('Provided email address is not acceptable format')).toBeInTheDocument();
  });
});