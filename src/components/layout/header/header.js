import "./header.scss";

// Hide header on scroll down, show on scroll up
const SCROLL_THRESHOLD = 80; // px from top before hiding starts

let lastScrollY = window.scrollY;

window.addEventListener(
  "scroll",
  () => {
    const header = document.querySelector(".header");
    if (!header) return;

    const currentY = window.scrollY;

    if (currentY < SCROLL_THRESHOLD) {
      // Near top — always visible
      header.classList.remove("header--hidden");
    } else if (currentY > lastScrollY) {
      // Scrolling down — hide
      header.classList.add("header--hidden");
    } else {
      // Scrolling up — show
      header.classList.remove("header--hidden");
    }

    lastScrollY = currentY;
  },
  { passive: true },
);
