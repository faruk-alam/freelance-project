const openMenu = document.querySelector(".header-toggle");
const closeMenu = document.querySelector(".header-close");
const toggleMenu = document.querySelector("#nav-menu");
openMenu.addEventListener("click", ()=>{
    toggleMenu.classList.toggle("show");
});
closeMenu.addEventListener("click", ()=>{
    toggleMenu.classList.remove("show");
});