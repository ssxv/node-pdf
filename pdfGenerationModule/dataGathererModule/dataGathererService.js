var data = require('./data');
var constants = require('./../constants');

function dataGathererService() {
  return new Promise(function(resolve, reject) {
    var randomData = getRandomData();
    var dataForPDF = prepareDataForPDF(randomData);
    resolve(dataForPDF);
  });
}

function getRandomData() {
  var index = Math.floor((Math.random() * data.length));
  return JSON.parse(JSON.stringify(data[index]));
}

function prepareDataForPDF(countryData) {
  var dataForPDF = {};

  dataForPDF.country = countryData.country;
  dataForPDF.flag = constants.IMAGE_DIR_URL + countryData.flag;
  dataForPDF.profile = constants.IMAGE_DIR_URL + countryData.profile;
  dataForPDF.year = countryData.year;
  dataForPDF.population = countryData.population;
  dataForPDF.unemployment = countryData.unemployment;
  dataForPDF.wage = countryData.wage;
  dataForPDF.retirement = countryData.retirement;
  dataForPDF.charts = countryData.charts;
  dataForPDF.charts[0].chart = constants.IMAGE_DIR_URL + countryData.charts[0].chart;

  return dataForPDF;
}

module.exports = dataGathererService;
