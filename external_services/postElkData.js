
const elastic = require('elasticsearch');
const lineReader = require('line-reader');
const indicies = {
  PERFORMANCE_TEST: 'performance_testing',
  API_TEST: 'api_testing',
  UI_TEST: 'ui_testing',
  DEV: 'dev'

};

const esClient = elastic.Client({
  host: 'http://127.0.0.1:9200'
});

async function postk6Data(filePath) {
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

async function postMochaData(index, resultspath = './../mochawesome-report/mochawesome_cypress.json') {
  const mocha_results = require (resultspath); 
  results = mocha_results['results'];
  if(await checkIndex(index))
  {
    console.error('INDEX NOT FOUND, USE ONE OF: ' + JSON.stringify(indicies));
    process.exit(1);
  }
  results.forEach(result => {
    result.suites[0].tests.forEach(testResult => {
      let date = new Date();
      testResult.executionDate = date.toISOString();
      esClient.index({
        index: index,
        body: testResult
      }).then(res => {
        console.log(res);
      })
        .catch(err => {
          console.log(err.body);
        });
    });
  });
  
}

module.exports = {
  postk6Data,
  postMochaData,
  indicies
};

