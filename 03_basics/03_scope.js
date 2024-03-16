let a = 10
const b = 20
var c = 30
d = 40
console.log("outer1",a);
console.log("outer1",b);
console.log("outer1",c);
console.log("outer1",d);


if (true) {
    let a = 50
    const b = 60
    var c = 70
    d = 80
    console.log("INNER",a);
    console.log("INNER",b);
    console.log("INNER",c);
    console.log("INNER",d);
}

console.log("outer2",a);
console.log("outer2",b);
console.log("outer2",c);
console.log("outer2",d);
