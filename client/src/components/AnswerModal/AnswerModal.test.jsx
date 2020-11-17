import React from 'react';
import QuestionList from '../QuestionList/QuestionList.jsx'
import AnswerModal from './AnswerModal.jsx';
import { render, screen, cleanup, fireEvent }  from '@testing-library/react';
import '@testing-library/jest-dom';
import { questions } from '../QuestionList/dummyQuestions.js';

describe('Answer Modal Unit Testing', () => {

  beforeEach(() => render(<QuestionList questions={questions} product={{ name: 'Star Wars' }}/>));
  afterEach(cleanup);

  test('Answer Modal is not rendered before "Add Answer" is clicked', () => {
    expect(screen.queryByText('Submit your Answer')).toBeNull();
    expect(screen.queryByRole('textbox')).toBeNull();
    expect(screen.queryByText('Your Answer*')).toBeNull();
    expect(screen.queryByText('What is your nickname?*')).toBeNull();
    expect(screen.queryByText('Your email*')).toBeNull();
    expect(screen.queryByText('Upload your photos')).toBeNull();
    expect(screen.queryByText('Submit')).toBeNull();
  });

  test('Clicking "Add Answer" causes Answer Modal to be rendered', () => {
    screen.debug();
    fireEvent.click(screen.getAllByText('Add Answer')[0]);
    screen.debug();
    expect(screen.getByText('Submit your Answer')).toBeInTheDocument();
    expect(screen.getByText('Your Answer*')).toBeInTheDocument();
    expect(screen.getByText('What is your nickname?*')).toBeInTheDocument();
    expect(screen.getByText('Your email*')).toBeInTheDocument();
    expect(screen.getByText('Upload your photos')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Example: jack543!')).toBeInTheDocument();
  });
/*
  test('Answer Modal requires an answer', () => {
    fireEvent.click(screen.getByText('Add Answer'));
    fireEvent.change(screen.getByLabelText('What is your nickname?*'), {
      target: { value: 'Han Solo'}
    });
    fireEvent.change(screen.getByLabelText('Your Answer*'), {
      target: { value: 'hsolo@agffa.net' }
    });
    fireEvent.click(screen.getByText('Submit'));
    expect(screen.getByText('Please complete all mandatory fields')).toBeInTheDocument();
  });

  test('Answer Modal requires a nickname', () => {
    fireEvent.click(screen.getByText('Add Answer'));
    fireEvent.change(screen.getByLabelText('What is your nickname?*'), {
      target: { value: 'Han Solo'}
    });
    fireEvent.change(screen.getByLabelText('Your Answer*'), {
      target: { value: 'hsolo@agffa.net' }
    });
    fireEvent.click(screen.getByText('Submit'));
    expect(screen.getByText('Please complete all mandatory fields')).toBeInTheDocument();
  });

  test('Answer Modal requires an email address', () => {
    fireEvent.click(screen.getByText('Add Answer'));
    fireEvent.change(screen.getByLabelText('What is your nickname?*'), {
      target: { value: 'Han Solo'}
    });
    fireEvent.change(screen.getByLabelText('Your Answer*'), {
      target: { value: 'Han Solo' }
    });
    fireEvent.click(screen.getByText('Submit'));
    expect(screen.getByText('Please complete all mandatory fields')).toBeInTheDocument();
  });
/*
  test('Provided email address must be in correct email format', async () => {
    fireEvent.click(screen.getByText('Add Answer'));
    fireEvent.change(screen.getByLabelText('What is your nickname?*'), {
      target: { value: 'Han Solo'}
    });
    fireEvent.change(screen.getByLabelText('Your Answer*'), {
      target: { value: 'Han Solo' }
    });
    fireEvent.change(screen.getByLabelText('Your email*'), {
      target: { value: 'hsolo@agffanet' }
    });
    fireEvent.click(screen.getByText('Submit'));
    expect(screen.getByText('Provided email address is not acceptable format')).toBeInTheDocument();
  });

  test('Provided email address must be in correct email format', async () => {
    fireEvent.click(screen.getByText('Add Answer'));
    fireEvent.change(await screen.findByLabelText('Your Answer*'), {
      target: { value: 'Han Solo'}
    });
    fireEvent.change(await screen.findByLabelText('What is your nickname?*'), {
      target: { value: 'Han Solo' }
    });
    fireEvent.change(await screen.findByLabelText('Your email*'), {
      target: { value: 'hsoloagffa.net' }
    });
    fireEvent.click(await screen.findByText('Submit'));
    expect(await screen.findByText('Provided email address is not acceptable format')).toBeInTheDocument();
  });*/
});