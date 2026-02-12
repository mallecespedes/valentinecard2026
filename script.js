const noBtn = document.getElementById("noBtn");
const noWrapper = document.getElementById("noWrapper");
const yesBtn = document.getElementById("yesBtn");
const area = document.getElementById("buttonsArea");

let chaosLevel = 0;
let yesScale = 1;

noWrapper.addEventListener("mouseenter", chaosMove);
noWrapper.addEventListener("touchstart", chaosMove);

function chaosMove() {
  chaosLevel++;

  const areaRect = area.getBoundingClientRect();
  const btnRect = noWrapper.getBoundingClientRect();

  const maxX = areaRect.width - btnRect.width;
  const maxY = areaRect.height - btnRect.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  // MOVE wrapper
  noWrapper.style.left = `${x}px`;
  noWrapper.style.top = `${y}px`;

  // YES grows 💖
  yesScale += 0.12;
  yesBtn.style.transform = `scale(${yesScale})`;

  // Chaos visuals 😈 (on button only)
  const shrink = Math.max(0.5, 1 - chaosLevel * 0.06);
  const rotation = Math.random() * chaosLevel * 15 - chaosLevel * 7;

  noBtn.style.transform = `scale(${shrink}) rotate(${rotation}deg)`;

  if (chaosLevel > 2) noBtn.classList.add("shake");
  if (chaosLevel > 4) noBtn.classList.add("panic");

  if (chaosLevel > 6) noBtn.innerText = "pls stop 😭";
  if (chaosLevel > 9) noWrapper.style.display = "none";
}

yesBtn.addEventListener("click", () => {
  window.location.href = "success.html";
});
