// for in
const myObject = {
    c: "C",
    cpp: "C++",
    js: "JavaScript",
    py: "python"
}

for (const key in myObject) {
    //console.log(key);
    //console.log(myObject[key]);
   // console.log(`${key} shortcut is for ${myObject[key]}`);
}

//for array
const prog = ["c","c++","js","py"]
for (const key in prog) {
    //console.log(key);
   // console.log(prog[key]);
}

// //for map
// const map = new Map()
// map.set('G')
// map.set('O')
// map.set('v')

// for (const key in map) {
//     console.log(key);     // map is not iterable
// }

