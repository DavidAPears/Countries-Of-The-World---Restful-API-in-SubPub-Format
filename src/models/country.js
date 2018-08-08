const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Country = function () {
  this.countryData = null
}

Country.prototype.getAll = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all')
  request.get((data) => {
    this.countryData = data;
    PubSub.publish('Country:all-countries-loaded', this.countryData)
  });
};

Country.prototype.bindEvents = function () {
    PubSub.subscribe('SelectView:change', (evt) =>{
      const selectedIndex = evt.detail;
      this.publishCountryDetail(selectedIndex);
      console.log(selectedIndex);
    })
};

Country.prototype.publishCountryDetail = function (countryIndex) {
  const selectedCountry = this.countryData[countryIndex];
  console.log(selectedCountry);
  PubSub.publish('Country:selected-country-ready', selectedCountry)
};


module.exports = Country
