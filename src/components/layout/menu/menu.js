// Підключення функціоналу "Чортоги Фрілансера"
import {
  addTouchAttr,
  bodyLockStatus,
  bodyLockToggle,
  FLS,
} from "@js/common/functions.js";

import "./menu.scss";

function setSubMenusOpen(open) {
  document.querySelectorAll(".menu__item--has-sub").forEach((item) => {
    const toggle = item.querySelector(".menu__sub-toggle");
    const subList = item.querySelector(".menu__sub-list");
    if (open) {
      item.classList.add("menu__item--open");
      toggle?.setAttribute("aria-expanded", "true");
      subList?.setAttribute("aria-hidden", "false");
    } else {
      item.classList.remove("menu__item--open");
      toggle?.setAttribute("aria-expanded", "false");
      subList?.setAttribute("aria-hidden", "true");
    }
  });
}

export function menuInit() {
  document.addEventListener("click", function (e) {
    // Toggle hamburger drawer
    if (bodyLockStatus && e.target.closest("[data-fls-menu]")) {
      bodyLockToggle();
      document.documentElement.toggleAttribute("data-fls-menu-open");
      // Auto-expand all submenus when drawer opens, collapse when closes
      const isOpen =
        document.documentElement.hasAttribute("data-fls-menu-open");
      setSubMenusOpen(isOpen);
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
      setSubMenusOpen(false);
    }

    // Desktop: close JS-opened dropdown when clicking outside the item (not on hamburger)
    if (
      !e.target.closest(".menu__item--has-sub") &&
      !e.target.closest("[data-fls-menu]")
    ) {
      document
        .querySelectorAll(".menu__item--has-sub.menu__item--open")
        .forEach((item) => {
          item.classList.remove("menu__item--open");
          item
            .querySelector(".menu__sub-toggle")
            ?.setAttribute("aria-expanded", "false");
          item
            .querySelector(".menu__sub-list")
            ?.setAttribute("aria-hidden", "true");
        });
    }
  });
}

document.querySelector("[data-fls-menu]")
  ? window.addEventListener("load", menuInit)
  : null;
