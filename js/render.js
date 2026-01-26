const container = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const card = document.createElement("div");

  card.className =
    "bg-white rounded-lg shadow hover:shadow-lg transition p-5 flex flex-col";

  card.innerHTML = `
    <!-- Imagem -->
    <img
      src="${projeto.imagem || 'https://via.placeholder.com/300x180?text=Projeto'}"
      alt="Imagem do projeto ${projeto.nome}"
      class="rounded mb-4 w-full h-48 object-cover"
    />

    <!-- Conteúdo -->
    <h3 class="font-bold text-lg mb-2">${projeto.nome}</h3>

    <p class="text-sm text-gray-600 mb-4">
      ${projeto.descricao}
    </p>

    <!-- Tecnologias -->
    <div class="flex gap-2 flex-wrap mb-4">
      ${projeto.tecnologias.map(tech => `
        <span class="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded">
          ${tech}
        </span>
      `).join("")}
    </div>

    <!-- Botão -->
    <a
      href="${projeto.github}"
      target="_blank"
      class="mt-auto bg-black text-white py-2 rounded text-center hover:bg-gray-800 transition">
      Ver projeto
    </a>
  `;

  container.appendChild(card);
});
