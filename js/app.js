'use strict';

// array for business hours
var businessHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// array for days of the week
var daysOpen = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

// array for each location
//var storeLocation = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];

// generate a random number of customers
// function randomCustomers(max, min){
//   var customers = Math.floor(Math.random() * (max - min) + min);
//   return customers;
// }


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
   
    var ulEl = document.getElementById('pike');

    for(var i = 0; i < businessHours.length; i++){
      // create list of items
      var liEl = document.createElement('li');
      // give it content
      liEl.textContent = businessHours[i] + ':  ' + this.customersPerHour(65, 23) * this.avgCookiesPerCust + ' cookies.';
      // append list to ul
      ulEl.appendChild(liEl);
    }
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

    var ulEl = document.getElementById('seatac');

    for(var i = 0; i < businessHours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = businessHours[i] + ':  ' + this.customersPerHour(24, 3) * this.avgCookiesPerCust + ' cookies.';
      ulEl.appendChild(liEl);
    }
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

    var ulEl = document.getElementById('seacenter');

    for(var i = 0; i < businessHours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = businessHours[i] + ':  ' + this.customersPerHour(38, 11) * this.avgCookiesPerCust + ' cookies.';
      ulEl.appendChild(liEl);
    }
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

    var ulEl = document.getElementById('capitol');

    for(var i = 0; i < businessHours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = businessHours[i] + ':  ' + this.customersPerHour(38, 20) * this.avgCookiesPerCust + ' cookies.';
      ulEl.appendChild(liEl);
    }
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

    var ulEl = document.getElementById('alki');

    for(var i = 0; i < businessHours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = businessHours[i] + ':  ' + this.customersPerHour(16, 2) * this.avgCookiesPerCust + ' cookies.';
      ulEl.appendChild(liEl);
    }
  }
};
storeLocationFive.render();
