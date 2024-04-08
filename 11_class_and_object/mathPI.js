
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
    isAvailable: true,

    orderTea: function () {
        console.log('code fat gaya');
    }
}
for (let [key, value] of Object.entries(Tea)) {
    if (typeof value !== 'function') {
        console.log(`${key} ${value}`);
    }
}


console.log(Tea);
console.log(Object.getOwnPropertyDescriptor(Tea, "name"));

Object.defineProperty(Tea, "price", {
    Writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(Tea, "price"))

for (let [key, value] of Object.entries(Tea)) {
    if (typeof value !== 'function') {
        console.log(`${key} ${value}`);
    }
}
