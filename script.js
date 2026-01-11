const envelope = document.getElementById("envelope");
const cover = document.getElementById("cover");
const invitation = document.getElementById("invitation");

envelope.addEventListener("click", function () {
  cover.classList.add("hide");

  music.play();
isPlaying = true;


  setTimeout(() => {
    cover.style.display = "none";
    invitation.style.display = "block";
    window.scrollTo(0, 0);
  }, 800);
});

const weddingDate = new Date("2026-01-31T00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) return;

  document.getElementById("days").innerText =
    Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("hours").innerText =
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  document.getElementById("minutes").innerText =
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("seconds").innerText =
    Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

const music = document.getElementById("bg-music");
let isPlaying = false;

function toggleMusic() {
  if (!isPlaying) {
    music.play();
    isPlaying = true;
    document.getElementById("music-btn").innerText = "⏸";
  } else {
    music.pause();
    isPlaying = false;
    document.getElementById("music-btn").innerText = "▶";
  }
}

