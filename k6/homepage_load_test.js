import http from 'k6/http';

let params = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export default function() {
  let response = http.get('http://localhost:3000', params);
  console.log(JSON.stringify(response.status));
}