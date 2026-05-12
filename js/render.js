const container = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const card = document.createElement("div");

  card.className =
    "bg-white rounded-lg shadow hover:shadow-lg transition p-5 flex flex-col relative group";

  card.innerHTML = `
    <!-- Selo de Imagem Ilustrativa -->
    <div class="absolute top-7 left-7 z-10 bg-black/60 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm opacity-0 group-hover:opacity-100 transition">
      Imagem Ilustrativa
    </div>

    <!-- Imagem com Filtro -->
    <div class="overflow-hidden rounded mb-4 w-full h-48 bg-gray-100 border border-gray-200">
      <img
        src="${projeto.imagem || 'https://via.placeholder.com/300x180?text=Projeto+Corporativo'}"
        alt="Imagem do projeto ${projeto.nome}"
        class="w-full h-full object-cover transition duration-500 hover:scale-110 ${projeto.classeFiltro || ''}"
      />
    </div>

    <!-- Conteúdo -->
    <h3 class="font-bold text-lg mb-2 text-secondary">${projeto.nome}</h3>

    <p class="text-sm text-gray-600 mb-4 line-clamp-3">
      ${projeto.descricao}
    </p>

    <!-- Tecnologias -->
    <div class="flex gap-2 flex-wrap mb-6">
      ${projeto.tecnologias.slice(0, 4).map(tech => `
        <span class="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded border border-gray-200">
          ${tech}
        </span>
      `).join("")}
    </div>

    <!-- Botão Único (Sem GitHub) -->
    <button 
      onclick="abrirDetalhes('${projeto.id}')" 
      class="mt-auto bg-primary text-white py-2 rounded text-center hover:bg-primaryDark transition font-medium">
      Ver Detalhes Técnicos
    </button>
  `;

  container.appendChild(card);
});
