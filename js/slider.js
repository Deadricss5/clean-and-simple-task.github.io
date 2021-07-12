let swiper = new Swiper(".hero-section-slider", {
  allowTouchMove: false,
  effect: "flip",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


let swiper2 = new Swiper(".blog-swiper", {
  allowTouchMove: false,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".blog-slider-pagination",
    clickable: true,
  },
});


const qoutesSlider = new Swiper('.quotes-slider', {
  // Default parameters
  slidesPerView: 2,
  autoHeight: false,
  spaceBetween: 60,
  loop:true,
  centeredSlidesBounds: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".quotes-slider-pagination",
    clickable: true,
    dynamicBullets:true,
    dynamicMainBullets:1,
  },

})


let acc = document.querySelectorAll(".accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      this.style.color = '#8E96B7'
      this.firstChild.firstElementChild.setAttribute('d','M2 2L9 9L16 2')
      this.firstChild.firstElementChild.setAttribute('stroke','#8E96B7')
      this
    } else {
      panel.style.display = "block";
      this.style.color = '#495274'
      this.firstChild.firstElementChild.setAttribute('d','M16 9L9 2L2 9')
      this.firstChild.firstElementChild.setAttribute('stroke','#495274')
    }
  });
}