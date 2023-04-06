const modal = document.querySelector(".modal");
const list = modal.classList;
const overlay = document.querySelector(".overlay");
const overLayList = overlay.classList;
function openModal () {
    list.add("active");
    overLayList.add("overlayactive")
    // console.log(list);
}

function closeModal(){
    list.remove("active");
    overLayList.remove("overlayactive")
}

