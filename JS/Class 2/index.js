// console.log("Chaliye shuru karte hai");

// object have some properties and behavior in its scope 

//Creating Object
// let rectangle = {
//     length : 1,
//     breadth : 2,

//     draw(){
//         console.log('drawing rectangle');
//     }
// };

// rectangle.draw();
// console.log(rectangle.length);
// console.log(rectangle.breadth);






// factory fn 

//yaha par object bante by calling fn

// function createCircle (radius,color,name) {
//     return rectangle = {
//         radius,
//         color,
//         name,
    
//         draw: function () {
//             console.log('drawing circle');
//         },
//         circumference() {
//              console.log(2*3.14*radius);
//         }
//     };
// }

// let circleFirst = createCircle (9,'yellow','ChotaCircle');

// console.log(circleFirst);
// circleFirst.draw();
// circleFirst.circumference();

// let circleSecond = createCircle (18,'aqua','badaCircle');

// console.log(circleSecond);
// circleSecond.draw();
// circleSecond.circumference();









// constructor fn - its initializes and defines either properties or behavior

// PascalNotation 

function Pen (len,price) {
    this.length = len;
    this.rate = price;
    this.working = function () {
        console.log("ball rotates at the tip");
    }
}
 
// creating obj using constructor fn
let goldexBlack = new Pen(11,5);

goldexBlack.color = 'black';
console.log(goldexBlack);

let butterFlow = new Pen(12,10);
// here butterFlow is the object and constructor of butterFlow is Pen
console.log(butterFlow.constructor);

console.log("Working: ");
butterFlow.working();

butterFlow.color = 'blue';
// console.log(butterFlow);

if ('color' in butterFlow) {
    console.log("present");
}
else console.log("absent");

delete butterFlow.color;
// console.log(butterFlow);

if ('color' in butterFlow) {
    console.log("present");
}
else console.log("absent");




