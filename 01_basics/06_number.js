const score = 300
console.log(score);

const balance = new Number(200)
console.log((balance));

console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2));

const otherNumber = 23.6753986

console.log(otherNumber.toPrecision(5));
console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(2));
console.log(otherNumber.toPrecision(1));

const hundreds = 100000000
console.log(hundreds.toLocaleString());  // a/c to USA
console.log(hundreds.toLocaleString('en-IN')); //a/c to INDIA