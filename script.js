window.onload = () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");

  if (noBtn) {
    noBtn.style.left = "50%";
    noBtn.style.top = "50%";
    noBtn.style.transform = "translate(-50%, -50%)";
    noBtn.style.display = "block";
    noBtn.innerText = "NO 😢";
    noBtn.classList.remove("shake", "panic");
  }

  if (yesBtn) {
    yesBtn.style.transform = "scale(1)";
  }
};

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let yesScale = 1;
let chaosLevel = 0;

function moveNoButton() {
  chaosLevel++;

  const card = document.querySelector(".card");
  const cardRect = card.getBoundingClientRect();

  const maxX = cardRect.width - noBtn.offsetWidth;
  const maxY = cardRect.height - noBtn.offsetHeight;

  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";

  yesScale += 0.18;
  yesBtn.style.transform = `scale(${yesScale})`;

  const shrink = Math.max(0.4, 1 - chaosLevel * 0.08);
  const rotation = Math.random() * chaosLevel * 20 - chaosLevel * 10;

  noBtn.style.transform = `scale(${shrink}) rotate(${rotation}deg)`;

  if (chaosLevel > 2) noBtn.classList.add("shake");
  if (chaosLevel > 4) noBtn.classList.add("panic");

  if (chaosLevel > 6) noBtn.innerText = "pls stop 😭";
  if (chaosLevel > 8) noBtn.style.display = "none";
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
  window.location.href = "success.html";
});
