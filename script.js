const intro = document.getElementById("intro");
const flowersScreen = document.getElementById("flowersScreen");
const heartBtn = document.getElementById("heartBtn");
const bouquetBtn = document.getElementById("bouquetBtn");

const overlay = document.getElementById("overlay");
const closeCard = document.getElementById("closeCard");

let built = false;

heartBtn.addEventListener("click", () => {
  // Cambia a pantalla de flores
  intro.hidden = true;
  flowersScreen.hidden = false;

  // Dispara animación de construcción
  // (se añade en el siguiente frame para asegurar que el DOM ya cambió)
  requestAnimationFrame(() => {
    flowersScreen.classList.add("build");
  });

  built = true;
});

bouquetBtn.addEventListener("click", () => {
  if (!built) return;

  overlay.hidden = false;
  // Trigger animation
  requestAnimationFrame(() => {
    overlay.classList.add("showCard");
  });
});

function closeOverlay(){
  overlay.classList.remove("showCard");
  overlay.hidden = true;
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
