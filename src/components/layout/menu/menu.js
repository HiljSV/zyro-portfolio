// Підключення функціоналу "Чортоги Фрілансера"
import {
  addTouchAttr,
  bodyLockStatus,
  bodyLockToggle,
  FLS,
} from "@js/common/functions.js";

import "./menu.scss";

export function menuInit() {
  document.addEventListener("click", function (e) {
    // Toggle hamburger drawer
    if (bodyLockStatus && e.target.closest("[data-fls-menu]")) {
      bodyLockToggle();
      document.documentElement.toggleAttribute("data-fls-menu-open");
    }

    // Toggle submenu on arrow button click (mobile/tablet drawer)
    const toggleBtn = e.target.closest(".menu__sub-toggle");
    if (toggleBtn) {
      const item = toggleBtn.closest(".menu__item--has-sub");
      const isOpen = item.classList.toggle("menu__item--open");
      toggleBtn.setAttribute("aria-expanded", String(isOpen));
      item
        .querySelector(".menu__sub-list")
        .setAttribute("aria-hidden", String(!isOpen));
    }

    // Close drawer when a nav or sub-nav link is clicked while drawer is open
    if (
      e.target.closest(".menu__link, .menu__sub-link") &&
      document.documentElement.hasAttribute("data-fls-menu-open")
    ) {
      bodyLockToggle();
      document.documentElement.removeAttribute("data-fls-menu-open");
    }
  });
}

document.querySelector("[data-fls-menu]")
  ? window.addEventListener("load", menuInit)
  : null;
