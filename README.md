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
