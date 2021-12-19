const smothScroll = () => {
  const linksHead = document.querySelectorAll(".navbar-menu__link");

  linksHead.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const ID = event.target.getAttribute("href").substr(1);

      document.getElementById(ID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
};

smothScroll();
