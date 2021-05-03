A simple trello clone application built on vue and json-server. The point of this app is to be super easy to install and run, so that you don’t need to set up complicated database and have several scripts running in order to open app. Just install, write npm start and you are good to go.
The trello app I cloned from (https://github.com/filiphric/trelloapp)
To start the trello application: 
`npm install`
`npm start`

There are some external integrations tied into my framework. If these services aren't up local to the test host at their default ports the framework will still function but you will see some errors/failures related to  x can't be reached/is unavailable 

Builtin External Integrations:
- Elasticsearch - For UI/API Test Data/Results 
- Influxdb - For performance/k6 data/results 
- Mailhog/SMTP - SMTP Endpoint for email notification validation

Other Services:
- Kibana 
- Grafana 

Execution Instructions 
Bring Up Local Services by Running 
 - docker-compose up -d 
In Project Root Directory of the project 
 - npm:run all_test
To Execute Load Tests
 - Install K6 if running tests and trello locally (to avoid local docker network/macos quirks)
 - https://k6.io/docs/getting-started/installation/
 - k6 run --vus ${number of users} --iterations ${number of iterations}  api_testing/k6/user_scenario_load_test.js --out influxdb=http://localhost:8086/myk6db
 or 
 - docker run --network="host" -i loadimpact/k6 run --vus ${number of users} --iterations ${number of iterations} -<api_testing/k6/user_scenario_load_test.js
