const countValue = document.querySelector("#counter");

function increment () {
    let value = parseInt(countValue.innerText);
    value = value +1;
    countValue.innerText = value;
};
const decrement = () => {
    let value = parseInt(countValue.innerText);
    value = value -1;
    countValue.innerText = value;
};