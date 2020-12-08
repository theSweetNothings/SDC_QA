const express = require('express');
const app = express();
const PORT = 3003;
const path = require('path');
const compression = require('compression');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());
app.use(compression());

mongoose.connect('mongodb://localhost:27017/sdcDB_test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connection open for sdcDB_test...'))
  .catch(err => console.log('ERROR:', err));

// TODO: import queries

const Question = require('../models/Question');
// const Answer = require('../models/Answer');

/* SDC Server Routes */

// GET

app.get('/qa/:id', async (req, res) => {
  // console.log(req.params.id)
  const questions = await Question.find({product_id: req.params.id})
  // console.log(questions[0]);
  res.send(questions[0])
})

{/*
app.get('/qa/:product_id', (req, res) => {
  const { productId } = req.params;
  // do database stuff
  res.sendStatus(200);
}) // gets qa for product

app.get('/qa/:question_id/answers', (req, res) => {
  const { questionId } = req.params;
  // do database stuff
  res.sendStatus(200);
}) // gets answers for single question

app.get('/products/:product_id', (req, res) => {
  const { productId } = req.params;
  // do database stuff
  res.sendStatus(200);
}) // gets product info

// POST

app.post('/qa/:product_id', (req, res) => {
  const { productId } = req.params;
  const { body, name, email } = req.body;
  // do database stuff
  res.sendStatus(201);
}) // adds question

app.post('/qa/:question_id/answers', (req, res) => {
  const { questionId } = req.params;
  const { body, name, email, photos } = req.body;
  // do database stuff
  res.sendStatus(201);
}) // adds answer to question

// PUT

app.put('/qa/question/:question_id/helpful', (req, res) => {
  const { questionId } = req.params;
  // do database stuff
  res.sendStatus(204);
}) // marks question as helpful

app.put('/qa/question/:question_id/report', (req, res) => {
  const { question_id } = req.params;
  // do database stuff
  res.sendStatus(204);
}) // reports question

app.put('/qa/answer/:answer_id/helpful', (req, res) => {
  const { answerId } = req.params;
  // do database stuff
  res.sendStatus(204);
}) // marks answer as helpful

app.put('/qa/answer/:answer_id/report', (req, res) => {
  const { answerId} = req.params;
  // do database stuff
  res.sendStatus(204);
}) // reports answer

*/}

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log('Server is listening on port ' + PORT)
});