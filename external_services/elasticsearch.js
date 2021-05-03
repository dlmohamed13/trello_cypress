
const elastic = require('elasticsearch');
const lineReader = require('line-reader');
const mocha_results = require ('./../mochawesome-report/mochawesome.json');
const fs = require('fs');
const { Console } = require('console');
const indicies = {
  PERFORMANCE_TEST: 'performance_testing',
  API_TEST: 'api_testing',
  UI_TEST: 'ui_testing',
  DEV: 'dev'

};

const esClient = elastic.Client({
  host: 'http://127.0.0.1:9200'
});

function postk6Data(filePath) {
  lineReader.eachLine(filePath, function(line) {
    esClient.index({
      index: indicies.PERFORMANCE_TEST,
      body: line
    })
      .catch(err => {
        console.log(err.body);
      });
  });
}

async function checkIndex(index){
  indexFound = false; 
  for (let obj in indicies){
    if (obj == index)
    {
      indexFound = true; 
      break; 
    }
  }
  return indexFound;
}

async function postMochaData(index) {
  testResults = mocha_results['results'][0]['suites'][0]['tests'];
  if(await checkIndex(index))
  {
    console.error('INDEX NOT FOUND, USE ONE OF: ' + JSON.stringify(indicies));
    process.exit(1);
  }
  testResults.forEach(result => {
    let date = new Date();
    result.executionDate = date.toISOString();
    esClient.index({
      index: index,
      body: result
    })
      .catch(err => {
        console.log(err.body);
      });
      
  });
 
}

postMochaData(indicies.DEV);
module.exports = {
  postk6Data,
  postMochaData,
  indicies
};

