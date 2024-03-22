const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item) => {
//    // console.log(item);
//    return item;
// })                       // no return 

// console.log(values);



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// return value

// const newNums = myNums.filter((num) => num>5)
// console.log(newNums);

// const newNums = myNums.filter((num) => {
//    return num>5
// }
//     )
//console.log(newNums);



// const newNums = []

// myNums.forEach((num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const books = [
    {
        tittle: 'Book One',
        genre: 'Fiction',
        publish: 1981,
        edition: 2004
    },
    {
        tittle: 'Book Two',
        genre: 'Non-Fiction',
        publish: 1992,
        edition: 2008
    },
    {
        tittle: 'Book Three',
        genre: 'History',
        publish: 1999,
        edition: 2007
    },
    {
        tittle: 'Book Four',
        genre: 'Non-Finction',
        publish: 1989,
        edition: 2010
    },
    {
        tittle: 'Book Five',
        genre: 'Science',
        publish: 2009,
        edition: 2014
    },
    {
        tittle: 'Book six',
        genre: 'Fiction',
        publish: 1987,
        edition: 2010
    },
    {
        tittle: 'Book seven',
        genre: 'History',
        publish: 1986,
        edition: 1996
    },
]

let userBooks = books.filter((item) => item.genre === 'History');
userBooks = books.filter((item) => item.publish > 1992);
userBooks = books.filter((item) => {
    return item.genre == 'History' && item.publish >= 1992
});
console.log(userBooks);

