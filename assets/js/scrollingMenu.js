const navList = document.getElementById("nav-list");

navList.style.maxHeight = "0px";

function menuscrolling() {
    if (navList.style.maxHeight == "0px") {
        navList.style.maxHeight = "200px";
    } else {
        navList.style.maxHeight = "0px";
    }
}

const menuIcon = document.getElementById("menu-icon")

menuIcon.addEventListener("click", menuscrolling)