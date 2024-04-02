const promisOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function () {
        resolve()
        // console.log("Async task is complete");
    }, 1000)
})

promisOne.then(function () {
    //console.log("promise consumed");
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
        console.log(user);
        return user.userName
    }).then((userName) => {
        console.log(userName);
    }).catch(function (error) {
        console.log(error);
    }).finally(() => {
        console.log("finally complete");
    })
//console.log(userName);