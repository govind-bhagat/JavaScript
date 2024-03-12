// same data type
console.log(1>2);
console.log(1<2);
console.log(2>=2);
console.log(3<=2);
console.log(2==3);
console.log(2!=3);

// different data type
console.log(1>"2");
console.log("1"<2);
console.log(2<="3");
console.log("2>=3");
console.log(2 == "2");
console.log(2!="3");


console.log(null>0);
console.log(null==0);
console.log(null>=0);
/*
The reason is that an equality check == and
 comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why null >= 0 is true null>0 is false
*/

console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);

// strict equal === --> value and dataType compare
console.log(2 ==  "2");
console.log(2 === 2);