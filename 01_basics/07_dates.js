// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myCreatedDate = new Date(2026, 0, 15); // January 15, 2026 (months are zero-indexed)

console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2026, 0, 23, 5, 3);
console.log(myCreatedDate2.toLocaleString());
 // January 15, 2026 (ISO format)

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate2.getTime());
console.log(Math.floor(Date.now() / 1000)); // current timestamp in seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


console.log(newDate.toLocaleString('default',   {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
}));



