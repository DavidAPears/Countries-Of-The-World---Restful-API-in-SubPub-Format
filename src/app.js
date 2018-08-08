const Country = require('./models/country.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const country = new Country();
  country.getAll();
});
