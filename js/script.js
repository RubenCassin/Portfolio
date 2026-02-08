// Menu burger (simple + accessible)
const burger = document.getElementById("burger");
const navMenu = document.getElementById("navMenu");

// Si le HTML n'a pas le menu (ou si le fichier est inclus sur une autre page), on évite les erreurs.
if (!burger || !navMenu) {
  console.warn("Menu burger: éléments introuvables (#burger ou #navMenu)");
} else {

function openMenu() {
  burger.classList.add("is-open");
  navMenu.classList.add("is-open");
  burger.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  burger.classList.remove("is-open");
  navMenu.classList.remove("is-open");
  burger.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  const isOpen = navMenu.classList.contains("is-open");
  if (isOpen) closeMenu();
  else openMenu();
}

/* Ouvrir/fermer au clic sur le burger */
  burger.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

/* Fermer quand on clique sur un lien */
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });

/* Fermer si clic en dehors */
  document.addEventListener("click", (e) => {
    const clickedInsideMenu = navMenu.contains(e.target);
    const clickedBurger = burger.contains(e.target);

    if (!clickedInsideMenu && !clickedBurger) closeMenu();
  });

/* Fermer avec Escape */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

/* Si on repasse en desktop, on ferme */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 600) closeMenu();
  });
}


lucide.createIcons();