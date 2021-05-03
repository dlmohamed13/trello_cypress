import http from 'k6/http';

export default function () {
  var url = 'http://localhost:3000/boards';
  var payload = JSON.stringify({
    name: 'load board',
  });
  var params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  http.post(url, payload, params);
}