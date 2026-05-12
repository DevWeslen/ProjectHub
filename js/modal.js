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
// ================== DETALHES DO PROJETO ==================
function abrirDetalhes(projetoId) {
  const modal = document.getElementById('modalDetalhes');
  const conteudo = document.getElementById('conteudoDetalhes');
  
  // Encontra o projeto pelo ID ou Nome
  const projeto = projetos.find(p => p.id === projetoId || p.nome === projetoId);
  
  if (!projeto) return;

  conteudo.innerHTML = `
    <h2 class="text-2xl font-bold text-secondary mb-4">${projeto.nome}</h2>
    
    <div class="mb-6">
      <h3 class="font-bold text-primary mb-2">Visão Geral</h3>
      <p class="text-gray-700 leading-relaxed">${projeto.descricaoCompleta || projeto.descricao}</p>
    </div>

    <div class="mb-6">
      <h3 class="font-bold text-primary mb-2">Minha Atuação</h3>
      <p class="text-gray-700 leading-relaxed">${projeto.atuacao}</p>
    </div>

    <div>
      <h3 class="font-bold text-primary mb-2">Tecnologias</h3>
      <div class="flex flex-wrap gap-2 mb-6">
        ${projeto.tecnologias.map(tech => `
          <span class="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
            ${tech}
          </span>
        `).join('')}
      </div>
    </div>

    <!-- AVISO DE CONFIDENCIALIDADE -->
    <div class="bg-amber-50 border-l-4 border-amber-400 p-4 rounded text-sm text-amber-800 italic">
      <p class="flex items-start gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m0-6V9m0 12a9 9 0 110-18 9 9 0 010 18z" />
        </svg>
        <span>
          <strong>Nota de Confidencialidade:</strong> O código-fonte deste sistema é de propriedade de terceiros/desenvolvimento externo e não pode ser compartilhado. A imagem apresentada é meramente ilustrativa.
        </span>
      </p>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function fecharDetalhes() {
  const modal = document.getElementById('modalDetalhes');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}
