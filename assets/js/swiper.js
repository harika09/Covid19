// ===== JS SWIPER ==== //
var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  slidesPerView: 1,
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  //AutoPlay
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  //Min-width
  breakpoints: {
    900: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    604: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
