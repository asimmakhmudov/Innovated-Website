var menuList = document.getElementById("menuList");
        menuList.style.maxHeight = "0px";
        function toggleMenu(){
            if (menuList.style.maxHeight == "0px") {
                menuList.style.maxHeight = "500px";
            }
            else {
                menuList.style.maxHeight = "0px"
            }
        }
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('menuT');
});