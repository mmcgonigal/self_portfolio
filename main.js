'use strict'



//make navbar transparent when it is on the top. else will have background color;
const navbar=document.querySelector("#navbar");
const navbarHeight=navbar.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    console.log(window.scrollY);
    console.log(`"navbarHeight: ${navbarHeight}`);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add("navbar_dark");
    }else{
        navbar.classList.remove("navbar_dark")
    }

})