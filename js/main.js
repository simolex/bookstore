const mainScript = () => {
  const categorySlider = new Swiper(".categories__line", {
    loop: false,

    wrapperClass: "categories-wrapper",
    slideClass: "category",
    navigation: {
      nextEl: ".categories__button--next",
      prevEl: ".categories__button--prev",
      disabledClass: "categories__button--disabled",
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

  const buttonBurger = document.querySelector(".navbar__menu-burger");
  const menu = document.querySelector(".navbar__menu-group");
  const closeBtn = menu.querySelector(".navbar__menu-close");

  const openMenu = () => {
    menu.classList.remove("navbar__menu-group--hidden");
    //disableBodyScroll(true);
  };
  const closeMenu = () => {
    menu.classList.add("navbar__menu-group--hidden");
    //enableBodyScroll();
  };

  closeBtn.addEventListener("click", closeMenu);

  buttonBurger.addEventListener("click", openMenu);

  menu.addEventListener("click", (event) => {
    if (event.target.classList.contains("navbar-menu__link")) {
      closeMenu();
    }
  });
};

mainScript();
