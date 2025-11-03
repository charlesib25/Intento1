function abrirVisor(url) {
  const modal = document.getElementById('visor-modal');
  const frame = document.getElementById('visor-frame');
  frame.src = url;
  modal.style.display = 'flex';
}

function cerrarVisor() {
  const modal = document.getElementById('visor-modal');
  const frame = document.getElementById('visor-frame');
  frame.src = '';
  modal.style.display = 'none';
}
