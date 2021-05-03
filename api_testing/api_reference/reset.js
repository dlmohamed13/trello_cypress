var request = require('request');
var headers = {'Accept': 'application/json, text/plain, */*'};
var resetAPI = {};
resetAPI.resetAll = {
  endpoint: '/reset',
  options: {
    method: 'POST',
    headers: headers
  }
};
resetAPI.endresetBoards = {
  endpoint: '/boards',
  options: {
    method: 'DELETE',
    headers: headers
  }
};
resetAPI.resetLists = {
  endpoint: '/lists',
  options: {
    method: 'DELETE',
    headers: headers
  }
};
resetAPI.resetTasks = {
  endpoint: 'api/tasks',
  options: {
    method: 'DELETE',
    headers: headers
  }
};

resetAPI.resetUsers = {
  endpoint: '/Users',
  options: {
    method: 'DELETE',
    headers: headers
  }
};
function callback(error, response, body) {
  console.log('EVALUATING RESPONSE');
  if (!error &&  200 <= response.statusCode <= 299 ) {
    console.log('RESPONSE SUCCESSFULL');
    console.log(body);
  }
  else
  {
    console.log('RESPONSE NOT SUCCESSFUL, EVALUATING');
    console.log(JSON.stringify(response));
    if(error)
    {
      console.log(error);
    }
    response.end;
  }
}

resetAPI.executeReset = async function(endpoint, options){
  var options = {
    url: `http://localhost:3000/api${endpoint}`,
    method: options.method,
    headers: options.headers
  };
  await request(options, callback).end;
  console.log(`Reset Executed at ${endpoint} with options ${JSON.stringify(options)}`);
};
var options2 = {
  url: 'http://localhost:3000/api/reset',
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*'
  }
};

resetAPI.executeReset(resetAPI.resetAll.endpoint, resetAPI.resetAll.options);

let resetState = async function () {
  //await request(options2, callback).end;
};

exports.resetState = resetState;
exports.resetAPI = resetAPI;