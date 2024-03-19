// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}


const greetings = "Hello World"
for (const greet of greetings) {
    //console.log(`each character of greetings ${greet}`);
}


//Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United State Of America")
//console.log(map);

for (const iterator of map) {
    //console.log(iterator);
}

for (const [key, value] of map) {
    //console.log(key, " :->",value);
}

//object
const myObject = {
    'name': 'Govind',
    'Age': '20'
}
// for (const iterator of myObject) {
//     console.log(iterator);         // myObject is not iterator
// }
