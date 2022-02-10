import FastClick from "./fastclick";

document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 3.75 + "px";

window.addEventListener(
  "load",
  () => {
    FastClick.attach(document.body);
  },
  { passive: false }
);

document.documentElement.addEventListener(
  "touchmove",
  (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  },
  { passive: false }
);