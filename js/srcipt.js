var navMain = document.querySelector(".main-nav");
    var navToggler = document.querySelector(".main-nav__toggler");

    navMain.classList.remove("main-nav--nojs");

    navToggler.addEventListener("click", function() {
      if (navMain.classList.contains("main-nav--closed")) {
        navMain.classList.remove("main-nav--closed");
        navMain.classList.add("main-nav--opened");
      } else {
        navMain.classList.add("main-nav--closed");
        navMain.classList.remove("main-nav--opened");
      }
    });

//Slider @media desktop

var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider__item");
  var btns = document.getElementsByClassName("slider__input");

  if(n > slides.length) {
    slideIndex = 1;
  }
  if(n < 1) {
    slideIndex = slides.Length;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex = -1].style.display = "block";
}
