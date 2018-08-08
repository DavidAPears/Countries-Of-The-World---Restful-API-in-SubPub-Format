const PubSub = require('../helpers/pub_sub.js');

const CountryInfoView = function(container) {
 this.container = container;
};

CountryInfoView.prototype.bindEvents = function() {
 PubSub.subscribe('Country:selected-country-ready', (evt) => {
   const countryObject = evt.detail;
   this.render(countryObject);
 });
};

CountryInfoView.prototype.render = function(country) {
 this.container.innerHTML = '';

 const heading = this.createHeading(country);
 const infoList = this.createInfoList(country);
 const img = this.createImage(country);
 const languages = this.createLanguageList(country.languages);

 this.container.appendChild(heading);
 this.container.appendChild(infoList);
 this.container.appendChild(img);
 this.container.appendChild(languages);
};

CountryInfoView.prototype.createHeading = function(country) {
 const heading = document.createElement('h2');
 heading.textContent = country.name;
 return heading;
};

CountryInfoView.prototype.createImage = function(country) {
 const img = document.createElement('img');
 img.classList.add('medium-image');
 img.src = country.flag;
 return img;
};

CountryInfoView.prototype.createInfoList = function(country) {
 const infoList = document.createElement('ul');

 const liRegion= this.createLi(`Region: ${country.region}`, infoList);

 return infoList;
};

CountryInfoView.prototype.createLi = function(textContent, ul) {
 const li = document.createElement('li');
 li.textContent = textContent;
 ul.appendChild(li);
};

CountryInfoView.prototype.createLanguageList = function (languages) {
 const list = document.createElement('ul');

 languages.forEach((language, index) => {
   const listItem = document.createElement('li');
   listItem.textContent = language.name;
   list.appendChild(listItem);
 });

 return list;
};

module.exports = CountryInfoView;
