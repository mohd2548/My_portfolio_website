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
    paragraph.innerText = "With a background in [Your Degree/Major], I have developed strong skills in Python, R, SQL, and machine learning. Beyond data, I enjoy [mention hobbies or interests, e.g., reading, traveling, coding challenges, or any personal passion], which helps me stay creative and open-minded.";

})

General.addEventListener("click", () => {
    Education.style.backgroundColor = "";
    General.style.backgroundColor = "red";
    Personal.style.backgroundColor = "";
    General.style.padding = "3px"
    let paragraph = document.querySelector("#about p");
    paragraph.innerText = "I am a passionate Data Scientist with a deep interest in turning raw data into meaningful insights. With a strong foundation in statistics, machine learning, and data visualization, I thrive on solving complex problems and making data-driven decisions.";
})

Personal.addEventListener("click", () => {
    Education.style.backgroundColor = "";
    General.style.backgroundColor = "";
    Personal.style.backgroundColor = "red";
    Personal.style.padding = "3px"
    let paragraph = document.querySelector("#about p");
    paragraph.innerText = "I believe in continuous learning and always strive to enhance my skills in AI, analytics, and statistical modeling. Whether it's working on exciting projects or collaborating with like-minded individuals, I am always eager to push the boundaries of what data can do.";
})

let moreapps = document.querySelector(".moreApps");

moreapps.addEventListener("click", () => {
    let navbar = document.querySelector(".navbar ul");
    let mainNavbar = document.querySelector(".navbar");
    navbar.style.display = "block";
    navbar.style.visibility = "visible";
    navbar.style.opacity = "1";

    let apps = document.querySelectorAll(".socialMedia");
    apps.forEach(app => {
        app.style.display = "none";
    });

});



