const promisOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function () {
        resolve()
        console.log("Async task is complete");
    }, 1000)
})

promisOne.then(function () {
    console.log("promise consumed");
})




new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve()
        // console.log("Async task2 is complete");
    }, 1000)
}).then(function () {
    // console.log("promise consumed");
})



const promisThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            userName: "hello",
            email: "exaple.com"
        })
    }, 1000)
})

promisThree
    .then(function (user) {
        // console.log(user);
    })



const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // let error = true
        let error = false
        if (!error) {
            resolve({ userName: "Govind" })
        }
        else {
            reject('Error: Something went wrong')
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        //console.log(user);
        return user.userName
    }).then((userName) => {
        //console.log(userName);
    }).catch(function (error) {
        console.log(error);
    }).finally(() => {
        //console.log("finally complete");
    })
//console.log(userName);


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        //let error = false
        let error = true;
        if (!error) {
            resolve({ userName: "Javascript" })
        }
        else {
            reject('Error: JS went wrong')
        }
    }, 1000)
})

// async function consumePromiseFive(){
//     const response = await promiseFive   // only applicable for true condition
//     console.log(response);
// }
// consumePromiseFive()

async function consumePromiseFive() {
    try {
        const response = await promiseFive
         console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()



async function getAllUsers() {
    try {
        const response = await fetch('https://api.github.com/users/govind-bhagat')
        //console.log(response);
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E:", error);
    }
}
//getAllUsers()



fetch('https://api.github.com/users/govind-bhagat')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
