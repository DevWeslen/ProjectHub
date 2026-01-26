const container = document.getElementById("lista-certificados");

certificados.forEach(cert => {
  const div = document.createElement("div");
  div.className = "bg-white rounded-lg shadow p-6 border-l-4 border-black";

  div.innerHTML = `
    <h2 class="font-bold text-lg break-words">${cert.titulo}</h2>
    <p class="text-sm text-gray-600">${cert.detalhes}</p>
    <div class="mt-4 flex items-center gap-3">
      <span class="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
        ✅ Curso validado
      </span>
      <button onclick="abrirCertificado('${cert.link}')" class="text-sm text-primary font-medium hover:underline">
        📄 Visualizar Curso
      </button>
    </div>
  `;

  container.appendChild(div);
});
