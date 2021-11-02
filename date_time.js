Date.prototype.toShortFormat = function() {

    let monthNames =["Jan","Feb","Mar","Apr",
                      "May","Jun","Jul","Aug",
                      "Sep", "Oct","Nov","Dec"];
    
    let day = this.getDate();
    
    let monthIndex = this.getMonth();
    let monthName = monthNames[monthIndex];
    
    let year = this.getFullYear();
    
    return `${day}-${monthName}-${year}`;  
}

const prompt = require("prompt-sync")();
const n = prompt('Enter date and time : ');

var date = new Date(n);
var today = new Date(); 
var milliseconds = date.getTime(); 
var utc = date.toUTCString();
var dformat1 = [date.getMonth() + 1, date.getDate(), date.getFullYear()].join('-') + ' ' + [date.getHours(),date.getMinutes(),date.getSeconds()].join(':');
var dformat2 = [date.toShortFormat()] + ' ' + [date.getHours(),date.getMinutes(),date.getSeconds()].join(':');  
var hours = parseInt(Math.abs(date - today) / (1000 * 60 * 60) % 24);
var mins = hours * 60;

    
console.log('In milliseconds : '+milliseconds);
console.log('In UTC Time : '+utc);
console.log('DD-MM-YYYY hh:mm:ss --> '+dformat1);
console.log('DD-MON-YY hh:mm:ss --> '+dformat2);
console.log('Total hours : '+hours);
console.log('In minutes : '+mins);