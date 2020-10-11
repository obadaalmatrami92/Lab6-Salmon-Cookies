// eslint-disable-next-line strict
var Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var seattle = {
  TheMin: 23,
  TheMax: 65,
  TheAvg: 6.3,
  cookiesArray: [],
  generateRandom: function () {
    var range = this.TheMax - this.TheMin;
    var randomNumber = Math.floor(Math.random() * range) + this.TheMin;
    return randomNumber;
  },

  amountOfCookiesPerHourFunction: function () {
    for (i = 0; i < 15; i++) {
      this.amountOfCookiesCeil = Math.ceil(this.TheAvg * this.generateRandom());
      this.cookiesArray.push(this.amountOfCookiesCeil);
    }
    return this.cookiesArray;
  },


};
seattle.amountOfCookiesPerHourFunction();

var count = 0;
document.write('<h2>', 'Seattle', '</h2>');
document.write('<ul>');
for (i = 0; i < 15; i++) {
  count += seattle.cookiesArray[i];
  document.write('<li>');
  document.write(Hours[i], ': ', seattle.cookiesArray[i] + ' cookies');
  document.write('<br>');
  document.write('</li>');
}
document.write('<li>', 'Total: ', count + ' cookies');
document.write('</ul>');




var Tokyo = {
  TheMin: 3,
  TheMax: 24,
  TheAvg: 1.2,
  cookiesArray: [],
  generateRandom: function () {
    var range = this.TheMax - this.TheMin;
    var randomNumber = Math.floor(Math.random() * range) + this.TheMin;
    return randomNumber;
  },

  amountOfCookiesPerHourFunction: function () {
    for (i = 0; i < 15; i++) {
      this.amountOfCookiesCeil = Math.ceil(this.TheAvg * this.generateRandom());
      this.cookiesArray.push(this.amountOfCookiesCeil);
    }
    return this.cookiesArray;
  },


};
Tokyo.amountOfCookiesPerHourFunction();

// eslint-disable-next-line no-redeclare
var count = 0;
document.write('<h2>', 'Tokyo', '</h2>');
document.write('<ul>');
for (i = 0; i < 15; i++) {
  count += Tokyo.cookiesArray[i];
  document.write('<li>');
  document.write(Hours[i], ': ', Tokyo.cookiesArray[i] + ' cookies');
  document.write('<br>');
  document.write('</li>');
}
document.write('<li>', 'Total: ', count + ' cookies');
document.write('</ul>');




var Dubai = {
  TheMin: 11,
  TheMax: 38,
  TheAvg: 3.7,
  cookiesArray: [],
  generateRandom: function () {
    var range = this.TheMax - this.TheMin;
    var randomNumber = Math.floor(Math.random() * range) + this.TheMin;
    return randomNumber;
  },

  amountOfCookiesPerHourFunction: function () {
    for (i = 0; i < 15; i++) {
      this.amountOfCookiesCeil = Math.ceil(this.TheAvg * this.generateRandom());
      this.cookiesArray.push(this.amountOfCookiesCeil);
    }
    return this.cookiesArray;
  },


};
Dubai.amountOfCookiesPerHourFunction();

// eslint-disable-next-line no-redeclare
var count = 0;
document.write('<h2>', 'Dubai', '</h2>');
document.write('<ul>');
for (i = 0; i < 15; i++) {
  count += Dubai.cookiesArray[i];
  document.write('<li>');
  document.write(Hours[i], ': ', Dubai.cookiesArray[i] + ' cookies');
  document.write('<br>');
  document.write('</li>');
}
document.write('<li>', 'Total: ', count + ' cookies');
document.write('</ul>');




var Paris = {
  TheMin: 20,
  TheMax: 38,
  TheAvg: 2.3,
  cookiesArray: [],
  generateRandom: function () {
    var range = this.TheMax - this.TheMin;
    var randomNumber = Math.floor(Math.random() * range) + this.TheMin;
    return randomNumber;
  },

  amountOfCookiesPerHourFunction: function () {
    for (i = 0; i < 15; i++) {
      this.amountOfCookiesCeil = Math.ceil(this.TheAvg * this.generateRandom());
      this.cookiesArray.push(this.amountOfCookiesCeil);
    }
    return this.cookiesArray;
  },


};
Paris.amountOfCookiesPerHourFunction();

// eslint-disable-next-line no-redeclare
var count = 0;
document.write('<h2>', 'Paris', '</h2>');
document.write('<ul>');
for (i = 0; i < 15; i++) {
  count += Paris.cookiesArray[i];
  document.write('<li>');
  document.write(Hours[i], ': ', Paris.cookiesArray[i] + ' cookies');
  document.write('<br>');
  document.write('</li>');
}
document.write('<li>', 'Total: ', count + ' cookies');
document.write('</ul>');




var Lima = {
  TheMin: 2,
  TheMax: 16,
  TheAvg: 4.6,
  cookiesArray: [],
  generateRandom: function () {
    var range = this.TheMax - this.TheMin;
    var randomNumber = Math.floor(Math.random() * range) + this.TheMin;
    return randomNumber;
  },

  amountOfCookiesPerHourFunction: function () {
    for (i = 0; i < 15; i++) {
      this.amountOfCookiesCeil = Math.ceil(this.TheAvg * this.generateRandom());
      this.cookiesArray.push(this.amountOfCookiesCeil);
    }
    return this.cookiesArray;
  },


};
Lima.amountOfCookiesPerHourFunction();

// eslint-disable-next-line no-redeclare
var count = 0;
document.write('<h2>', 'Lima', '</h2>');
document.write('<ul>');
for (var i = 0; i < 15; i++) {
  count += Lima.cookiesArray[i];
  document.write('<li>');
  document.write(Hours[i], ': ', Lima.cookiesArray[i] + ' cookies');
  document.write('<br>');
  document.write('</li>');
}
document.write('<li>', 'Total: ', count + ' cookies');
document.write('</ul>');