function eventFn() {
    console.log("ABCD");
    document.body.style.background = "#18181b";
    a.style.color = "#ffffff";
}

let a = document.querySelector('h1');

a.addEventListener("click",eventFn);