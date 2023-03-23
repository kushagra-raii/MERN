let rectangle = {
    length : 1,
    breadth: 5
};

let copiedRectangle = {};

for (const key in rectangle) {
    copiedRectangle[key] = rectangle[key];
}

// console.log(copiedRectangle);

let secondCopy = Object.assign({},rectangle);

console.log(secondCopy);

let thirdCopy = {...rectangle};
console.log(thirdCopy);

