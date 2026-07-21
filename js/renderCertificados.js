const container = document.getElementById("lista-certificados");

certificados.forEach(cert => {
  const div = document.createElement("div");
  div.className = "bg-white dark:bg-slate-900 rounded-2xl shadow-sm hover:shadow-md border border-slate-200/80 dark:border-slate-800 p-5 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4";

  div.innerHTML = `
    <div>
      <h2 class="font-bold text-base sm:text-lg text-slate-900 dark:text-white leading-snug break-words">${cert.titulo}</h2>
      <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">${cert.detalhes}</p>
    </div>
    <div class="flex items-center gap-3 shrink-0">
      <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
        ✅ Validado
      </span>
      <button onclick="abrirCertificado('${cert.link}')" class="text-xs bg-slate-900 hover:bg-indigo-600 dark:bg-slate-800 dark:hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-xl transition shadow-sm">
        📄 Visualizar PDF
      </button>
    </div>
  `;

  container.appendChild(div);
});
