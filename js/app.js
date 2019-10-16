'use strict';
var hours = [ ' 6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storeLocations = [];//eslint-disable-line
var salesTable = document.getElementById('salmonTable');
function HeaderRow() { //eslint-disable-line
var tableRow = document.createElement('tr');
for (var i = 0; i <= hours.length; i++) {
  var thElement = document.createElement('th');
  thElement.textContent = hours[i-1];
  tableRow.appendChild(thElement);
}
thElement = document.createElement('th');
thElement.textContent =  'Daily Location Total';
tableRow.appendChild(thElement);
//  console.log(salesTable);
salesTable.appendChild(tableRow);
};
function New(name, minCust, maximumCust, avarageCookies) {
 this.name = name;
this.minCust = minCust;
this.maxCust = maximumCust;
this.avgCookie = avarageCookies;
this.avgCustArray = [];
this.cookiesEachHourArray = [];
this.totalCookies = 0;
storeLocations.push(this);
}
New.prototype.numCustHourly = function() {
for (var i = 0; i <= hours.length; i++) {
  var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  this.avgCustArray.push(singleHourCust);
}
};
New.prototype.cookiesPerCustomer = function() {
this.numCustHourly();
for (var i = 0; i < hours.length; i++) {
  var singleHourCookies = Math.ceil(this.avgCustArray[i] * this.avgCookie);
  this.cookiesEachHourArray.push(singleHourCookies);
  this.totalCookies += singleHourCookies;
}
};
New.prototype.render = function() {
this.cookiesPerCustomer();
var trRowName = document.createElement('tr');
var tdStore = document.createElement('td');
tdStore.textContent = this.name;
trRowName.appendChild(tdStore);
for (var i = 0; i < this.cookiesEachHourArray.length; i++) {
  var tdCell = document.createElement('td');
  tdCell.textContent = this.cookiesEachHourArray[i];
  trRowName.appendChild(tdCell);
};
var tdTotal = document.createElement('td');
tdTotal.textContent = this.totalCookies;
trRowName.appendChild(tdTotal);
salesTable.appendChild(trRowName);
};
var Seattle = new New('Seattle:', 2, 16, 4.6);
var Tokyo = new New(' Tokyo:' , 3, 24, 1.2);
var Dubai = new New('Dubai :' , 11, 38, 3.7);
var Paris = new New('Paris :', 20, 38, 2.3);
var Lima = new New(' Lima :', 23, 65, 6.3);
function renderAllStores() {
for (var i = 0; i < storeLocations.length; i++) {
  storeLocations[i].render();
}
};
function makeFooterRow() { //eslint-disable-line
var tableRow = document.createElement('tr');
tableRow.textContent = ' Totals :';
salesTable.appendChild(tableRow);
var bigesttotals = 0;
for (var i = 0; i < hours.length; i++) {
  var hourlyTotal = 0;
  for (var j = 0; j < storeLocations.length; j++) {
    hourlyTotal = hourlyTotal + storeLocations[j].cookiesEachHourArray[i];
    bigesttotals += storeLocations[j].cookiesEachHourArray[i];
    console.log(bigesttotals);
  }
  var tdElement = document.createElement('td');
  tdElement.textContent = hourlyTotal;
  tableRow.appendChild(tdElement);
}
tdElement = document.createElement('td');
tdElement.textContent = bigesttotals;
tableRow.appendChild(tdElement);
};
HeaderRow();
renderAllStores();
makeFooterRow();
