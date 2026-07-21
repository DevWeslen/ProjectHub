// Gerenciamento de Idioma (i18n: PT / EN)
let currentLang = localStorage.getItem('lang') || 'pt';

const i18nDictionary = {
  pt: {
    curriculumBtn: "📄 Currículo PDF",
    headerSubtitle: "Engenharia de Software • Análise de Dados • Docência • Pesquisa",
    diplomasTitle: "Meus Diplomas",
    diplomasDesc: "Graduação, tecnólogo e formações acadêmicas.",
    diplomasLink: "Ver meus diplomas",
    certificadosTitle: "Meus Certificados",
    certificadosDesc: "Cursos, eventos, palestras e especializações.",
    certificadosLink: "Ver meus certificados",
    artigosTitle: "Meus Artigos Científicos",
    artigosDesc: "Artigos publicados em congressos e revistas científicas.",
    artigosLink: "Ver meus artigos",
    expertiseTitle: "Expertise & Soluções Estratégicas",

    // Expertise Cards
    expIaTitle: "Inteligência Artificial Aplicada",
    expIaB1: "Fluxos automatizados com IA Generativa (OpenAI API) e n8n para insights e relatórios.",
    expIaB2: "Pré-análise logística e identificação de padrões operacionais com IA.",
    expIaB3: "Pipelines inteligentes para enriquecimento de dados e análise preditiva.",

    expDataTitle: "Engenharia de Dados & Automação",
    expDataB1: "Desenvolvimento de pipelines ETL/ELT para dados logísticos e telemetria.",
    expDataB2: "Automação de processos com Power Automate, n8n e scripts Python.",
    expDataB3: "Integração de múltiplas fontes (PostgreSQL, SQL Server, APIs) para centralização analítica.",

    expBiTitle: "Business Intelligence & Analytics",
    expBiB1: "Dashboards executivos em tempo real para KPIs logísticos e performance.",
    expBiB2: "Consultas SQL avançadas e modelagem analítica para grandes volumes de dados.",
    expBiB3: "Soluções orientadas a dados para suporte estratégico e melhoria contínua.",

    expArchTitle: "Arquitetura & Sistemas Inteligentes",
    expArchB1: "Sistemas full stack escaláveis com Next.js, TypeScript e Prisma ORM.",
    expArchB2: "Soluções focadas em rastreabilidade, geolocalização e auditoria operacional.",
    expArchB3: "Arquiteturas modernas com foco em performance e integração sistêmica.",

    expResearchTitle: "Pesquisa, Inovação & IA",
    expResearchB1: "Pesquisas voltadas à aplicação de Redes Neurais e Análise Preditiva.",
    expResearchB2: "Autor de artigos científicos nacionais e internacionais em IA e Engenharia.",
    expResearchB3: "Participação em iniciativas de inovação integrando dados e automação.",

    projectsTitle: "Projetos Estratégicos & Relevantes",
    filterAll: "Todos os Projetos",
    filterData: "Engenharia & Dados",
    filterWeb: "Desenvolvimento Web",
    filterAcademico: "Acadêmico",
    githubBtn: "Ver no GitHub",
    detailsBtn: "Detalhes",
    roleLabel: "Atuação & Impacto:",
    techsLabel: "Tecnologias Utilizadas:"
  },
  en: {
    curriculumBtn: "📄 Resume PDF",
    headerSubtitle: "Software Engineering • Data Analytics • Teaching • Research",
    diplomasTitle: "My Diplomas",
    diplomasDesc: "Bachelor degrees, diplomas & academic background.",
    diplomasLink: "View my diplomas",
    certificadosTitle: "My Certificates",
    certificadosDesc: "Courses, events, talks and specializations.",
    certificadosLink: "View my certificates",
    artigosTitle: "Scientific Articles",
    artigosDesc: "Articles published in conferences and scientific journals.",
    artigosLink: "View my articles",
    expertiseTitle: "Expertise & Strategic Solutions",

    // Expertise Cards
    expIaTitle: "Applied Artificial Intelligence",
    expIaB1: "Automated workflows with Generative AI (OpenAI API) and n8n for insights and reporting.",
    expIaB2: "Logistics pre-analysis and operational pattern identification using AI.",
    expIaB3: "Smart pipelines for data enrichment and predictive analytics.",

    expDataTitle: "Data Engineering & Automation",
    expDataB1: "Development of ETL/ELT pipelines for logistics data and telemetry.",
    expDataB2: "Process automation with Power Automate, n8n, and Python scripts.",
    expDataB3: "Multi-source integration (PostgreSQL, SQL Server, APIs) for analytics centralization.",

    expBiTitle: "Business Intelligence & Analytics",
    expBiB1: "Real-time executive dashboards for logistics KPIs and performance.",
    expBiB2: "Advanced SQL queries and analytical modeling for large data volumes.",
    expBiB3: "Data-driven solutions for strategic support and continuous improvement.",

    expArchTitle: "Architecture & Intelligent Systems",
    expArchB1: "Scalable full-stack systems with Next.js, TypeScript, and Prisma ORM.",
    expArchB2: "Solutions focused on traceability, geolocation, and operational auditing.",
    expArchB3: "Modern architectures focused on performance and systemic integration.",

    expResearchTitle: "Research, Innovation & AI",
    expResearchB1: "Research focused on Neural Networks and Predictive Analytics application.",
    expResearchB2: "Author of national and international scientific articles in AI & Engineering.",
    expResearchB3: "Participation in innovation initiatives integrating data and automation.",

    projectsTitle: "Strategic & Featured Projects",
    filterAll: "All Projects",
    filterData: "Data Engineering",
    filterWeb: "Web Development",
    filterAcademico: "Academic",
    githubBtn: "View on GitHub",
    detailsBtn: "Details",
    roleLabel: "Role & Impact:",
    techsLabel: "Technologies Used:"
  }
};

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  applyTranslations();
  if (typeof renderProjetos === 'function') {
    renderProjetos();
  }
  updateLangButton();
}

function toggleLanguage() {
  setLanguage(currentLang === 'pt' ? 'en' : 'pt');
}

function updateLangButton() {
  const btn = document.getElementById('lang-toggle-btn');
  if (btn) {
    btn.textContent = currentLang === 'pt' ? '🇺🇸 EN' : '🇧🇷 PT';
  }
}

function applyTranslations() {
  const dict = i18nDictionary[currentLang] || i18nDictionary.pt;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Swap curriculum PDF link based on language
  const cvLink = document.getElementById('curriculum-link');
  if (cvLink) {
    const hrefKey = currentLang === 'en' ? 'data-href-en' : 'data-href-pt';
    cvLink.href = cvLink.getAttribute(hrefKey) || cvLink.getAttribute('data-href-pt');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  updateLangButton();
});
