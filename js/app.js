'use strict';

// array for business hours
var businessHours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// global variables
var storeTable = document.getElementById('stores');
var storeForm = document.getElementById('store-form');

// // Location        Mix      Max     avgSale
// // 1st and Pike     23      65      6.3
// // SeaTac Airport   3       24      1.2
// // Seattle Center   11      38      3.7
// // Capitol Hill     20      38      2.3
// // Alki             2       16      4.6

//constructor
function CookieStore(locationName, minCustHour, maxCustHour, avgCookieHour){
  this.locationName = locationName;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookieHour = avgCookieHour;
  this.customersEveryHour = [];
  this.cookiesPerHour = [];
  this.totalDayCookies = 0;
  CookieStore.allStores.push(this);
}

CookieStore.allStores = [];

//header row loop
function makeHeaderRow(){
  var trEl = document.createElement('tr');
  for(var i = 0; i < businessHours.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = businessHours[i];
    trEl.appendChild(thEl);
    storeTable.appendChild(trEl);
  }
}

// random number
CookieStore.prototype.calcCustomersEveryHour = function(){
  for(var i in businessHours){
    var randomCust = random(this.minCustHour, this.maxCustHour);
    this.customersEveryHour.push(randomCust);
  }
};

CookieStore.prototype.calcCookiesPerHour = function(){
  this.calcCustomersEveryHour();
  for(var i in businessHours){
    var perHour = Math.floor(this.customersEveryHour[i] * this.avgCookieHour);
    this.cookiesPerHour.push(perHour);
    this.totalDayCookies += perHour;
  }
};

CookieStore.prototype.render = function(){
  this.calcCookiesPerHour();
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.locationName;
  trEl.appendChild(tdEl);

  for(var i in businessHours) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }
  var thEl = document.createElement('th');
  thEl.textContent = this.cookiesPerHour[i];
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
};

function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// make footer row
function makeFooterRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);

  var hourlyTotal = 0;
  var totalOfAll = 0;

  for(var i in businessHours){
    hourlyTotal = 0;
    for(var j in CookieStore.allStores){
      hourlyTotal += CookieStore.allStores[j].cookiesPerHour[i];
    }
    thEl = document.createElement('th');
    thEl.textContent = hourlyTotal;
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = totalOfAll;
  trEl.appendChild(thEl);
  
  storeTable.appendChild(trEl);
}

// render all stores function
function renderAllStores() {
  for(var i in CookieStore.allStores){
    CookieStore.allStores[i].render();
  }
}

// add new store function
function addNewStore(){
  event.preventDefault();
  console.log(event.target.name.value);
  var newName = event.target.name.value;
  var newMinCust = event.target.minCust.value;
  var newMaxCust = event.target.maxCust.value;
  var newAvgSale = event.target.avgSale.value;

  new CookieStore(newName, newMinCust, newMaxCust, newAvgSale);

  storeTable.innerHTML = '';
  makeHeaderRow();
  renderAllStores();
  makeFooterRow();
}

// // var storeForm = document.getElementById('store-form');
storeForm.addEventListener('submit', addNewStore);

// create store instances
new CookieStore('1st and Pike', '23', '65', '6.3');
new CookieStore('SeaTac', '3', '24', '1.2');
new CookieStore('Seattle Center', '11', '38', '3.7');
new CookieStore('Capitol Hill', '20', '38', '2.3');
new CookieStore('Alki', '2', '16', '4.6');

// function call
makeHeaderRow();
renderAllStores();
makeFooterRow();



