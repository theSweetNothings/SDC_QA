const faker = require('faker');
const fs = require('fs');

const writeQuestions = fs.createWriteStream('questions.json');

const writeOneMillionQuestions = (writer, encoding, cb) => {
  let i = 1000000;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      console.log(i);
      i -= 1;
      id += 1;

      // generate photo array with 0-5 photos

      const photoArrayMaker = () => {
        let photos = [];
        let randomNum = Math.floor(Math.random() * Math.floor(5));

        for (let i = 0; i < randomNum; i++) {
          let photoObj = {
            url: faker.image.image()
          }
          photos.push(photoObj);
        };

        return photos;
      };

      // generate answers array with 0-5 answers

      const answerArrayMaker = () => {
        let answers = [];
        let randomNum = Math.floor(Math.random() * Math.floor(5));

        for (let i = 0; i < randomNum; i++) {
          let answerObj = {
            id: faker.random.number(),
            body: faker.lorem.sentence(),
            date: faker.date.between('2020-09-01', '2020-12-05').toISOString(),
            answerer_name: faker.internet.userName(),
            helpfulness: Math.floor(Math.random() * (150 - 0) + 0),
            photos: photoArrayMaker()
          };

          answers.push(answerObj);
        };

        return answers;
      };

      // generate questions array with 1-5 questions

      const questionArrayMaker = () => {
        let questions = []
        let randomNum = Math.floor(Math.random() * (5 - 1) + 1);

        for (let i = 0; i < randomNum; i++) {
          let questionObj = {
            question_id: faker.random.number(),
            question_body: faker.lorem.sentence(),
            question_date: faker.date.between('2020-09-01', '2020-12-05'),
            asker_name: faker.internet.userName(),
            question_helpfulness: Math.floor(Math.random() * (100 - 0) + 0),
            answers: answerArrayMaker()
          };
          questions.push(questionObj);
        }

        return questions;
      }

      const productMaker = () => {
        let product = {
          product_id: id,
          results: questionArrayMaker()
        }

        return product;
      }

      const data = JSON.stringify(productMaker());

      if (i === 0) {
        writer.write(data, encoding, cb);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeOneMillionQuestions(writeQuestions, 'utf-8', () => {writeQuestions.end()});