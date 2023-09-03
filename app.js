"use strict";

const storeElement = document.getElementById("locations");

const state = {
 hoursArray: [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12am",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
],

storesArray: [
    new location ("Seattle", 23, 65, 6.3),
    new location ("Tokyo", 3, 24, 1.2),
    new location ("Dubai", 11, 38, 3.7),
    new location ("Paris", 20, 38, 2.3),
    new location ("Lima", 2, 16, 4.6),
],

tableElm : document.getElementById('Sales-Table'),

};

function locations(storeName, minCust, maxCust, avgCookie){
    this.storeName = storeName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;

    this.cookieSoldPerHr[]; // need to fill with numbers
    this.totalSoldDaily = 0 
}

locations();

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

    locations.prototype.calcCookie = function () {
      for (let i = 0; i < state.hoursArray.length; i++) {
        //need random number between min and max customers
        const randomNum = getRandomInt(this.minCust, this.maxCust);
        //need to multiply random number by average cookies sold
        const randomSold = randomNum * this.avgCookie;
        //need to add randomSold number to cookieSoldPerHr Array
        this.cookieSoldPerHr.push(Math.round(randomSold)); 
      }
    }



    locations.prototype.render = function(){
      const rowElem = document.createElement('tr');
const nameElm = document.createElement('td')
nameElm.textContent = this.storeName;
rowElem.appendChild(nameElm)

for(i = 0; i < this.cookieSoldPerHr.length; i++){
  const hourSoldElm = document.createElement('td')
  hourSoldElm.textContent = this.cookieSoldPerHr[i];
rowElem.appendChild(hourSoldElm);
}
const locationTotalElm = document.createElement('td')
locationTotalElm.textContent = this.totalSoldDaily;
rowElem.appendChild(locationTotalElm);
      state.tableElm.appendChild(rowElem)
    }

    function renderTableHeader(){
      //const tableElm = document.getElementById('Sales-Table');
      const headerRow = document.createElement('tr');
    
      const blankThElem = document.createElement("th");
      headerRow.appendChild(blankThElem);
    
      for(let i = 0; i < state.hoursArray.length; i++){
        const tdElem = document.createElement('th')
        tdElem.textContent = state.hours[i];
        headerRow.appendChild(tdElem);
      }
    
      const dailyTotalTdElem = document.createElement('th');
      dailyTotalTdElem.textContent = "Daily Location Total";
      headerRow.appendChild(dailyTotalTdElem);
    
    
      state.tableElm.appendChild(headerRow);
    }
    
    renderTableHeader();
    


function renderTableBody(){
  for(let i=0; i < state.storesArray.length; i++){
  state.storesArray[i].calcCookie();
state.storesArray[i].render();
}
console.log(state);
}


function renderTableFooter(){
  const footerRow = document.createElement('tr');

  const totalLabelElm = document.createElement('td');
  totalLabelElm.textContent = "totals";
  footerRow.appendChild(totalLabelElm);

  let grandTotal = 0;

  for(let i = 0; i < state.hoursArray.length; i++){
    let hourlyTotal = 0
for( let j = 0; j < state.storesArray.length; j++){
    hourlyTotal += state.storesArray[i].cookieSoldPerHr[i]
  }

  grandTotal += hourlyTotal
  const hourlyTotalElm = document.createElement('td');
  hourlyTotalElm.textContent = hourlyTotal
  footerRow.appendChild(hourlyTotalElm)
}

const grandTotalElm = document.createElement('td');
grandTotalElm.textContent = grandTotal;
footerRow.appendChild(grandTotalElm)

  state.tableElm.appendChild(footerRow);
}
  
  // call stack
renderTableHeader();
renderTableBody();
renderTableFooter();





//Object Literals for each store
//

//const tokyo = {
//     minCust: 3,
//     maxCust: 24,
//     avgCookie: 1.2
// }

// const dubai = {
//     minCust: 11,
//     maxCust: 38,
//     avgCookie: 3.7
// }

// const paris = {
//     minCust:
//     maxCust:
//     avgCookie:
// }