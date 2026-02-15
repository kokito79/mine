const intro = document.getElementById("intro");
const flowersScreen = document.getElementById("flowersScreen");
const heartBtn = document.getElementById("heartBtn");
const bouquetBtn = document.getElementById("bouquetBtn");

const overlay = document.getElementById("overlay");
const closeCard = document.getElementById("closeCard");

let built = false;

heartBtn.addEventListener("click", () => {
  // animar salida del intro
  intro.classList.add("fadeOut");

  // después ocultar intro y mostrar flores
  setTimeout(() => {
    intro.hidden = true;
    flowersScreen.hidden = false;
    flowersScreen.classList.add("fadeIn");

    requestAnimationFrame(() => {
      flowersScreen.classList.add("build");
    });

    built = true;
  }, 350);
});

    built = true;
  }, 350);
});

bouquetBtn.addEventListener("click", () => {
  if (!built) return;

  overlay.classList.add("active");
  requestAnimationFrame(() => {
    overlay.classList.add("showCard");
  });
});

function closeOverlay(){
  overlay.classList.remove("showCard");
  overlay.classList.remove("active");
}

closeCard.addEventListener("click", closeOverlay);

// Cerrar tocando afuera de la carta
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeOverlay();
});

// Cerrar con ESC (si lo abre en compu)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !overlay.hidden) closeOverlay();
});



