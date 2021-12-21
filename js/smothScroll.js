const smothScroll = () => {
  const linksHead = document.querySelectorAll(".navbar-menu__link");
  const popUpScroll = document.querySelector(".pop-up__button");
  const linkArray = [...linksHead, popUpScroll];

  linkArray.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      //;

      const ID =
        event.target.tagName.toLowerCase() == "a"
          ? event.target.getAttribute("href").substr(1)
          : event.target.closest("a").getAttribute("href").substr(1);

      if (isDisabledBodyScroll() === "false") {
        document.getElementById(ID).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        enableBodyScroll(() => {
          document.getElementById(ID).scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }
    });
  });
};

smothScroll();
