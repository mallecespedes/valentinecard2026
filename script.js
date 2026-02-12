const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const area = document.getElementById("buttonsArea");

let chaosLevel = 0;
let yesScale = 1;

noBtn.addEventListener("mouseenter", chaosMove);
noBtn.addEventListener("touchstart", chaosMove);

function chaosMove() {
  chaosLevel++;

  const areaRect = area.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  // SAFE BOUNDS (mobile-friendly)
  const maxX = areaRect.width - btnRect.width;
  const maxY = areaRect.height - btnRect.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  // YES grows 💖
  yesScale += 0.12;
  yesBtn.style.transform = `scale(${yesScale})`;

  // Chaos visuals 😈
  const shrink = Math.max(0.5, 1 - chaosLevel * 0.06);
  const rotation = Math.random() * chaosLevel * 15 - chaosLevel * 7;

  // COMBINED transform (this is the fix)
  noBtn.style.transform = `
    translate(${x}px, ${y}px)
    scale(${shrink})
    rotate(${rotation}deg)
  `;

  // Escalating panic
  if (chaosLevel > 2) noBtn.classList.add("shake");
  if (chaosLevel > 4) noBtn.classList.add("panic");

  if (chaosLevel > 6) noBtn.innerText = "pls stop 😭";
  if (chaosLevel > 9) noBtn.style.display = "none";
}

yesBtn.addEventListener("click", () => {
  window.location.href = "success.html";
});
