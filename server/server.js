const express = require('express');
const app = express();
const PORT = 3003;
const path = require('path');
const compression = require('compression');
const cors = require('cors');
const mongoose = require('mongoose');
const queries = require('./queries');
const Schema = require('../models/Schema');

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

const connection = mongoose.connection;

console.log(queries)
console.log(Schema)
/* SDC Server Routes */

// GET

app.get('/qa/:product_id', async (req, res) => {
  try {
    queries.getQuestions( req.params.product_id )
      .then(response => res.status(200).send(response))
  } catch(err) {
    console.log('ERROR:', err);
  }
}) // gets qa for product

app.get('/qa/:question_id/answers', (req, res) => {
  const questionId = req.params;
  console.log(questionId);
  // do database stuff
  res.sendStatus(200);
}) // gets answers for single question

app.get('/products/:product_id', (req, res) => {
  const productId = req.params;
  // do database stuff
  res.sendStatus(200);
}) // gets product info

// POST

app.post('/qa/:product_id', async ( req, res ) => {
  try {
    queries.addQuestion( req.params.product_id, req.body )
      .then( response => res.sendStatus(201) );
  } catch( err ) {
    console.log('ERROR:', err);
  }
}) // adds question

  app.post('/qa/:question_id/answers', async (req, res) => {
    try {

      const questionId = req.params.question_id;

      const query = { 'results.question_id': req.params.question_id }
      const answerData = {
        id: faker.random.number(),
        body: req.body.body,
        date: new Date().toISOString(),
        answerer_name: req.body.name,
        helpfulness: 0,
        reported: 0,
        photos: req.body.photos
      }

      const newAnswer = new Schema.Answer(answerData);
      // console.log(query, newAnswer);

      // store result of $indexOfArray in questionIdx
      // call Product.findOneAndUpdate where { 'results.question_id': question_id }, then $push answer to results[questionIdx].answers

      // connection.find({
      //   $indexOfArray: [
      //     results.question_id,
      //     questionId
      //   ]
      // })

      // const result = await Schema.Product.findOneAndUpdate(
      //   query,
      //   { $push:
      //     // get index of individual question that matches question_id
      //     { results.req.params.question_id.answers: newAnswer }
      //   },
      //   { new: true }
      // )

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