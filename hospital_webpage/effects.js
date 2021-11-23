/**NAVBAR**/
const menu = document.querySelector('#mobile_menu');
const menulinks = document.querySelector('.navbar_menu');

const mobilemenu = () => {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
};

menu.addEventListener('click' , mobilemenu);

/*LAYER 2*/

const slider = document.querySelectorAll(".sld_btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".preview_container");

var sliderNav = function(manual){ 
    slider.forEach((btn) => {
        btn.classList.remove("active");

    });
    slides.forEach((slide) => {
        slide.classList.remove("active");

    });
    contents.forEach((content) => {
        content.classList.remove("active");

    });
    slider[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
    }
    slider.forEach((btn,i) => {
        btn.addEventListener("click", () => {
            sliderNav(i)

        });
     });
    


   
