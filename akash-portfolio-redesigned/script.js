const cursor = document.querySelector(".cursor-glow");

if (cursor && window.matchMedia("(pointer:fine)").matches) {
  window.addEventListener("mousemove", (e) => {
    cursor.animate(
      { left: `${e.clientX}px`, top: `${e.clientY}px` },
      { duration: 450, fill: "forwards" }
    );
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
});
