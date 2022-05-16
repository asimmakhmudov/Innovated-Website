const menuList = document.getElementById("menuList");
const menu = document.querySelector(".menu");
const checkbox = document.getElementById("checkbox")
const comImg = document.querySelector(".comImg");

menuList.style.maxHeight = "0px";
function toggleMenu(){
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "500px";
    }
    else {
        menuList.style.maxHeight = "0px"
    }
}

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('menuT');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        menu.style.padding = "15px";
    }
    else {
        menu.style.padding = "35px";
    }
})

window.addEventListener('scroll', () => {
    
    if (window.scrollY > 100) {
        comImg.style.top = window.scrollY + "px";
    }
    else {
        comImg.style.top = "0px";
    }
})