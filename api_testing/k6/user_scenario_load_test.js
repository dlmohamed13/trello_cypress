import http from 'k6/http';
import { check, sleep, group } from 'k6';
let host = __ENV.MY_HOSTNAME || 'http://localhost:4000';
const SLEEP_DURATION = .50;
export default function () {
  let params = {
    headers: {
      'Accept': 'application/json, text/plain, */*'
    }
  };
  group('simple user journey', () => {
    // landing page request
    let landing_response = http.get(
      host,
      params,
    );
    check(landing_response, {
      'is status OK/200': (r) => r.status === 200,
    });
    sleep(SLEEP_DURATION);
    // Boards Request
    let get_boards_respons = http.get(
      host + '/api/boards',
      params,
    );
    check(get_boards_respons, {
      'is status OK/200': (r) => r.status === 200,
    });
    sleep(SLEEP_DURATION);
    // Create Boards Requests
    let body = {
      name: 'board_number' + __ITER + __VU
    };
    let add_boards_response = http.post(
      host + '/api/boards',
      body,
      params,
    );
    check(add_boards_response, {
      'is status CREATED/201': (r) => r.status === 201
    });
    sleep(SLEEP_DURATION);
    // Logout request
    let reset_response = http.post(
      host + '/api/reset',
      params,
    );
    sleep(SLEEP_DURATION);
  });
}