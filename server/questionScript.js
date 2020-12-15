import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  stages: [
    { duration: "30s", target: 5 },
    { duration: "1m", target: 10 },
    { duration: "30s", target: 5 }
  ]
};

export default function () {
  const productId = Math.floor(Math.random() * 50);

  const fakeBody = {
    body: 'this is a K6 load test. BE ALAAARRRMMMED',
    name: 'ChrisWilson477'
  };

  let res = http.post(`http://localhost:3003/qa/${productId}`, fakeBody);
  check(res, {'response code was 201': res => res.status == 201});
  sleep(1);
}