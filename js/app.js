'use strict';

// array for business hours
var businessHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// array for days of the week
var daysOpen = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

// array for each location
//var storeLocation = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];


// 1st and pike
var storeLocationOne = {
  cookies: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
  render: function(){ 

    var ulEl = document.getElementById('pike');

    for(var i = 0; i < this.cookies.length; i++){
      // create list of items
      var liEl = document.createElement('li');
      // give it content
      liEl.textContent = businessHours[i] + ': ' + this.cookies[i] + ' cookies sold.';
      // append list to ul
      ulEl.appendChild(liEl);
    }
  }
};
storeLocationOne.render();

