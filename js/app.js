'use strict';

// global variables
var storeTable = document.getElementById('stores');
var storeForm = document.getElementById('store-form');
storeForm.addEventListener('submit', addNewStore);
Store.allStores = [];

// array for business hours
var businessHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// Location	       Max      Min     avgSale
// 1st and Pike	    65	    23      6.3
// SeaTac Airport	  24	    3       1.2
// Seattle Center		38	    11      3.7
// Capitol Hill	  	38	    20      2.3
// Alki	            16	    2       4.6

// header row loop
function makeHeaderRow(){
  var trEl = document.createElement('tr');
  for(var i = 0; i < businessHours.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = businessHours[i];
    trEl.appendChild(thEl);
    storeTable.appendChild(trEl);
  }
}
// store constructor
function Store(name, minCust, maxCust, avgSale){
  this.locationName = name;
  this.minCus = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerHour - avgSale;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalDayCookies = 0;
  Store.allStores.push(this);

}
// loop for store
Store.prototype.customersPerHour = function(){
  this.customersPerHour();
  for(var i in businessHours){
    var oneHour = Math.floor(this.customersPerHour[i] * this.avgSale);
    this.cookiesPerHour.push(oneHour);
    this.totalDayCookies += oneHour;
  }
};

// render all stores function
function renderAllStores() {
  for(var i in allStores){
    allStores[i].render();
  }
}
// random num function
function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// render function loop
Store.prototype.render = function(){
  this.cookiesPerHour();

  var trEL = document.createElement('tr');
  var tdEL = document.createElement('td');
  tdEL.textContent = this.locationName;
  trEL.appendChild(tdEL);

  for(var i in businessHours) {
    tdEL = document.createElement('td');
    tdEL.textContent = this.cookiesPerHour[i];
    trEL.appendChild(tdEL);
  }
  var thEl = document.createElement('th');
  thEl.textContent = this.totalDayCookies;
  trEL.appendChild(thEl);
  storeTable.appendChild(trEL);
};

//make footer
function makeFooterRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);

  for(var i in businessHours){
    var hourlyTotal = 0;
    for(var j in Store.allStores) {
      hourlyTotal += Store.allStores[j].cookiesPerHour[i];
    }
    thEl = document.createElement('th');
    thEl.textContent = hourlyTotal;
    trEl.appendChild.apply(thEl);
  }
  storeTable.avgCookiesPerHour(trEl);
}

// add new store function
function addNewStore(){
  event.preventDefault();
  console.log(event.target.name.value);
  var newName = event.target.name.value;
  var newMaxCust = event.target.maxCust.value;
  var newMinCust = event.target.minCust.value;
  var newAvgSale = event.target.avgSale.value;

  new Store(newName, newMaxCust, newMinCust, newAvgSale);

  storeTable.innerHTML = '';
  makeHeaderRow();
  renderAllStores();
}

//var storeForm = document.getElementById('store-form');
//storeForm.addEventListener('submit', addNewStore);

// create store instances
var pike = new Store('1st and Pike', '65', '23', '6.3');
var seatac = new Store('SeaTac', '24', '3', '1.2');
var center = new Store('Seattle Center', '38', '11', '3.7');
var capitol = new Store('Capitol Hill', '38', '20', '2.3');
var alki = new Store('Alki', '16', '2', '4.6');

// function call
makeHeaderRow();
//renderAllStores();
makeFooterRow();

pike.render();
// seatac.render();
// center.render();
// capitol.render();
// alki.render();




