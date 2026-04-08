document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll('.link-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.style.transform = "scale(0.95)";
      setTimeout(() => btn.style.transform = "scale(1)", 150);
    });
  });

});

// MAPA
function abrirMapa() {
  const endereco = encodeURIComponent(
    "R. Castro Alves, 331 - Centro, Gov. Valadares - MG"
  );

  const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);

  if (isIOS) {
    window.location.href = `https://maps.apple.com/?q=${endereco}`;
  } else {
    window.location.href = `https://www.google.com/maps/search/?api=1&query=${endereco}`;
  }
}