let myName = "Govind    "
let fav =  "   chai"

String.prototype.trueLength = function(str) {
    {
        str = str.trim()
        return str.length
    }
}

console.log(myName.length);
console.log(fav.length);
// console.log(myName.trueLength);
// console.log(fav.trueLength);
console.log(myName.trueLength(myName));
console.log(fav.trueLength(fav));



/*
let myHero = ["thor", "SpiderMan"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Govind = function(){
    console.log(`Govind is present in all object`);
}
//heroPower.Govind()
myHero.Govind()
myName.Govind()
fav.Govind()
*/