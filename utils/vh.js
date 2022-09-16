export const vh = () => {
  if (typeof window === "undefined") return;
  const adjustVh = () => {
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  window.addEventListener("resize", adjustVh);

  adjustVh();
}