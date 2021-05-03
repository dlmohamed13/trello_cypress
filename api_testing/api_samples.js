
//ADD BOARD 
fetch('http://localhost:3000/api/boards', {
  'headers': {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.9',
    'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRsbW9oYW1lZDA3QGdtYWlsLmNvbSIsImlhdCI6MTYxOTg4NDk0NCwiZXhwIjoxNjE5ODg4NTQ0LCJzdWIiOiIxIn0.Fjyn9-Q2iFvJm8_TXP0mcATtOWFmebczM0pSi3oIA80',
    'content-type': 'application/json;charset=UTF-8',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
    'sec-ch-ua-mobile': '?0',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'cookie': 'Idea-9f639314=87aeec09-7791-49e7-bb8d-ba6059c44acd; trello_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRsbW9oYW1lZDA3QGdtYWlsLmNvbSIsImlhdCI6MTYxOTg4NDk0NCwiZXhwIjoxNjE5ODg4NTQ0LCJzdWIiOiIxIn0.Fjyn9-Q2iFvJm8_TXP0mcATtOWFmebczM0pSi3oIA80; io=EjwW8KG_WdARjpTEAA0z'
  },
  'referrer': 'http://localhost:3000/',
  'referrerPolicy': 'strict-origin-when-cross-origin',
  'body': '{"name":"New Board "}',
  'method': 'POST',
  'mode': 'cors'
});
//GET SPECIFIC BOARD
fetch('http://localhost:3000/api/boards/79800942081', {
  'headers': {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.9',
    'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRsbW9oYW1lZDA3QGdtYWlsLmNvbSIsImlhdCI6MTYxOTg4NDk0NCwiZXhwIjoxNjE5ODg4NTQ0LCJzdWIiOiIxIn0.Fjyn9-Q2iFvJm8_TXP0mcATtOWFmebczM0pSi3oIA80',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
    'sec-ch-ua-mobile': '?0',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'cookie': 'Idea-9f639314=87aeec09-7791-49e7-bb8d-ba6059c44acd; trello_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRsbW9oYW1lZDA3QGdtYWlsLmNvbSIsImlhdCI6MTYxOTg4NDk0NCwiZXhwIjoxNjE5ODg4NTQ0LCJzdWIiOiIxIn0.Fjyn9-Q2iFvJm8_TXP0mcATtOWFmebczM0pSi3oIA80; io=EjwW8KG_WdARjpTEAA0z'
  },
  'referrer': 'http://localhost:3000/board/79800942081',
  'referrerPolicy': 'strict-origin-when-cross-origin',
  'body': null,
  'method': 'GET',
  'mode': 'cors'
});

