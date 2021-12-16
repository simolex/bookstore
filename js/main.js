const hotelSlider = new Swiper(".categories__line", {
  loop: false,

  //   keyboard: {
  //     enabled: true,
  //     onlyInViewport: true,
  //   },
  slidesPerView: 4,
  spaceBetween: 26,
  wrapperClass: "categories-wrapper",
  slideClass: "category",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  },
});
//hotelSlider();
