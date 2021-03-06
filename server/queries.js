const faker = require('faker');
const Schema = require('../models/Schema');
const mongoose = require('mongoose');
const db = mongoose.connection;

const ID = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
}

const getQuestions = (productId) => {
  return Schema.Product.findOne({ product_id: productId });
}

const makeNewQuestion = (data) => {
  const questionData = {
    question_id: ID(),
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

  Schema.Product.findOne(query)
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
          [ '$results.question_id', id ]
      }
    }
  }

  const options = {
    $sort: {
      'results': -1
    }
  }

  return db.collection('products').aggregate([ pipeline, options ], { "allowDiskUse": true }).toArray();
}

const makeNewAnswer = (data)  => {
  const answerData = {
    id: ID(),
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
  const query = { 'results.question_id': questionId },
        answer = makeNewAnswer(body),
        search = await getIndex(questionId),
        index = search[0].results;

  console.log(index)

  Schema.Product.findOne(query)
    .exec()
    .then(product => {
      product.results[index].answers.push(answer);
      product.save();
      return;
    })
}

const markQHelpful = async (questionId) => {
  const query = { 'results.question_id': questionId },
        search = await getIndex(questionId),
        index = search[0].results;

  Schema.Product.findOne(query)
    .exec()
    .then(product => {
      product.results[index].question_helpfulness += 1;
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