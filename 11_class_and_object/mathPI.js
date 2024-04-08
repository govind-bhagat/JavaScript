
// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const descriotor = Object.getOwnPropertyDescriptor(Math, "PI")
//console.log(descriotor);
//output ->
 /*                                 {
                                       value: 3.141592653589793,
getOwnPropertyDescriptor(Math, "PI")   writable: false,
                                       enumerable: false,
                                       configurable: false
                                    }
*/

const Tea = {
    name: "jksdah",
    price: 56,
    isAvailable: true
}
//console.log(Tea);
//console.log(Object.getOwnPropertyDescriptor(Tea, "name"));

Object.defineProperty(Tea, "price", {
    Writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(Tea, "price"))

for(let [key, value] of Tea){
    console.log(`${key} ${value}`);
}
