const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let yesScale = 1;
let chaosLevel = 0;
let activated = false;

function moveNoButton() {
  chaosLevel++;

  // First time: switch to absolute positioning
  if (!activated) {
    const rect = noBtn.getBoundingClientRect();
    const parentRect = noBtn.parentElement.getBoundingClientRect();

    noBtn.style.position = "absolute";
    noBtn.style.left = rect.left - parentRect.left + "px";
    noBtn.style.top = rect.top - parentRect.top + "px";

    activated = true;
  }

  const container = document.querySelector(".buttons");
  const containerRect = container.getBoundingClientRect();

  const maxX = containerRect.width - noBtn.offsetWidth;
  const maxY = containerRect.height - noBtn.offsetHeight;

  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";

  // YES grows
  yesScale += 0.18;
  yesBtn.style.transform = `scale(${yesScale})`;

  // NO shrinks & rotates
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
