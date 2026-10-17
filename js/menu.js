document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector("#menu-principal");
  const toggle = document.querySelector(".menu-toggle");
  const dropdown = document.querySelector(".nav-dropdown");
  const dropdownLink = dropdown?.querySelector(":scope > .dropdown-trigger");
  if (!menu || !toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    toggle.textContent = isOpen ? "✕" : "☰";
  });

  if (dropdown && dropdownLink) {
    dropdownLink.addEventListener("click", (event) => {
      if (window.innerWidth <= 900) {
        event.preventDefault();
        dropdown.classList.toggle("submenu-open");
      }
    });
  }

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 900 && !link.closest(".nav-dropdown")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menú");
        toggle.textContent = "☰";
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      menu.classList.remove("is-open");
      dropdown?.classList.remove("submenu-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    }
  });
});
