const toggleFlag = () => {
  const flagButtons = document.querySelectorAll(".story__flag");

  const toggleState = (flag) => {
    flag.classList.toggle("story__flag--selected");
  };

  flagButtons.forEach((flag) => {
    flag.addEventListener("click", (event) => {
      //event.preventDefault();
      toggleState(event.target.closest(".story__flag"));
    });
  });
};

toggleFlag();