//UPDATE BOARD 
fetch('http://localhost:3000/api/boards/12145775269', {
  'headers': {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.9',
    'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzRAZ21haWwuY29tIiwiaWF0IjoxNjE5ODg1MzkzLCJleHAiOjE2MTk4ODg5OTMsInN1YiI6IjMifQ.-V9M5oNYQHJO9rm4nwdD3UbZ-QPgC4IzS1-gOcfZUSA',
    'content-type': 'application/json;charset=UTF-8',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
    'sec-ch-ua-mobile': '?0',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'cookie': 'Idea-9f639314=87aeec09-7791-49e7-bb8d-ba6059c44acd; trello_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzRAZ21haWwuY29tIiwiaWF0IjoxNjE5ODg1MzkzLCJleHAiOjE2MTk4ODg5OTMsInN1YiI6IjMifQ.-V9M5oNYQHJO9rm4nwdD3UbZ-QPgC4IzS1-gOcfZUSA; io=Ydr2R0NXnpN2ISmfAA0_'
  },
  'referrer': 'http://localhost:3000/board/12145775269',
  'referrerPolicy': 'strict-origin-when-cross-origin',
  'body': '{"name":"Update Board Name"}',
  'method': 'PATCH',
  'mode': 'cors'
});
// Tests 
//* Create Board, Edit Board, Delete Board
//ADD LIST 
fetch('http://localhost:3000/api/lists', {
  'headers': {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.9',
    'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRsbW9oYW1lZDA3QGdtYWlsLmNvbSIsImlhdCI6MTYxOTg4NDk0NCwiZXhwIjoxNjE5ODg4NTQ0LCJzdWIiOiIxIn0.Fjyn9-Q2iFvJm8_TXP0mcATtOWFmebczM0pSi3oIA80',
    'content-type': 'application/json;charset=UTF-8',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
    'sec-ch-ua-mobile': '?0',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'cookie': 'Idea-9f639314=87aeec09-7791-49e7-bb8d-ba6059c44acd; trello_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRsbW9oYW1lZDA3QGdtYWlsLmNvbSIsImlhdCI6MTYxOTg4NDk0NCwiZXhwIjoxNjE5ODg4NTQ0LCJzdWIiOiIxIn0.Fjyn9-Q2iFvJm8_TXP0mcATtOWFmebczM0pSi3oIA80; io=EjwW8KG_WdARjpTEAA0z'
  },
  'referrer': 'http://localhost:3000/board/79800942081',
  'referrerPolicy': 'strict-origin-when-cross-origin',
  'body': '{"boardId":79800942081,"title":"New List "}',
  'method': 'POST',
  'mode': 'cors'
});
//ADD TASK
fetch('http://localhost:3000/api/tasks', {
  'headers': {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.9',
    'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRsbW9oYW1lZDA3QGdtYWlsLmNvbSIsImlhdCI6MTYxOTg4NDk0NCwiZXhwIjoxNjE5ODg4NTQ0LCJzdWIiOiIxIn0.Fjyn9-Q2iFvJm8_TXP0mcATtOWFmebczM0pSi3oIA80',
    'content-type': 'application/json;charset=UTF-8',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
    'sec-ch-ua-mobile': '?0',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'cookie': 'Idea-9f639314=87aeec09-7791-49e7-bb8d-ba6059c44acd; trello_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRsbW9oYW1lZDA3QGdtYWlsLmNvbSIsImlhdCI6MTYxOTg4NDk0NCwiZXhwIjoxNjE5ODg4NTQ0LCJzdWIiOiIxIn0.Fjyn9-Q2iFvJm8_TXP0mcATtOWFmebczM0pSi3oIA80; io=EjwW8KG_WdARjpTEAA0z'
  },
  'referrer': 'http://localhost:3000/board/79800942081',
  'referrerPolicy': 'strict-origin-when-cross-origin',
  'body': '{"boardId":79800942081,"description":"","completed":false,"listId":84802464344,"title":"New Task 2 "}',
  'method': 'POST',
  'mode': 'cors'
});
//Add Task Properties
fetch('http://localhost:3000/api/tasks/23307283956', {
  'headers': {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.9',
    'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRsbW9oYW1lZDA3QGdtYWlsLmNvbSIsImlhdCI6MTYxOTg4NDk0NCwiZXhwIjoxNjE5ODg4NTQ0LCJzdWIiOiIxIn0.Fjyn9-Q2iFvJm8_TXP0mcATtOWFmebczM0pSi3oIA80',
    'content-type': 'application/json;charset=UTF-8',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
    'sec-ch-ua-mobile': '?0',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'cookie': 'Idea-9f639314=87aeec09-7791-49e7-bb8d-ba6059c44acd; trello_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRsbW9oYW1lZDA3QGdtYWlsLmNvbSIsImlhdCI6MTYxOTg4NDk0NCwiZXhwIjoxNjE5ODg4NTQ0LCJzdWIiOiIxIn0.Fjyn9-Q2iFvJm8_TXP0mcATtOWFmebczM0pSi3oIA80; io=EjwW8KG_WdARjpTEAA0z'
  },
  'referrer': 'http://localhost:3000/board/79800942081',
  'referrerPolicy': 'strict-origin-when-cross-origin',
  'body': '{"description":"Task Description"}',
  'method': 'PATCH',
  'mode': 'cors'
});
//DELETE LIST 
fetch('http://localhost:3000/api/lists/41438957432', {
  'headers': {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.9',
    'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzRAZ21haWwuY29tIiwiaWF0IjoxNjE5ODg1MzkzLCJleHAiOjE2MTk4ODg5OTMsInN1YiI6IjMifQ.-V9M5oNYQHJO9rm4nwdD3UbZ-QPgC4IzS1-gOcfZUSA',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
    'sec-ch-ua-mobile': '?0',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'cookie': 'Idea-9f639314=87aeec09-7791-49e7-bb8d-ba6059c44acd; trello_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzRAZ21haWwuY29tIiwiaWF0IjoxNjE5ODg1MzkzLCJleHAiOjE2MTk4ODg5OTMsInN1YiI6IjMifQ.-V9M5oNYQHJO9rm4nwdD3UbZ-QPgC4IzS1-gOcfZUSA; io=Ydr2R0NXnpN2ISmfAA0_'
  },
  'referrer': 'http://localhost:3000/board/12145775269',
  'referrerPolicy': 'strict-origin-when-cross-origin',
  'body': null,
  'method': 'DELETE',
  'mode': 'cors'
});
//DELETE TASK 
fetch('http://localhost:3000/api/tasks/66399248715', {
  'headers': {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.9',
    'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzRAZ21haWwuY29tIiwiaWF0IjoxNjE5ODg1MzkzLCJleHAiOjE2MTk4ODg5OTMsInN1YiI6IjMifQ.-V9M5oNYQHJO9rm4nwdD3UbZ-QPgC4IzS1-gOcfZUSA',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
    'sec-ch-ua-mobile': '?0',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'cookie': 'Idea-9f639314=87aeec09-7791-49e7-bb8d-ba6059c44acd; trello_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzRAZ21haWwuY29tIiwiaWF0IjoxNjE5ODg1MzkzLCJleHAiOjE2MTk4ODg5OTMsInN1YiI6IjMifQ.-V9M5oNYQHJO9rm4nwdD3UbZ-QPgC4IzS1-gOcfZUSA; io=Ydr2R0NXnpN2ISmfAA0_'
  },
  'referrer': 'http://localhost:3000/board/12145775269',
  'referrerPolicy': 'strict-origin-when-cross-origin',
  'body': null,
  'method': 'DELETE',
  'mode': 'cors'
});