const burGer = document.querySelector('.burger');
const navBar = document.querySelector('nav');
burGer.addEventListener("click",function () {
    navBar.classList.toggle("open")
    burGer.classList.toggle("open")
})