export function enableSmoothScroll() {
  if (typeof window === "undefined") return;

  const html = document.documentElement;

  // Avoid duplicate initialization
  if (html.hasAttribute("data-smooth-scroll")) return;
  html.setAttribute("data-smooth-scroll", "true");

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
