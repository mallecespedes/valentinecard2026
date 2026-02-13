const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const heartsContainer = document.getElementById("hearts-container");

let yesScale = 1;
let chaosLevel = 0;

// NO BUTTON CHAOS
noBtn.addEventListener("click", () => {
  chaosLevel++;

  // YES grows
  yesScale += 0.12;
  yesBtn.style.transform = `scale(${yesScale})`;

  // shrink + rotate
  const shrink = Math.max(0.5, 1 - chaosLevel * 0.06);
  const rotation = Math.random() * chaosLevel * 15 - chaosLevel * 7;

  noBtn.style.transform = `scale(${shrink}) rotate(${rotation}deg)`;

  if (chaosLevel > 2) noBtn.classList.add("shake");

  if (chaosLevel > 6) noBtn.innerText = "pls stop 🫩";

  if (chaosLevel > 9) noBtn.style.display = "none";
});

// YES EXPLODES HEARTS
yesBtn.addEventListener("click", () => {
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💖";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }

  setTimeout(() => {
    alert("YAYYYYY 💘💘💘");
  }, 500);
});
