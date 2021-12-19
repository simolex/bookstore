const toggleLike = () => {
  const likeButtons = document.querySelectorAll(".card__like");

  const toggleState = (like) => {
    like.classList.toggle("card__like--liked");
  };
  likeButtons.forEach((likeHeard) => {
    likeHeard.addEventListener("click", (event) =>
      toggleState(event.target.closest(".card__like"))
    );
  });
};

toggleLike();
