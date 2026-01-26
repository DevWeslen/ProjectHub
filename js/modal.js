// ================== DIPLOMAS ==================
function abrirDiploma(pdf) {
  const modal = document.getElementById('modalDiploma');
  const iframe = document.getElementById('iframeDiploma');

  iframe.src = pdf;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function fecharDiploma() {
  const modal = document.getElementById('modalDiploma');
  const iframe = document.getElementById('iframeDiploma');

  iframe.src = '';
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// ================== CERTIFICADOS ==================
function abrirCertificado(pdf) {
  const modal = document.getElementById('modalCertificado');
  const iframe = document.getElementById('iframeCertificado');

  iframe.src = pdf;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function fecharCertificado() {
  const modal = document.getElementById('modalCertificado');
  const iframe = document.getElementById('iframeCertificado');

  iframe.src = '';
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// ================== ARTIGOS ==================
function abrirArtigo(pdf) {
  const modal = document.getElementById('modalArtigo');
  const iframe = document.getElementById('iframeArtigo');

  iframe.src = pdf;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function fecharArtigo() {
  const modal = document.getElementById('modalArtigo');
  const iframe = document.getElementById('iframeArtigo');

  iframe.src = '';
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}
