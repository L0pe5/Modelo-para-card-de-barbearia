// Efeito de clique nos botões
document.querySelectorAll('.link-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.style.transform = "scale(0.95)";
    setTimeout(() => btn.style.transform = "scale(1)", 150);
  });

  function abrirMapa() {
  const endereco = encodeURIComponent(
    "R. Castro Alves, 331 - Centro, Gov. Valadares - MG, 35010-310"
  );

  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isIOS = /iPad|iPhone|iPod/.test(userAgent);

  if (isIOS) {
    // Apple Maps
    window.location.href = `https://maps.apple.com/?q=${endereco}`;
  } else {
    // Google Maps (Android)
    window.location.href = `https://www.google.com/maps/search/?api=1&query=${endereco}`;
  }
}

});
