window.onload = function polaroid() {
  const polaroids = document.querySelectorAll(".polaroid");

  polaroids.forEach((p, idx) => {
    // optional fade-in
    setTimeout(() => { p.style.opacity = "0.7"; }, idx*300);

    p.addEventListener("click", () => {
      if (!p.classList.contains("revealed")) {
        p.classList.add("revealed");

        // typing effect
        if (p.dataset.typing === "true") {
          const caption = p.querySelector(".caption");
          caption.classList.add("typing");
        }
      }
    });
  });
};
function launchConfetti() {
  const colors = ["#ff6f91", "#ffc75f", "#845ec2", "#4d96ff", "#f9f871"];

  for (let i = 0; i < 35; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = 2 + Math.random() * 1.5 + "s";

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}

window.addEventListener("load", () => {
  setTimeout(launchConfetti, 400);
});
document.addEventListener("click", () => {
  const music = document.getElementById("bg-music");

  if (music && music.paused) {
    music.play().catch(() => {});
  }
}, { once: true });

