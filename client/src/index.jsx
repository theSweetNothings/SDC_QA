import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';

ReactDOM.render(
  <Router>
      <Route exact path='/:id' component={QuestionsAndAnswers}/>
      <Route exact path='/' component={QuestionsAndAnswers}/>
  </Router>, document.getElementById('questions-and-answers'));