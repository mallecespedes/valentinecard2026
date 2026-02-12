const noBtn = document.getElementById("noBtn");
const noWrapper = document.getElementById("noWrapper");
const yesBtn = document.getElementById("yesBtn");
const area = document.getElementById("buttonsArea");
const heartContainer = document.getElementById("heartContainer");

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

  noWrapper.style.left = `${x}px`;
  noWrapper.style.top = `${y}px`;

  yesScale += 0.12;
  yesBtn.style.transform = `scale(${yesScale})`;

  const shrink = Math.max(0.5, 1 - chaosLevel * 0.06);
  const rotation = Math.random() * chaosLevel * 15 - chaosLevel * 7;

  noBtn.style.transform = `scale(${shrink}) rotate(${rotation}deg)`;

  if (chaosLevel > 2) noBtn.classList.add("shake");
  if (chaosLevel > 4) noBtn.classList.add("panic");
  if (chaosLevel > 6) noBtn.innerText = "pls stop 😭";
  if (chaosLevel > 9) noWrapper.style.display = "none";
}

yesBtn.addEventListener("click", () => {
  explodeHearts();

  setTimeout(() => {
    window.location.href = "success.html";
  }, 1200);
});

function explodeHearts() {
  const hearts = ["💖", "💕", "💗", "💘", "💝"];

  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

    const rect = yesBtn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top;

    heart.style.left = `${x + Math.random() * 40 - 20}px`;
    heart.style.top = `${y}px`;
    heart.style.fontSize = `${20 + Math.random() * 20}px`;

    heartContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 1400);
  }
}
