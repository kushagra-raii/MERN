let rectangle = {
    length : 1,
    breadth: 5
};

for (const key in rectangle) {
   console.log(key,rectangle[key]);
}


// forof works on iterables such as arrays and map 

for (const key of Object.entries(rectangle)) {
    console.log(key);
}