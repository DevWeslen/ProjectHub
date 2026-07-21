let currentFilter = 'todos';

function filtrarProjetos(categoria) {
  currentFilter = categoria;
  
  // Atualiza botões de filtro ativos
  document.querySelectorAll('.filter-btn').forEach(btn => {
    if (btn.getAttribute('data-filter') === categoria) {
      btn.className = "filter-btn px-5 py-2.5 text-xs font-black rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 transition-all";
    } else {
      btn.className = "filter-btn px-5 py-2.5 text-xs font-black rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all";
    }
  });

  renderProjetos();
}

function renderProjetos() {
  const container = document.getElementById("lista-projetos");
  if (!container) return;

  container.innerHTML = "";

  const lang = localStorage.getItem('lang') || 'pt';

  const projetosFiltrados = currentFilter === 'todos' 
    ? projetos 
    : projetos.filter(p => p.categoria === currentFilter);

  projetosFiltrados.forEach(projeto => {
    const wrapper = document.createElement("div");
    wrapper.className = "gradient-card-wrapper h-full";

    const nome = (lang === 'en' && projeto.nomeEn) ? projeto.nomeEn : projeto.nome;
    const descricao = (lang === 'en' && projeto.descricaoEn) ? projeto.descricaoEn : projeto.descricao;
    const detailsLabel = lang === 'en' ? 'Technical Details' : 'Ver Detalhes Técnicos';

    wrapper.innerHTML = `
      <div class="glass-card card-shine rounded-[1.2rem] p-6 h-full flex flex-col relative group overflow-hidden">
        <!-- Selo de Tipo de Imagem -->
        <div class="absolute top-3 left-3 z-20 ${projeto.imagemReal 
          ? 'bg-emerald-600/90 border-emerald-400/30 text-white' 
          : 'bg-slate-950/80 border-white/15 text-slate-300'} text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full backdrop-blur-md transition-opacity border">
          ${projeto.imagemReal 
            ? (lang === 'en' ? '📸 Real Screenshot' : '📸 Imagem Real') 
            : (lang === 'en' ? '🎨 Illustrative' : '🎨 Ilustrativa')}
        </div>

        <!-- Container da Imagem -->
        <div class="overflow-hidden rounded-xl mb-5 w-full h-52 bg-slate-950 border border-slate-200/60 dark:border-slate-800 relative">
          <img
            src="${projeto.imagem || 'https://via.placeholder.com/300x180?text=Projeto+Corporativo'}"
            alt="${nome}"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${projeto.classeFiltro || ''}"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60"></div>
        </div>

        <!-- Categoria Badge -->
        <div class="flex items-center gap-2 mb-2">
          <span class="inline-block px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-black rounded-full uppercase tracking-widest border border-blue-500/20">
            ${projeto.categoria}
          </span>
        </div>

        <!-- Título -->
        <h3 class="font-black text-lg sm:text-xl mb-2 text-slate-900 dark:text-white font-heading leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">${nome}</h3>

        <!-- Descrição -->
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-5 line-clamp-3 leading-relaxed">
          ${descricao}
        </p>

        <!-- Tecnologias em Badges Neon -->
        <div class="flex gap-1.5 flex-wrap mb-6">
          ${projeto.tecnologias.slice(0, 4).map(tech => `
            <span class="text-[10px] bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 px-3 py-1 rounded-lg border border-slate-200/80 dark:border-slate-700/80 font-bold tracking-wide">
              ${tech}
            </span>
          `).join("")}
        </div>

        <!-- Botão Principal de Detalhes -->
        <button 
          onclick="abrirDetalhes('${projeto.id}')" 
          class="mt-auto w-full bg-gradient-to-r from-slate-900 to-slate-950 hover:from-blue-600 hover:to-indigo-600 text-white dark:from-slate-800 dark:to-slate-900 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-xs font-black py-3 px-4 rounded-xl text-center transition-all duration-300 shadow-md group-hover:shadow-blue-500/30 flex items-center justify-center gap-2">
          <span>${detailsLabel}</span>
          <span class="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    `;

    container.appendChild(wrapper);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjetos();
});
