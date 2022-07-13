'use strict'



//make navbar transparent when it is on the top. else will have background color;

const navbar=document.querySelector("#navbar");
const navbarHeight=navbar.getBoundingClientRect().height;
document.addEventListener("scroll",()=>{
    console.log(window.scrollY);
    console.log(`"navbarHeight: ${navbarHeight}`);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add("navbar_dark");
    }else{
        navbar.classList.remove("navbar_dark")
    }

})


function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth"});
}

// handle scrolling when tapping on the navbar menu.

const navbarMenu= document.querySelector(".navbar_menu");
navbarMenu.addEventListener("click",(event)=>{
    const target = event.target;
    const link = target.dataset.link;
    if(link == null ){
        return;
    }
    console.log(event.target.dataset.link);
    // const scrollTo = document.querySelector(link);
    // scrollTo.scrollIntoView({behavior:"smooth"});
    scrollIntoView(link)
})


//contact me button on home handling.

const contactMe = document.querySelector(".home_contact");
contactMe.addEventListener("click",(event)=>{
    // const scrollTo = document.querySelector("#contact");
    // scrollTo.scrollIntoView({behavior:"smooth"});
    scrollIntoView("#contact");
    }
)



//make home slowly faded when scrolling down.
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll",()=>{
    //console.log(homeHeight);
 //   homeHeight: 684.5
    console.log(1 - window.scrollY/homeHeight)
home.style.opacity=1 - window.scrollY/homeHeight;

})



