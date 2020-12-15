require('newrelic');
const express = require('express');
const app = express();
const PORT = 3003;
const path = require('path');
const compression = require('compression');
const cors = require('cors');
const mongoose = require('mongoose');
const queries = require('./queries');

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());
app.use(compression());

mongoose.connect('mongodb://localhost:27017/sdcDB_test2', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connection open for sdcDB_test2...'))
  .catch(err => console.log('ERROR:', err));

/* SDC Server Routes */

// GET

app.get('/qa/:product_id', async (req, res) => {
  try {
    queries.getQuestions(req.params.product_id)
      .then(response => res.status(200).send(response))
  } catch(err) {
    console.log('ERROR:', err);
  }
}) // gets qa for product

app.get('/qa/:question_id/answers', (req, res) => {
  const questionId = req.params.question_id;
  console.log(questionId);
  // do database stuff
  res.sendStatus(200);
}) // gets answers for single question

app.get('/products/:product_id', (req, res) => {
  const productId = req.params.product_id;
  // do database stuff
  res.sendStatus(200);
}) // gets product info

// POST

app.post('/qa/:product_id', async (req, res) => {
  try {
    await queries.addQuestion(req.params.product_id, req.body);
    res.sendStatus(201);
  } catch(err) {
    console.log('ERROR:', err);
  }
}) // adds question

  app.post('/qa/:question_id/answers', async (req, res) => {
    try {
      const questionId = req.params.question_id,
            body = req.body;

      await queries.addAnswer(questionId, body)
      res.sendStatus(201);
    } catch(err) {
      console.log('ERROR:', err);
    }
  }) // adds answer to question

  // PUT

  app.put('/qa/question/:question_id/helpful', async (req, res) => {
    try {
      const questionId = req.params.question_id;

      await queries.markQHelpful(questionId);
      res.sendStatus(204);
    } catch(err) {
      console.log('ERROR:', err)
    }
  }) // marks question as helpful

    {/*
app.put('/qa/question/:question_id/report', (req, res) => {
  const { question_id } = req.params;
  // do database stuff
  res.sendStatus(204);
}) // reports question

app.put('/qa/answer/:answer_id/helpful', (req, res) => {
  const query = { _id: req.params };

  const incAHelpful= await Product.findOneAndUpdate(
    query,
    { $inc:
      { helpfulness: 1 }
    },
    { new: true }
  );

  res.sendStatus(204);
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