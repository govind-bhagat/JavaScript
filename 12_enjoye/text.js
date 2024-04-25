// const myArr = []
// %DebugPrint(myArr)

// contineous(3 type ~),  Holey(3 type ~)

// ~SMI (small integer)
// ~Packed element
// ~Double (float, string, function)

const arr2 = [1,2,3,4,5]
// PACKED_SMI_ELEMENT       ~ best type

arr2.push(6.0)
// PACKED_DOUBLE_ELEMENTS

arr2.push('7')
// PACKED_ELEMENT 

arr2[10] = 11
// HOLEY_ELEMENTS

console.log(arr2);
console.log(arr2.length);
console.log(arr2[9]);

// bound check
// hasOwnProperty(arr2,9)
// hasOwnProperty(arr2.prototype, 10)
// hasOwnProperty(object.prototype, 10)

// holes are very expensive in js

const arr3 = [1,2,3,4,5]
console.log(arr3[2]);

// SMI > DOUBLE > PACKED
// H_SMI >H_DOUBLE > H_PACKED
const arr4 = new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENTSS
arr4[0] = '1'  //HOLEY_ELEMENTS
arr4[1] = '2'  //HOLEY_ELEMENTS
arr4[2] = '3'  //HOLEY_ELEMENTS

const arr5 = []
arr5.push('1') //PACKED_ELEMENTS
arr5.push('2') //PACKED_ELEMENTS
arr5.push('3') //PACKED_ELEMENTS


// for, for-each, forEach