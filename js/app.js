// function randomInRange(min, max){
//     var range = max - min ;
//     var rand = (Math.random() * range) + min ;
//     return Math.ceil (rand) ;
//     //to get random number between two numbers
//  }
//  var header1 = document.createElement('h1');
//  header1.textContent = 'Hi there';
//  var contentArea = document.getElementById ('content-area');
//  contentArea.appendChild(header1);
//  /*
//  How to make this ?
//  <p> Ataba Hotel </p>
//  <ul>
//  <li>Beds 2</li>
//  </ul>
//  */
//  var paragragh = document.createElement('p');
//  paragragh.textContent = ('Ataba Hotel');
//  var contentArea= document.getElementById('content-area');
//  contentArea.appendChild(paragragh);
//  var ul = document.createElement('ul');
//  contentArea.appendChild(ul);
//  var li = document.createElement('li');
//  li.textContent = 'Beds: 2 ';
//  ul.appendChild(li);


var hours = [ ["6am: ",], ["7am: ",], ["8am: ",], ["8am: ",], ["9am: ",], ["10am: ",], ["11am: ",], ["12pm: ",],  [" 1pm: ",], [" 2pm: ",], ["3pm: ",], ["4pm: ",], [" 5pm: ",], ["6pm: ",], [" 7pm: ",], ["Total: ",] ];

let Seattle = {
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    averagePerCustomer: 6.3,
    arrSeattle: [],
    forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {
        var range = maxCustomersPerHour - minCustomersPerHour;
        var rand = (Math.random() * range) + minCustomersPerHour;
        var final = Math.ceil(rand);
        return (final);
    },
    
    cookiesPurchased: function () {
        var hoursSum = 0;
        for (i = 0; i < 15; i++) {
            var cookiesPerHour = this.forEachHour(Seattle.minCustomersPerHour, Seattle.maxCustomersPerHour) / Seattle.averagePerCustomer;
            hours[i][1] = Math.ceil(cookiesPerHour);
            hoursSum = hoursSum + hours[i][1];
            hours[15][1] = hoursSum;
        }
        
        return hours;
    }
}


let Tokyo = {
    minCustomersPerHour: 3,
    maxCustomersPerHour: 24,
    averagePerCustomer: 1.2,
    arrTokyo: [],
    forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {
        var range = maxCustomersPerHour - minCustomersPerHour;
        var rand = (Math.random() * range) + minCustomersPerHour;
        var final = Math.ceil(rand);
        return (final);
    },

    cookiesPurchased: function () {
        var hoursSum = 0;
        for (i = 0; i < 15; i++) {
            var cookiesPerHour = this.forEachHour(Seattle.minCustomersPerHour, Seattle.maxCustomersPerHour) / Seattle.averagePerCustomer;
            hours[i][1] = Math.ceil(cookiesPerHour);
            hoursSum = hoursSum + hours[i][1];
            hours[15][1] = hoursSum;
        }

        return hours;
    }
}

let Dubai = {
    minCustomersPerHour: 11,
    maxCustomersPerHour: 38,
    averagePerCustomer: 3.7,
    forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {
        var range = maxCustomersPerHour - minCustomersPerHour;
        var rand = (Math.random() * range) + minCustomersPerHour;
        var final = Math.ceil(rand);
        return (final);
    },

    cookiesPurchased: function () {
        var hoursSum = 0;
        for (i = 0; i < 15; i++) {
            var cookiesPerHour = this.forEachHour(Seattle.minCustomersPerHour, Seattle.maxCustomersPerHour) / Seattle.averagePerCustomer;
            hours[i][1] = Math.ceil(cookiesPerHour);
            hoursSum = hoursSum + hours[i][1];
            hours[15][1] = hoursSum;
        }

        return hours;
    }
}

let Paris = {
    minCustomersPerHour: 20,
    maxCustomersPerHour: 38,
    averagePerCustomer: 2.3,
    forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {
        var range = maxCustomersPerHour - minCustomersPerHour;
        var rand = (Math.random() * range) + minCustomersPerHour;
        var final = Math.ceil(rand);
        return (final);
    },

    cookiesPurchased: function () {
        var hoursSum = 0;
        for (i = 0; i < 15; i++) {
            var cookiesPerHour = this.forEachHour(Seattle.minCustomersPerHour, Seattle.maxCustomersPerHour) / Seattle.averagePerCustomer;
            hours[i][1] = Math.ceil(cookiesPerHour);
            hoursSum = hoursSum + hours[i][1];
            hours[15][1] = hoursSum;
        }

        return hours;
    }
}

let Lima = {
    minCustomersPerHour: 2,
    maxCustomersPerHour: 16,
    averagePerCustomer: 4.6,
    forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {
        var range = maxCustomersPerHour - minCustomersPerHour;
        var rand = (Math.random() * range) + minCustomersPerHour;
        var final = Math.ceil(rand);
        return (final);
    },

    cookiesPurchased: function () {
        var hoursSum = 0;
        for (i = 0; i < 15; i++) {
            var cookiesPerHour = this.forEachHour(Seattle.minCustomersPerHour, Seattle.maxCustomersPerHour) / Seattle.averagePerCustomer;
            hours[i][1] = Math.ceil(cookiesPerHour);
            hoursSum = hoursSum + hours[i][1];
            hours[15][1] = hoursSum;
        }

        return hours;
    }
}

