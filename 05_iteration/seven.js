//map

const myNumbers = [1, 2, 3, 4, 5]
//const newNumbers = myNumbers.map((num) => num+10)
// const newNumbers = myNumbers.map((num) => {
//     return num+10
// })
//console.log(newNumbers);


//chaning
const newNums = myNumbers
.map((num) => num * 10)
.map((num) => num + 1)
.filter((num) => num>25)
console.log(newNums);