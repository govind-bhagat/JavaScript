const marval_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marval_heros.push(dc_heros)
//console.log(marval_heros);
//console.log(marval_heros[3][1]);

//const newHeros = marval_heros.concat(dc_heros)
//console.log(newHeros);

const newHeros2 = [...marval_heros, ...dc_heros]
console.log(newHeros2);

const newArray =[1,2,3,4,[5,6,7],7,[9,1,[4,5]]]
const real_newArray = newArray.flat(Infinity)
console.log(real_newArray);

console.log(Array.isArray("GOVIND"));
console.log(Array.from("GOVIND"));
console.log(Array.from({name: "GOVIND"}));  //important

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));