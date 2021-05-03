import http from 'k6/http';
let host = __ENV.MY_HOSTNAME || 'http://localhost:3000';
let params = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export default function() {
  let response = http.get(host, params);
  console.log(JSON.stringify(response.status));
}