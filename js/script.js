//HAMBURGER TOGGLE
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// IMAGE CAROUSEL
const images = document.querySelectorAll(".carousel img");
let current = 0;
function showNextImage() {
  images[current].classList.remove("active");
  current = (current + 1) % images.length;
  images[current].classList.add("active");
}
setInterval(showNextImage, 3000);
//SCROLL TRIGGER
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  elements.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add("show");
    }
  });
});
// FACILITIES LIGHTBOX

function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightbox.style.display = "flex";
  lightboxImg.src = img.src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

//TESTIMONAL SLIDER
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".testimonial-track");
  const cards = document.querySelectorAll(".testimonial-card");

  let index = 0;

  function getVisibleCards() {
    return window.innerWidth >= 768 ? 2 : 1;
  }

  function updateSlider() {
    const visible = getVisibleCards();
    const movePercent = 100 / visible;

    track.style.transform = `translateX(-${index * movePercent}%)`;
  }

  function nextSlide() {
    const visible = getVisibleCards();
    const maxIndex = cards.length - visible;

    index = index + 1 > maxIndex ? 0 : index + 1;

    updateSlider();
  }

  window.addEventListener("resize", updateSlider);

  setInterval(nextSlide, 4000);

  updateSlider();
});
