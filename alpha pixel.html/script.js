
// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuBtn.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

// Close menu when link is clicked

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});

// ==============================
// TYPING EFFECT
// ==============================

const typing = document.querySelector(".typing");

const words = [
    "Beautiful Websites",
    "Creative Designs",
    "Business Solutions",
    "Digital Experiences"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();


// ==============================
// STICKY NAVBAR ON SCROLL
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(8,12,24,.96)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(10,15,30,.88)";
        header.style.boxShadow = "none";

    }

});

// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

const revealElements = document.querySelectorAll(`
.hero-content,
.hero-image,
.about-image,
.about-content,
.service-card,
.portfolio-card,
.why-card,
.process-card,
.team-card,
.value-card,
.contact-info,
.contact-form,
.footer
`);

const revealOnScroll = () => {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

};

// Initial Style

revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ==============================
// ACTIVE NAVIGATION LINK
// ==============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ==============================
// BACK TO TOP BUTTON
// ==============================

const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

//=========================
// LOADER
//=========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 2000);

});

//=========================
// CUSTOM CURSOR
//=========================

window.addEventListener("DOMContentLoaded", () => {

    const cursor = document.querySelector(".cursor");

    if (!cursor) return;

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });

});


//=========================
// MOUSE LIGHT
//=========================

const mouseLight = document.querySelector(".mouse-light");

if(mouseLight){

    document.addEventListener("mousemove",(e)=>{

        mouseLight.style.left = e.clientX + "px";
        mouseLight.style.top = e.clientY + "px";

    });

}


//=========================
// HERO IMAGE 3D EFFECT
//=========================

const heroImage = document.querySelector(".hero-image video");

if (heroImage) {

    document.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.clientX) / 35;
        const y = (window.innerHeight / 2 - e.clientY) / 35;

        heroImage.style.transform =
            `perspective(1000px)
             rotateY(${-x}deg)
             rotateX(${y}deg)
             scale(1.05)`;

    });

}



//=========================
// DARK / LIGHT MODE
//=========================

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    // Load Saved Theme
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        themeToggle.innerHTML = "☀️";
    } else {
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            themeToggle.innerHTML = "🌙";
        } else {
            localStorage.setItem("theme", "dark");
            themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }

    });

}