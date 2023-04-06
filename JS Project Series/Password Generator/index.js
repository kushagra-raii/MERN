const sliderElement = document.querySelector(".slider");
const dataLenDisplay = document.getElementById("dataLenNo");
sliderElement.value = 10;

let lenDisplay = dataLenDisplay.innerText;
parseInt(lenDisplay);
sliderElement.addEventListener("input", function () {
    if (checkedCount > sliderElement.value) {
        sliderElement.value = checkedCount;
    }
    dataLenDisplay.innerText = sliderElement.value;
});

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function getNum() {
    return getRandom(0, 9);
}
function getCapital() {
    return String.fromCharCode(getRandom(65, 90));    
}
function getLower() {
    return String.fromCharCode(getRandom(97, 122));
}
function getSymbol() {
    return String.fromCharCode(getRandom(33, 47));
}

let isUppercase = document.getElementById("uppercase");
let isLowercase = document.getElementById("lowercase");
let isNumbers = document.getElementById("numbers");
let isSymbols = document.getElementById("symbols");
let checkedCount = 0;

let checkboxes = document.querySelectorAll(".checkCounter");
let check = 0;
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        checkedCount = 0;
        if (isUppercase.checked) {
            checkedCount++;
        }
        if (isLowercase.checked) {
            checkedCount++;
        }
        if (isNumbers.checked) {
            checkedCount++;
        }
        if (isSymbols.checked) {
            checkedCount++;
        }

        if (checkedCount > sliderElement.value) {
            sliderElement.value = checkedCount;
        }
        // console.log(checkedCount);

        dataLenDisplay.innerText = sliderElement.value;
    });
});



const display = document.querySelector(".display");
const copy = document.querySelector(".copyBtn");
const copyMsg = document.querySelector(".dataCopyMsg");

async function copyContent() {
   try {
    console.log("abc");
    await navigator.clipboard.writeText(display.value);
    copyMsg.innerText = "copied";
   } 
   catch(e){
    copyMsg.innerText = "failed";
   }
   copyMsg.classList.add("active");
   setTimeout(() =>{
    copyMsg.classList.remove("active");
   },1000);
}



function mergedPassword() {
    let password = ""
    let passwordLenCounter = 0;
    while (passwordLenCounter < sliderElement.value) {
        if (isUppercase.checked && passwordLenCounter < sliderElement.value) {
            password = password + getCapital();
            passwordLenCounter++;
        }
        if (isLowercase.checked && passwordLenCounter < sliderElement.value) {
            password = password + getLower();
            passwordLenCounter++;
        }
        if (isNumbers.checked && passwordLenCounter < sliderElement.value) {
            password = password + getNum();
            passwordLenCounter++;
        }
        if (isSymbols.checked && passwordLenCounter < sliderElement.value) {
            password = password + getSymbol();
            passwordLenCounter++;
        }
    }
    function shuffle() {
        let arr = password.split("");
        for (let i = 0; i < arr.length; i++) {
            let j = getRandom(0, arr.length);
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        let shuffledPassword = arr.join('');
        display.value = shuffledPassword;
    }
    return shuffle();
}

const strengthElement = document.querySelector(".dataIndicator");
const generateBtn = document.querySelector(".generate");



function strengthChecker(){
    checkedCount = 0;
        if (isUppercase.checked) {
            checkedCount++;
        }
        if (isLowercase.checked) {
            checkedCount++;
        }
        if (isNumbers.checked) {
            checkedCount++;
        }
        if (isSymbols.checked) {
            checkedCount++;
        }
    console.log(checkedCount);  
if ((sliderElement.value>=8 && checkedCount >=3 )|| (sliderElement.value>=12 && checkedCount >=2 ) || (sliderElement.value >= 18)) {
strengthElement.style.backgroundColor = 'green';   
}
else if ((sliderElement.value>=8 && checkedCount >=2) ||(sliderElement.value>=10 && checkedCount >=1) ) {
strengthElement.style.backgroundColor = 'yellow';   
}
else  {
strengthElement.style.backgroundColor = 'red';   
}

}
generateBtn.addEventListener("click", strengthChecker );
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', strengthChecker );
});

sliderElement.addEventListener("input", strengthChecker);


