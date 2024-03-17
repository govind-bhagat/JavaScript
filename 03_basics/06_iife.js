// immediatety invoked function Expression

// (funcion fun(){
//     console.log(`DB CONNECTED`);
// })();

( () => {
      console.log("Hello");
})();



( (name) => {
    console.log(`DB connected ${name}`);
})('Govind')