const faker = require('faker');
const Schema = require('../models/Schema');
const mongoose = require('mongoose');
const db = mongoose.connection;

const getQuestions = (productId) => {
  return Schema.Product.findOne({ product_id: productId });
}

const makeNewQuestion = (data) => {
  const questionData = {
    question_id: faker.random.number(),
    question_body: data.body,
    asker_name: data.name,
    question_date: new Date().toISOString(),
    question_helpfulness: 0,
    reported: 0
  }

  const newQuestion = new Schema.Question(questionData);

  return newQuestion;
}

const addQuestion = (id, body) => {
  const query = { product_id: id },
        question = makeNewQuestion(body)

  return Schema.Product.findOne(query)
    .exec()
    .then(product => {
      product.results.push(question);
      product.save();
      return;
    });
}

const getIndex = (id) => {
  const pipeline = {
    '$project': {
      'results': {
        '$indexOfArray':
          [ '$results.question_id', Number(id) ]
      }
    }
  }

  const options = {
    $sort: {
      'results': -1
    }
  }

  return db.collection('products').aggregate([ pipeline, options ]).toArray();
}

const makeNewAnswer = (data)  => {
  const answerData = {
    id: faker.random.number(),
    body: data.body,
    date: new Date().toISOString(),
    answerer_name: data.name,
    helpfulness: 0,
    reported: 0,
    photos: data.photos
  }

  const newAnswer = new Schema.Answer(answerData);

  return newAnswer;
};

const addAnswer = async (questionId, body) => {
  const query = { 'results.question_id': Number(questionId) },
        answer = makeNewAnswer(body),
        search = await getIndex(questionId),
        index = search[0].results;

  Schema.Product.findOne(query)
    .exec()
    .then(product => {
      product.results[index].answers.push(answer);
      product.save();
      return;
    })
}

const markQHelpful = async (questionId) => {
  const query = { 'results.question_id': Number(questionId) },
        search = await getIndex(questionId),
        index = search[0].results;

  Schema.Product.findOne(query)
    .exec()
    .then(product => {
      product.results[index].question_helpfulness = product.results[index].question_helpfulness + 1;
      product.save();
      return;
    })
}

const reportQ = async () => {
  // module does not include this functionality
}

const markAHelpful = async (questionId) => {
  // do something
}

const reportA = async (questionId) => {
  // do something
}

module.exports = {
  getQuestions, makeNewQuestion, addQuestion, getIndex, makeNewAnswer, addAnswer, markQHelpful, reportQ
};