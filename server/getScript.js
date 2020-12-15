import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  stages: [
    { duration: "30s", target: 50 },
    { duration: "1m", target: 100 },
    { duration: "30s", target: 25}
  ]
};

export default function () {
  const productId = Math.floor(Math.random() * 50);

  let res = http.get(`http://localhost:3003/qa/${productId}`);
  check(res, {'response code was 200': res => res.status == 200});
  sleep(1);
}