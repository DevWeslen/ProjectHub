const container = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const card = document.createElement("div");

  card.className =
    "bg-white rounded-lg shadow hover:shadow-lg transition p-5 flex flex-col";

  card.innerHTML = `
    <!-- Imagem -->
    <img
      src="${projeto.imagem}" 
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
        <span class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
          ${tech}
        </span>
      `).join("")}
    </div>

    <!-- Botão -->
    <button
      class="mt-auto bg-black text-white py-2 rounded hover:bg-gray-800 transition">
      Ver projeto
    </button>
  `;

  container.appendChild(card);
});
