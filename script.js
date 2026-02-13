const noBtn = document.getElementById("noBtn");
const noWrapper = document.getElementById("noWrapper");
const yesBtn = document.getElementById("yesBtn");
const area = document.getElementById("buttonsArea");
const heartContainer = document.getElementById("heartContainer");

let chaosLevel = 0;
let yesScale = 1;
let activated = false;

noWrapper.addEventListener("mouseenter", chaosMove);
noWrapper.addEventListener("touchstart", chaosMove);

function chaosMove() {
  chaosLevel++;

  const areaRect = area.getBoundingClientRect();
  const yesRect = yesBtn.getBoundingClientRect();

  // 🔥 On first chaos activation, switch to absolute positioning
  if (!activated) {
    activated = true;

    const startRect = noWrapper.getBoundingClientRect();

    noWrapper.style.position = "absolute";
    noWrapper.style.left = startRect.left - areaRect.left + "px";
    noWrapper.style.top = startRect.top - areaRect.top + "px";
  }

  const wrapperRect = noWrapper.getBoundingClientRect();

  const maxX = areaRect.width - wrapperRect.width;
  const maxY = areaRect.height - wrapperRect.height;

  let newX, newY;
  let safe = false;

  // Try up to 50 times to avoid overlapping YES
  for (let i = 0; i < 50 && !safe; i++) {
    newX = Math.random() * maxX;
    newY = Math.random() * maxY;

    const futureRect = {
      left: areaRect.left + newX,
      right: areaRect.left + newX + wrapperRect.width,
      top: areaRect.top + newY,
      bottom: areaRect.top + newY + wrapperRect.height
    };

    const overlapping =
      !(futureRect.right < yesRect.left ||
        futureRect.left > yesRect.right ||
        futureRect.bottom < yesRect.top ||
        futureRect.top > yesRect.bottom);

    if (!overlapping) safe = true;
  }

  noWrapper.style.left = newX + "px";
  noWrapper.style.top = newY + "px";

  // YES grows
  yesScale += 0.12;
  yesBtn.style.transform = `scale(${yesScale})`;

  // Chaos effects
  const shrink = Math.max(0.5, 1 - chaosLevel * 0.06);
  const rotation = Math.random() * chaosLevel * 20 - chaosLevel * 10;

  noBtn.style.transform = `scale(${shrink}) rotate(${rotation}deg)`;

  if (chaosLevel > 2) noBtn.classList.add("shake");
  if (chaosLevel > 4) noBtn.classList.add("panic");
  if (chaosLevel > 6) noBtn.innerText = "pls stop 😭";
  if (chaosLevel > 9) noWrapper.style.display = "none";
}
