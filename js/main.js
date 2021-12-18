const categorySlider = new Swiper(".categories__line", {
  loop: false,

  wrapperClass: "categories-wrapper",
  slideClass: "category",
  navigation: {
    nextEl: ".category__button--next",
    prevEl: ".category__button--prev",
    disabledClass: "category__button--disabled",
  },

  slidesPerView: 4,
  spaceBetween: 26,
  breakpointsBase: "container",

  breakpoints: {
    // when window width is >= 320px
    278: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      grid: {
        rows: 2,
        fill: "row",
      },
      spaceBetween: 9,
    },
    574: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      grid: {
        rows: 2,
        fill: "row",
      },
      spaceBetween: 9,
    },
    698: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      grid: {
        rows: 1,
        //fill: "column",
      },
      spaceBetween: 19,
    },
    958: {
      slidesPerView: 3,
      spaceBetween: 29,
      grid: {
        rows: 1,
      },
    },
    1138: {
      slidesPerView: 4,
      spaceBetween: 29,
      grid: {
        rows: 1,
      },
    },
  },
});

const unreleasedSlider = new Swiper(".unreleased__slider", {
  loop: false,

  wrapperClass: "unreleased__vitrine",
  slideClass: "unreleased__item",
  navigation: {
    nextEl: ".unreleased__arrow--right",
    prevEl: ".unreleased__arrow--left",
    disabledClass: "unreleased__arrow--disabled",
    //lockClass: "unreleased__arrow--disabled",
  },

  slidesPerView: 4,
  spaceBetween: 26,
  breakpointsBase: "container",

  breakpoints: {
    // when window width is >= 320px
    200: {
      slidesPerView: 1,

      spaceBetween: 0,
    },
    519: {
      slidesPerView: 2,
      spaceBetween: 160,
    },
    698: {
      slidesPerView: 3,
      spaceBetween: 42,
    },
    958: {
      slidesPerView: 4,
      spaceBetween: 45,
    },
    1138: {
      slidesPerView: 5,
      spaceBetween: 29,
    },
  },
});
