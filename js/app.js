'use strict';

// array for business hours
var businessHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];

// array to hold stores
var allStores = [];

// access table
var storeTable = document.getElementById('stores');

/*

Location	       Max      Min     avgSale
1st and Pike	    65	    23      6.3
SeaTac Airport	  24	    3       1.2
Seattle Center		38	    11      3.7
Capitol Hill	  	38	    20      2.3
Alki	            16	    2       4.6

*/


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
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.maxCust;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.minCust;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.avgSale;
  trEl.appendChild(tdEl);

  storeTable.appendChild(trEl);
};

// create store instances

var pike = new Store('1st and Pike', '65', '23', '6.3');
var seatac = new Store('SeaTac', '24', '3', '1.2');
var center = new Store('Seattle Center', '38', '11', '3.7');
var capitol = new Store('Capitol Hill', '38', '20', '2.3');
var alki = new Store('Alki', '16', '2', '4.6');

// make table header

function makeHeaderRow(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'name';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'maxCust';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'minCust';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'avgSale';
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
}

// function call

makeHeaderRow();
pike.render();
seatac.render();
center.render();
capitol.render();
alki.render();



// generate a random number of customers
// function randomCustomers(max, min){
//   var customers = Math.floor(Math.random() * (max - min) + min);
//   return customers;
// }


/************ 
// 1st and pike
var storeLocationOne = {

// max/min customers per hours 65, 23
  customersPerHour: function randomCustomers(max, min){
    var customers = Math.floor(Math.random() * (max - min) + min);
    return customers;
  },
  // avg cookies per customer 6.3
  avgCookiesPerCust: Math.floor(6.3),

  // render function
  render: function(){ 
    var total = 0;
    var ulEl = document.getElementById('pike');

    for(var i = 0; i < businessHours.length; i++){
      var random = this.customersPerHour(65, 23) * this.avgCookiesPerCust;
      // create list of items
      var liEl = document.createElement('li');
      // give it content
      liEl.textContent = businessHours[i] + ':  ' + random + ' cookies.';
      // append list to ul
      ulEl.appendChild(liEl);
      total += random;
    } 
    liEl = document.createElement('li');
    liEl.textContent = 'Total cookies sold: ' + total;
    ulEl.appendChild(liEl);
  } 
};
storeLocationOne.render();


// Seatac Airport
var storeLocationTwo = {

  // max/min customers per hours 24, 3
  customersPerHour: function randomCustomers(max, min){
    var customers = Math.floor(Math.random() * (max - min) + min);
    return customers;
  },
  // avg cookies per customer 1.2
  avgCookiesPerCust: Math.floor(1.2),

  render: function(){
    var total = 0; 
    var ulEl = document.getElementById('seatac');

    for(var i = 0; i < businessHours.length; i++){
      var random = this.customersPerHour(24, 3) * this.avgCookiesPerCust;
      var liEl = document.createElement('li');
      liEl.textContent = businessHours[i] + ':  ' + random + ' cookies.';
      ulEl.appendChild(liEl);
      total += random;
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total cookies sold: ' + total;
    ulEl.appendChild(liEl);
  }
};
storeLocationTwo.render();

// Seattle Center
var storeLocationThree = {

  // max/min customers per hours 38, 11
  customersPerHour: function randomCustomers(max, min){
    var customers = Math.floor(Math.random() * (max - min) + min);
    return customers;
  },
  // avg cookies per customer 3.7
  avgCookiesPerCust: Math.floor(3.7),

  render: function(){
    var total = 0;
    var ulEl = document.getElementById('seacenter');

    for(var i = 0; i < businessHours.length; i++){
      var random = this.customersPerHour(38, 11) * this.avgCookiesPerCust;
      var liEl = document.createElement('li');
      liEl.textContent = businessHours[i] + ':  ' + random + ' cookies.';
      ulEl.appendChild(liEl);
      total += random;
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total cookies sold: ' + total;
    ulEl.appendChild(liEl);
  }
};
storeLocationThree.render();

// Capitol Hill
var storeLocationFour = {

  // max/min customers per hours 38, 20
  customersPerHour: function randomCustomers(max, min){
    var customers = Math.floor(Math.random() * (max - min) + min);
    return customers;
  },
  // avg cookies per customer 2.3
  avgCookiesPerCust: Math.floor(2.3),
  render: function(){
    var total = 0;
    var ulEl = document.getElementById('capitol');

    for(var i = 0; i < businessHours.length; i++){
      var random = this.customersPerHour(38, 20) * this.avgCookiesPerCust;
      var liEl = document.createElement('li');
      liEl.textContent = businessHours[i] + ':  ' + random + ' cookies.';
      ulEl.appendChild(liEl);
      total += random;
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total cookies sold: ' + total;
    ulEl.appendChild(liEl);
  }
};
storeLocationFour.render();

// Alki
var storeLocationFive = {

  // max/min customers per hours 16, 2
  customersPerHour: function randomCustomers(max, min){
    var customers = Math.floor(Math.random() * (max - min) + min);
    return customers;
  },
  // avg cookies per customer 4.6
  avgCookiesPerCust: Math.floor(4.6),
  render: function(){
    var total = 0;

    var ulEl = document.getElementById('alki');

    for(var i = 0; i < businessHours.length; i++){
      var random = this.customersPerHour(16, 2) * this.avgCookiesPerCust;
      var liEl = document.createElement('li');
      liEl.textContent = businessHours[i] + ':  ' + random + ' cookies.';
      ulEl.appendChild(liEl);
      total += random;
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total cookies sold: ' + total;
    ulEl.appendChild(liEl);
  }
};
storeLocationFive.render();

**********/


// creating table
/*

function makeHeaderRow(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = ‘6am’;
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = ‘7am’;
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = ‘8am’;
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = ‘9am’;
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = ‘10am’;
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = ‘11am’;
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = ‘12pm’;
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = ‘1pm’;
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = ‘2pm’;
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = ‘3pm’;
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = ‘4pm’;
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = ‘5pm’;
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = ‘6pm’;
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = ‘7pm’;
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = ‘8pm’;
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
}

*/
