const youtubePlayer = () => {
  const Players = document.querySelectorAll(".stories__play-button");
  Players.forEach((play) => {
    play.addEventListener("click", (event) => {
      onYouTubeIframeAPIReady(event.target.closest(".wallpaper"));
    });
  });

  let player;
  const onYouTubeIframeAPIReady = (obj) => {
    player = new YT.Player(obj.id, {
      height: "100%",
      width: "100%",
      videoId: obj.dataset.video, //"S_IAqwrvEuU", //AwG-Szp2vGY //u9_BFLRTYFw //LuBh8DPqSCc
      events: {
        onReady: videoPlay,
        //onStateChange: onPlayerStateChange,
      },
    });
  };

  const videoPlay = (event) => {
    event.target.playVideo();
  };
};

youtubePlayer();
