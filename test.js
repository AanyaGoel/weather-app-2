// 2024-08-04T15:00

const date = new Date("2024-08-04");
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDayOfWeek = daysOfWeek[date.getDay()];
console.log(date.getDay())
const currentTime = date.toLocaleTimeString();

console.log(`Today is ${currentDayOfWeek} and the time is ${currentTime}`);