let currentIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function updateSlide() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to 1st slide
    updateSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop back if at 1st
    updateSlide();
}

let Education = document.querySelector(".Education")
let General = document.querySelector(".General")
let Personal = document.querySelector(".Personal")


Education.addEventListener("click", () => {
    Education.style.backgroundColor = "red";
    General.style.backgroundColor = "";
    Personal.style.backgroundColor = "";
    Education.style.padding = "3px"
    let paragraph = document.querySelector("#about p");
    paragraph.innerText = "Education is Education";

})

General.addEventListener("click", () => {
    Education.style.backgroundColor = "";
    General.style.backgroundColor = "red";
    Personal.style.backgroundColor = "";
    General.style.padding = "3px"
    let paragraph = document.querySelector("#about p");
    paragraph.innerText = "genral is general";
})

Personal.addEventListener("click", () => {
    Education.style.backgroundColor = "";
    General.style.backgroundColor = "";
    Personal.style.backgroundColor = "red";
    Personal.style.padding = "3px"
    let paragraph = document.querySelector("#about p");
    paragraph.innerText = "personal is personal";
})




