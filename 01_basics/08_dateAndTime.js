let myDate = new Date()

console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

console.log(myDate.toLocaleDateString());

console.log(myDate.toISOString());

console.log(typeof myDate);


let myCreateDate = new Date(2024, 0, 13)   //month start from 0
console.log(myCreateDate.toDateString());
let myCreateDateTime = new Date(2024, 4, 23, 18, 9, 4)
console.log(myCreateDateTime.toLocaleString());

let myCreateDate2 = new Date("01-14-2024")
console.log(myCreateDate2.toLocaleString());

let myTimeStamp = Date.now()
console.log((myTimeStamp));
console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());



newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: ''
})