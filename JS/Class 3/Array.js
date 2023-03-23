let arr= [1,2,3,5,4];

let a = arr.indexOf(4);
let p = arr.indexOf(7);
console.log(a);
console.log(p);

let b = arr.includes(3);
let q = arr.includes(7);
console.log(b);
console.log(q);


let objArray = [
    {no:1, naam: 'love'},
    {no:2, naam: 'Kush'},
]

// let isIt = objArray.find(function (abc) {
//     return abc.naam == 'Kush';
// })
let isIt = objArray.find(abc => abc.naam === 'Kush')

console.log(isIt);