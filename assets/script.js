const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let bannerImg = document.querySelector(".banner-img");
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
let dots = document.querySelectorAll(".dot");

let position = 0;

function updatesDots(index) {
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

function updateCarousel(index, direction) {
  if (position === -1 && direction === "left") {
    position = slides.length - 1;
  } else if (position === slides.length && direction === "right") {
    position = 0;
  }

  const imagePath = `assets/images/slideshow/${slides[position].image}`;
  bannerImg.src = imagePath;
  bannerImg.alt = `Slide ${position + 1}`;

  const tagLine = slides[position].tagLine;
  document.querySelector("p").innerHTML = tagLine;

  console.log(`Clic sur la flèche ${direction}`);
}

arrowLeft.addEventListener("click", () => {
  position = position - 1;
  updateCarousel(position, "left");
  updatesDots(position);
});

arrowRight.addEventListener("click", () => {
  position = position + 1;
  updateCarousel(position, "right");
  updatesDots(position);
});
