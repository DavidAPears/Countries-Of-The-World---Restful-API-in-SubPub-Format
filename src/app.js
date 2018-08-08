const Country = require('./models/country.js');
const SelectView = require('./views/country_select_view.js')
const CountryInfoView = require('./views/country_info_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const country = new Country();
  country.getAll();
  country.bindEvents();

  const selectElement = document.querySelector('#countries');
  const countryDropdown = new SelectView(selectElement);
  countryDropdown.bindEvents();

  const detailsContainer = document.querySelector('#country');
  const countryDetailView = new CountryInfoView(detailsContainer);
  countryDetailView.bindEvents();

});
