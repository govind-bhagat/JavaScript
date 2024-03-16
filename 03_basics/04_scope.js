// function one() {
//     const username = "rishu"
//     function two() {
//         const password = "@rishu23"
//         function three() {
//             const age = 20
//             console.log(username);
//             console.log(password);
//             console.log(age);
//         }
//         console.log(username);
//         console.log(password);
//         //console.log(age);       // not accessable
//         three()
//     }
//     console.log(username);
//     // console.log(password);   // not accessable
//     //console.log(age);         // not accessable
//     two()
// }

// one()




// important

function addOne(num){
    return num+1
}
console.log(addOne(5));

const addTwo = function(num){
    return num+2
}
console.log(addTwo(5));