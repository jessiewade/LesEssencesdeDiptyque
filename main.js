// Slideshow carousel
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

document.querySelectorAll(".current-slide-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    currentSlide(btn.dataset.slideIndex);
  });
});

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change every 5000
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}



// Video
let vid = document.getElementById("video");

// Enable mute button
document.querySelector("#volume-mute").addEventListener("click", function enableMute() {
  vid.muted = true;
});

// Disable mute button
document.querySelector("#volume-down").addEventListener("click", function disableMute() {
  vid.muted = false;
});



// Get back to top button
let mybutton = document.getElementById("home1");
document.querySelector("#home1").addEventListener("click", topFunction);

// Show button when scroll down
window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";

  } else {
    mybutton.style.display = "none";
  }
}

// Scroll to top on click
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}





// Shoelace alert for 'You have signed up'
const container = document.querySelector('.alert-toast');

['success'].map(function (variant) {
  const button = container.querySelector('sl-button[variant="' + variant + '"]');
  const alert = container.querySelector('sl-alert[variant="' + variant + '"]');

  button.addEventListener('click', function () {
    alert.toast();
  });
});



// Clickable perfume reactive gallery
// Select html elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");
// Function to the filterable cards
const filterCards = function (e) {
  document.querySelector("#filter-buttons .active").classList.remove("active");
  e.target.classList.add("active");
  filterableCards.forEach(function (card) {
    // Show all until user clicks on button
    if (card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
      return card.classList.replace("hide", "show");
    }
    card.classList.add("hide");
  });
};
filterButtons.forEach(function (button) {
  button.addEventListener("click", filterCards);
});

