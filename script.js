const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const heartsContainer = document.getElementById("hearts-container");

let yesScale = 1;
let chaosLevel = 0;

// CHAOS FUNCTION
function triggerChaos() {
  chaosLevel++;

  // YES grows
  yesScale += 0.12;
  yesBtn.style.transform = `scale(${yesScale})`;

  // Chaos visuals
  const shrink = Math.max(0.5, 1 - chaosLevel * 0.06);
  const rotation = Math.random() * chaosLevel * 15 - chaosLevel * 7;

  noBtn.style.transform = `scale(${shrink}) rotate(${rotation}deg)`;

  if (chaosLevel > 2) noBtn.classList.add("shake");
  if (chaosLevel > 6) noBtn.innerText = "pls stop 🫩";
  if (chaosLevel > 9) noBtn.style.display = "none";
}

// DESKTOP → hover
noBtn.addEventListener("mouseenter", triggerChaos);

// MOBILE → click fallback
noBtn.addEventListener("click", triggerChaos);

// YES CLICK
yesBtn.addEventListener("click", () => {

  // explode hearts
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";
    heart.style.fontSize = "20px";
    heart.style.animation = "floatUp 2s ease-out forwards";

    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }

  // redirect to success page after animation
  setTimeout(() => {
    window.location.href = "success.html";
  }, 800);
});
