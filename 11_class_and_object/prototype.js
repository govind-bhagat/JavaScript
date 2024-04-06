let myName = "Govind    "
let fav =  "   chai"

String.prototype.trueLength = function() {
    {
        console.log(this);
        console.log(this.trim().length);
    }
}

console.log(myName.length);
myName.trueLength();
console.log(fav.length);
fav.trueLength();



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



//inheritance

const user = {
    user: "sjkh",
    email: "agmail.com"
}

const Teacher = {
    makeVideo: true
}

const Teachingsupporter = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: Teachingsupporter
}

Teacher.__proto__ = user

//modern Sentence

Object.setPrototypeOf(Teachingsupporter,Teacher)