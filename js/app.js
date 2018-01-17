'use strict';

//global variables

// array for business hours
var businessHours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

// array to hold stores
var allStores = [];

// access table
var storeTable = document.getElementById('stores');

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

// make footer row
function makeFooterRow(){
  var trEl = document.createElement('tr');
  for(var i = 0; i < businessHours.length; i++){
    var tfEl = document.createElement('tfoot');
    tfEl.textContent = 'total';
    tfEl.appendChild(trEl);
    storeTable.appendChild(trEl);
    
  }
}


// constructor for store objects
function Store(name, maxCust, minCust, avgSale){
  this.name = name;
  this.maxCust = maxCust;
  this.minCust = minCust;
  this.avgSale = avgSale;
  allStores.push(this);
}

// render function
Store.prototype.render = function () {
  var cookieArray = [];
  var totalCookies = 0;
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  for(var i = 1; i < businessHours.length - 1; i++){
    tdEl = document.createElement('td');
    var cookies = Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust) / this.avgSale);
    tdEl.textContent = cookies;
    totalCookies += cookies;
    cookieArray.push(cookies);
    trEl.appendChild(tdEl);
    if(cookieArray.length === 15){
      tdEl = document.createElement('td');
      tdEl.textContent = totalCookies;
      trEl.appendChild(tdEl);
    }
  }
  storeTable.appendChild(trEl);
};

// create store instances
var pike = new Store('1st and Pike', '65', '23', '6.3');
var seatac = new Store('SeaTac', '24', '3', '1.2');
var center = new Store('Seattle Center', '38', '11', '3.7');
var capitol = new Store('Capitol Hill', '38', '20', '2.3');
var alki = new Store('Alki', '16', '2', '4.6');

// function call
makeHeaderRow();
pike.render();
seatac.render();
center.render();
capitol.render();
alki.render();
//makeFooterRow();



