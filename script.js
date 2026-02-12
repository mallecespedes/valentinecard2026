const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const playArea = document.querySelector(".play-area");

let yesScale = 1;
let chaosLevel = 0;

function moveNoButton() {
  chaosLevel++;

  const areaRect = playArea.getBoundingClientRect();
  const yesRect = yesBtn.getBoundingClientRect();

  const maxX = areaRect.width - noBtn.offsetWidth;
  const maxY = areaRect.height - noBtn.offsetHeight;

  let randomX;
  let randomY;
  let safe = false;

  // Try multiple times to avoid overlap with YES
  for (let i = 0; i < 50 && !safe; i++) {
    randomX = Math.random() * maxX;
    randomY = Math.random() * maxY;

    const noFutureRect = {
      left: areaRect.left + randomX,
      right: areaRect.left + randomX + noBtn.offsetWidth,
      top: areaRect.top + randomY,
      bottom: areaRect.top + randomY + noBtn.offsetHeight
    };

    const overlapping =
      !(noFutureRect.right < yesRect.left ||
        noFutureRect.left > yesRect.right ||
        noFutureRect.bottom < yesRect.top ||
        noFutureRect.top > yesRect.bottom);

    if (!overlapping) safe = true;
  }

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  // YES grows
  yesScale += 0.12;
  yesBtn.style.transform = `translateX(-50%) scale(${yesScale})`;

  // Chaos visuals
  const shrink = Math.max(0.5, 1 - chaosLevel * 0.06);
  const rotation = Math.random() * chaosLevel * 15 - chaosLevel * 7;

  noBtn.style.transform = `scale(${shrink}) rotate(${rotation}deg)`;

  if (chaosLevel > 2) noBtn.classList.add("shake");
  if (chaosLevel > 4) noBtn.classList.add("panic");

  if (chaosLevel > 6) noBtn.innerText = "pls stop 😭";
  if (chaosLevel > 9) noBtn.style.display = "none";
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
  window.location.href = "success.html";
});
