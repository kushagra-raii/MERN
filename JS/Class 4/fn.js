function avgFn(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        
    }
    return sum/arr.length;
};

let anArray = [1,2,3,4,5,6,7,8,9,10];
console.log(avgFn(anArray));

//Named fn assignment
let newFn = function nayaFunction() {
    console.log("assignment wala fn");
};

newFn();
// nayaFunction(); // won't work

//Anonymusfn assignment
let newestFn = function () {
    console.log("anonyAssignment wala fn");
};

newestFn();