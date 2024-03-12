const name = "Govind"
const age = 20

// old method
//console.log(name + age + "age");

//new method
console.log(`Hello my name is ${name} and my age is ${age}`);

//string declration 2nd method
let gameName = new String('free-fire')
console.log(gameName);
console.log(typeof gameName);

//key value
console.log(gameName[3]);
console.log(gameName[5]);

//through prototype
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0, 4)
console.log((newString));

const anotherString = gameName.slice(0, 4)
console.log(anotherString);

const anotherString2 = gameName.slice(-8, 4)
console.log(anotherString2)

const newStringOne = "  GOVIND  "
console.log(newStringOne)
console.log(newStringOne.trim());  //space remove

const url = "https://govind.com/govind20bhagat"
console.log(url.replace('20','-'));     // replace

console.log(url.includes('govind'));  //check include or not
console.log(url.includes('Govind'));

//convert string to array
console.log(gameName.split('-'));