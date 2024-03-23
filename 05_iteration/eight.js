const myNumbers = [1,2,3,4]

// const totalNums = myNumbers.reduce(function(acc,currvalue){
//     console.log(currvalue);
//     return acc+currvalue
// },3)
//console.log(totalNums);


//const totalNums = myNumbers.reduce((acc, currvalue) => acc+currvalue,0)
//console.log(totalNums);


const myCart = [
    {
        name : 'shoe1',
        price : 99
    },
    {
        name : 'shoe2',
        price : 199
    },
    {
        name : 'shoe3',
        price : 499
    },
    {
        name : 'shoe4',
        price : 999
    },
    {
        name : 'shoe5',
        price : 1999
    },
]

const totalPay = myCart.reduce((acc,item) => acc+item.price,0)
console.log(totalPay);