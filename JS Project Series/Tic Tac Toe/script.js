const theme = document.getElementById("colorMode");
const dark = document.getElementById("dark");
const light = document.getElementById("light");
const boxes = document.querySelectorAll(".box");
const currentPlayerElement = document.getElementById("currentPlayer");
const newGameBtn = document.getElementById("newGame");
const root = document.documentElement.style;
let currentThemeDark = true;

let currentPlayer;
let gameGrid;
const winningPosition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function newGame() {
    currentPlayer = 'X';
    gameGrid = ["", "", "", "", "", "", "", "", ""];
    boxes.forEach((box, index) => {
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        boxes[index].classList.remove("win");


    });
    newGameBtn.classList.remove("active");
    currentPlayerElement.innerText = `Current Player - ${currentPlayer}`
    mode();

}
newGame();

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    })
});

function handleClick(index) {
    if (gameGrid[index] === "") {
        boxes[index].innerText = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        swapTurn();

        checkGameOver();
    }
}

function swapTurn() {
    if (currentPlayer === "X") {
        currentPlayer = "O";
    }
    else {
        currentPlayer = "X";
    }
    currentPlayerElement.innerText = `Current Player - ${currentPlayer}`;
}
function checkGameOver() {
    let answer = "";

    winningPosition.forEach((position) => {
        if ((gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "")
            && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]])) {

            if (gameGrid[position[0]] === "X") {
                answer = "X";
            }
            else {
                answer = "O"
            }

            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            })
            console.log(boxes[position[0]]);
            console.log(boxes[position[1]]);
            console.log(boxes[position[2]]);
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
    });

    if (answer !== "") {
        currentPlayerElement.innerText = `Winner Player - ${answer}`
        newGameBtn.classList.add("active");
        return;
    }

    let fillCount = 0;
    gameGrid.forEach((box) => {
        if (box !== "") {
            fillCount++;
        }
    });

    if (fillCount === 9) {
        currentPlayerElement.innerText = "Game Tied !";
        newGameBtn.classList.add("active");
    }
}

newGameBtn.addEventListener("click", () => { newGame(); });

function mode() {
    if (localStorage.getItem('preferredModeDark') !== null) {
        if (localStorage.getItem('preferredModeDark') == "true") {
            darkMode();
        }
        else lightMode();
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        darkMode();
    }
    else lightMode();
}

function darkMode() {
    root.setProperty("--background-color", "#18181b");
    root.setProperty("--text-color", "#ffffff");
    root.setProperty("--accent-color", "#ffffff26");
    root.setProperty("--border-color", "#ffffff40");
    localStorage.setItem('preferredModeDark', 'true');
    dark.classList.remove("notActive");
    light.classList.add("notActive");
    currentThemeDark = true;

}
function lightMode() {
    light.classList.remove("notActive");
    dark.classList.add("notActive");
    root.setProperty("--background-color", "#e5f5FF");
    root.setProperty("--text-color", "#222222");
    root.setProperty("--accent-color", "#00000026");
    root.setProperty("--border-color", "#00000040");
    localStorage.setItem('preferredModeDark', 'false');
    currentThemeDark = false;
    

}

theme.addEventListener("click",() => { themeChange(); });

function themeChange(){
    console.log("aaaa");

    if (currentThemeDark) {
        lightMode();
    }
    else darkMode();

}