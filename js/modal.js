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
  
  const projeto = projetos.find(p => p.id === projetoId || p.nome === projetoId);
  if (!projeto) return;

  const lang = localStorage.getItem('lang') || 'pt';
  const nome = (lang === 'en' && projeto.nomeEn) ? projeto.nomeEn : projeto.nome;
  const descComp = (lang === 'en' && projeto.descricaoCompletaEn) ? projeto.descricaoCompletaEn : (projeto.descricaoCompleta || projeto.descricao);
  const atuacao = (lang === 'en' && projeto.atuacaoEn) ? projeto.atuacaoEn : projeto.atuacao;

  const labels = {
    overview: lang === 'en' ? 'Overview' : 'Visão Geral',
    role: lang === 'en' ? 'My Role & Impact' : 'Minha Atuação & Impacto',
    techs: lang === 'en' ? 'Technologies' : 'Tecnologias',
    confidentialityTitle: lang === 'en' ? 'Confidentiality Note:' : 'Nota de Confidencialidade:',
    confidentialityText: (() => {
      if (projeto.imagemReal) {
        return lang === 'en'
          ? 'The source code for this enterprise system is proprietary/third-party property and cannot be shared. The image shown is a real screenshot of the application.'
          : 'O código-fonte deste sistema é de propriedade de terceiros/desenvolvimento interno e não pode ser compartilhado. A imagem apresentada é uma captura de tela real da aplicação.';
      } else {
        return lang === 'en'
          ? 'The source code for this enterprise system is proprietary/third-party property and cannot be shared. The image shown is purely illustrative.'
          : 'O código-fonte deste sistema é de propriedade de terceiros/desenvolvimento interno e não pode ser compartilhado. A imagem apresentada é meramente ilustrativa.';
      }
    })()
  };

  conteudo.innerHTML = `
    <h2 class="text-2xl font-bold text-secondary dark:text-white mb-4">${nome}</h2>
    
    <div class="mb-6">
      <h3 class="font-bold text-primary dark:text-blue-400 mb-2">${labels.overview}</h3>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">${descComp}</p>
    </div>

    <div class="mb-6">
      <h3 class="font-bold text-primary dark:text-blue-400 mb-2">${labels.role}</h3>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">${atuacao}</p>
    </div>

    <div class="mb-6">
      <h3 class="font-bold text-primary dark:text-blue-400 mb-2">${labels.techs}</h3>
      <div class="flex flex-wrap gap-2 mb-6">
        ${projeto.tecnologias.map(tech => `
          <span class="text-xs bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full font-medium border border-blue-200 dark:border-blue-800">
            ${tech}
          </span>
        `).join('')}
      </div>
    </div>

    <!-- AVISO DE CONFIDENCIALIDADE -->
    <div class="bg-amber-50 dark:bg-amber-950/40 border-l-4 border-amber-400 p-4 rounded-r-lg text-xs text-amber-900 dark:text-amber-200 italic">
      <p class="flex items-start gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m0-6V9m0 12a9 9 0 110-18 9 9 0 010 18z" />
        </svg>
        <span>
          <strong>${labels.confidentialityTitle}</strong> ${labels.confidentialityText}
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
