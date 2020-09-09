var date1 = new Date("9/9/2020");
var date2 = new Date("9/10/2020");
var diff = date2 - date1; //milliseconds interval
const expectDateStart = new Date(2020, 9, 10, 6, 30, 0);
const expectDateLeave = new Date(2020, 9, 10, 10, 0, 0);

const expectTimeInMinutes = (expectDateLeave - expectDateStart)/(1000*60);

expectDay = Math.floor(expectTimeInMinutes / (60*24));
expectHour = Math.floor(expectTimeInMinutes / 60);

console.log(expectDay)
console.log(expectHour)
console.log(expectTimeInMinutes%60)