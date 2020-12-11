const faker = require('faker');
const Schema = require('../models/Schema');

const getQuestions = async ( productId ) => {
  return Schema.Product.findOne({ product_id: productId });
}

const makeNewQuestion = ( data ) => {
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

const addQuestion = ( id, body ) => {
  const result = makeNewQuestion( body );
  const query = { product_id: id }

  return Schema.Product.findOneAndUpdate(
    query,
    { $push:
      { results: result }
    },
    { new: true }
  );
}

const makeNewAnswer = async ( data ) => {
  // do something
};

module.exports = {
  getQuestions, makeNewQuestion, addQuestion
};