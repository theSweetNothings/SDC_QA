const mongoose = require('mongoose');
const Product = require('./Product');
const Question = require('./Question');
const Answer = require('./Answer');


mongoose.connect('mongodb://localhost:27017/sdcDB_test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connection open for sdcDB_test...'))
  .catch(err => console.log('ERROR:', err));

const p = new Product({
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

p.save().then(r => console.log(r));

const seedQuestions = [
  {
    "product_id": "88",
    "results": [
      {
        "question_id": 27,
        "question_body": "how does it fit the women",
        "question_date": "2018-08-19T00:00:00.000Z",
        "asker_name": "janedoe",
        "question_helpfulness": 0,
        "reported": 0,
        "answers": {
          85: {
            "body": 'for the women small it cinch',
            "answerer_name": 'janebambi',
            "date": '2020-07-02T00:00:00.000Z',
            "helpfulness": 80,
            "id": 85,
            "photos": []
          }
        }
      },
      {
        "question_id": 28,
        "question_body": "how does it fit the children",
        "question_date": "2018-08-19T00:01:00.000Z",
        "asker_name": "jimmydoe",
        "question_helpfulness": 0,
        "reported": 0,
        "answers": {
          86: {
            "body": 'children should not wear this clothes',
            "answerer_name": 'jamespoint',
            "date": '2020-07-02T00:00:00.000Z',
            "helpfulness": 78,
            "id": 86,
            "photos": []
          }
        }
      },
      {
        "question_id": 29,
        "question_body": "how does it fit the doggos",
        "question_date": "2018-08-19T00:02:00.000Z",
        "asker_name": "spotdoe",
        "question_helpfulness": 0,
        "reported": 0,
        "answers": {
          87: {
            "body": 'only best boi get this',
            "answerer_name": 'lassie',
            "date": '2020-07-02T00:00:00.000Z',
            "helpfulness": 77,
            "id": 87,
            "photos": []
          }
        }
      },
      {
        "question_id": 30,
        "question_body": "how does it fit the cattos",
        "question_date": "2018-08-19T00:03:00.000Z",
        "asker_name": "stripesdoe",
        "question_helpfulness": 0,
        "reported": 0,
        "answers": {
          88: {
            "body": 'reject by catto',
            "answerer_name": 'johnMADDEN',
            "date": '2020-07-02T00:00:00.000Z',
            "helpfulness": 99,
            "id": 88,
            "photos": []
          }
        }
      }
    ]
  }
]

Product.insertMany(seedQuestions)
  .then(r => console.log(r))
  .catch(err => console.log(err))