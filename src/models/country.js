const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Country = function () {
  this.countryData = null
}

Country.prototype.getAll = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all')
  request.get((data) => {
    this.countryData = data.name;
    PubSub.publish('Country:all-countries-loaded', this.countryData)
  });
};


module.exports = Country
