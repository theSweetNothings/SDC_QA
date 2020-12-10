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

mongoose.connect('mongodb://localhost:27017/sdcDB_test2', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connection open for sdcDB_test2...'))
  .catch(err => console.log('ERROR:', err));

// TODO: import queries

const Schema = require('../models/Schema');
console.log(Schema.Question)

/* SDC Server Routes */

// GET
app.get('/qa/:product_id', async (req, res) => {
  try {
    const productId = req.params.product_id;
    const questions = await Schema.Product.findOne({ product_id: productId }).lean();
    res.status(200).send(questions);
  } catch(err) {
    console.log('ERROR:', err);
  }
}) // gets qa for product

app.get('/qa/:question_id/answers', (req, res) => {
  const questionId = req.params;
  console.log(questionId);
  // do database stuff
  // res.sendStatus(200);
}) // gets answers for single question

app.get('/products/:product_id', (req, res) => {
  const { productId } = req.params;
  // do database stuff
  res.sendStatus(200);
}) // gets product info

// POST

app.post('/qa/:product_id', async (req, res) => {
  try {
    const query = { product_id: req.params.product_id};
    const questionData = {
      question_body: req.body.body,
      asker_name: req.body.name,
      question_date: new Date().toISOString(),
      question_helpfulness: 0,
      reported: 0
    }

    const newQuestion = new Schema.Question(questionData);

    const result = await Schema.Product.findOneAndUpdate(
      query,
      { $push:
        { results: newQuestion }
      },
      { new: true }
      )

      res.sendStatus(201);
    } catch(err) {
      console.log('ERROR:', err);
    }
  }) // adds question

  app.post('/qa/:question_id/answers', async (req, res) => {
    try {
      const query = { _id: req.params.question_id }
      console.log(query)
      const answerData = {
        body: req.body.body,
        date: new Date().toISOString(),
        answerer_name: req.body.name,
        helpfulness: 0,
        reported: 0,
        photos: req.body.photos
      }

      const newAnswer = new Schema.Answer(answerData);
      console.log(newAnswer);

      const result = Schema.Question.findOneAndUpdate(
        query,
        { $push:
          {answers: newAnswer}
        },
        { new: true }
      )

      res.sendStatus(201);
    } catch(err) {
      console.log('ERROR:', err);
    }
  }) // adds answer to question
  {/*

// PUT

app.put('/qa/question/:question_id/helpful', (req, res) => {
  try {
    const query = { _id: req.params };

    const incQHelpful = await Schema.Question.findOneAndUpdate(
      query,
      { $inc:
        { question_helpfulness: 1 }
      },
      { new: true }
      );

      res.sendStatus(204);
  } catch(err) {
    console.log('ERROR:', err)
  }
}) // marks question as helpful

app.put('/qa/question/:question_id/report', (req, res) => {
  const { question_id } = req.params;
  // do database stuff
  res.sendStatus(204);
}) // reports question

app.put('/qa/answer/:answer_id/helpful', (req, res) => {
  const query = { _id: req.params };

  const incQHelpful = await Product.findOneAndUpdate(
    query,
    { $inc:
      { question_helpfulness: 1 }
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