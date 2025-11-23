import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 200 },
    { duration: '2m', target: 500 },
    { duration: '2m', target: 1000 },
  ],
}

export default function () {
  const res = http.post('http://localhost:3000/checkout/crypto');

    check(res, {
    'status é 200 ou 201': (r) => r.status === 200 || r.status === 201,
    });
}