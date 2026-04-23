const modos = ["auto", "light", "dark"];
let indice = 0;

function aplicarModo(modo) {
  const html = document.documentElement;
  if (modo === "auto") {
    html.removeAttribute("data-theme");
    const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    html.setAttribute("data-theme", dark ? "dark" : "light");
  } else {
    html.setAttribute("data-theme", modo);
  }
  document.getElementById("modo-actual").innerText =
    modo.charAt(0).toUpperCase() + modo.slice(1);
}

function cambiarModo() {
  indice = (indice + 1) % modos.length;
  const nuevoModo = modos[indice];
  localStorage.setItem("modo", nuevoModo);
  aplicarModo(nuevoModo);
}

(function () {
  const modoGuardado = localStorage.getItem("modo") || "auto";
  indice = modos.indexOf(modoGuardado);
  aplicarModo(modoGuardado);
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (modos[indice] === "auto") aplicarModo("auto");
    });
})();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll(".reveal").forEach((section) => {
  observer.observe(section);
});
