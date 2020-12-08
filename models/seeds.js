const mongoose = require('mongoose');
const Question = require('./Question')

mongoose.connect('mongodb://localhost:27017/sdcDB_test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connection open for sdcDB_test...'))
  .catch(err => console.log('ERROR:', err));

const q = new Question({
  "product_id": "87",
  "results": [{
    "question_id": 26,
    "question_body": "how does it fit the men",
    "question_date": "2018-08-18T00:00:00.000Z",
    "asker_name": "johndoe",
    "question_helpfulness": 0,
    "reported": 0,
    "answers": {
      84: {
        "body": 'for the men large it bag',
        "answerer_name": 'jimbuck',
        "date": '2020-07-02T00:00:00.000Z',
        "helpfulness": 85,
        "id": 84
      }
    }
  }]
})

q.save().then(r => console.log(r));

// const seedQuestions = [
//   {
//   "question_id": 27,
//   "question_body": "how does it fit the women",
//   "question_date": "2018-08-19T00:00:00.000Z",
//   "asker_name": "janedoe",
//   "question_helpfulness": 0,
//   "reported": 0,
//   "answers": {}
//   },
//   {
//   "question_id": 28,
//   "question_body": "how does it fit the children",
//   "question_date": "2018-08-19T00:01:00.000Z",
//   "asker_name": "jimmydoe",
//   "question_helpfulness": 0,
//   "reported": 0,
//   "answers": {}
//   },
//   {
//   "question_id": 29,
//   "question_body": "how does it fit the doggos",
//   "question_date": "2018-08-19T00:02:00.000Z",
//   "asker_name": "spotdoe",
//   "question_helpfulness": 0,
//   "reported": 0,
//   "answers": {}
//   },
//   {
//   "question_id": 30,
//   "question_body": "how does it fit the cattos",
//   "question_date": "2018-08-19T00:03:00.000Z",
//   "asker_name": "stripesdoe",
//   "question_helpfulness": 0,
//   "reported": 0,
//   "answers": {}
//   }
// ]

// Question.insertMany(seedQuestions)
//   .then(r => console.log(r))
//   .catch(err => console.log(err))