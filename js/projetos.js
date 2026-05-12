const projetos = [
  {
    id: "ia-logistica-wa",
    nome: "IA Generativa & Curadoria Logística",
    descricao: "Solução de Inteligência Artificial para análise estratégica de movimentações logísticas e distribuição automatizada de insights via WhatsApp.",
    descricaoCompleta: "Implementação de um ecossistema inteligente utilizando IA Generativa para otimizar o fluxo de informações executivas. O sistema realiza a coleta diária de dados de transferências logísticas, processa as informações através de modelos de linguagem (OpenAI) e orquestra a entrega de insights críticos diretamente para os grupos de gestão.",
    atuacao: "Arquitetei o fluxo completo no n8n integrado à API da OpenAI. O sistema é responsável pela curadoria automatizada de dados operacionais, gerando pré-análises estratégicas que chegam via WhatsApp nas primeiras horas do dia. Resultado: Redução drástica na triagem manual e aceleração do processo decisório em até 50%.",
    tecnologias: ["n8n", "OpenAI API", "WhatsApp API", "Node.js", "Analytics"],
    imagem: "assets/projetos/ia_logistica.png",
    classeFiltro: "brightness-110",
    github: null
  },
  {
    id: "bi-agro-suinos",
    nome: "BI Analítico: Conversão Alimentar Suína",
    descricao: "Plataforma de Business Intelligence para otimização nutricional e controle de custos no agronegócio.",
    descricaoCompleta: "Desenvolvimento de uma solução analítica avançada voltada à nutrição animal. O projeto foca na correlação técnica entre níveis proteicos de rações e índices de conversão alimentar, permitindo uma visão científica sobre a eficiência produtiva.",
    atuacao: "Realizei a modelagem de dados complexa e a criação de dashboards em Power BI. A ferramenta permite correlacionar a composição das rações com o desempenho animal, identificando fornecedores e matérias-primas mais eficientes. O projeto contribuiu para ganhos estimados de 15-20% na eficiência da análise gerencial e precisão nutricional.",
    tecnologias: ["Power BI", "SQL Server", "MySQL", "Data Modeling", "AgroTech"],
    imagem: "assets/projetos/agro_nutricao.png",
    classeFiltro: "hue-rotate-15",
    github: null
  },
  {
    id: "data-arch-high",
    nome: "Arquitetura de Dados High Performance",
    descricao: "Reestruturação de arquitetura cloud para processamento de alto volume e otimização de fluxos analíticos.",
    descricaoCompleta: "Projeto de engenharia de dados focado em escalabilidade e performance. O desafio era reestruturar o pipeline de dados que sofria com gargalos de processamento, migrando de conexões diretas para uma arquitetura baseada em Power BI Service e Dataflows.",
    atuacao: "Liderei a migração de conexões AWS para Dataflows Gen1, implementando pipelines ETL/ELT otimizados. O resultado foi uma redução drástica no tempo de carregamento de dashboards, saindo de 8 horas para apenas 15 minutos, mesmo em bases com milhões de registros, garantindo estabilidade e governança dos dados.",
    tecnologias: ["Power BI Service", "Dataflows", "AWS Cloud", "ETL/ELT", "Performance Tuning"],
    imagem: "assets/projetos/arquitetura_cloud.png",
    classeFiltro: "saturate-150",
    github: null
  },
  {
    id: "dgh-torre",
    nome: "Sistema DGH — Torre de Controle Operacional",
    descricao: "Sistema full stack para gestão de frota, telemetria e análise de comportamento de motoristas em tempo real.",
    descricaoCompleta: "Desenvolvimento de uma plataforma corporativa centralizada para monitoramento de performance operacional. O sistema integra dados de telemetria para fornecer uma visão 360º da frota, focando na segurança e redução de riscos operacionais.",
    atuacao: "Desenvolvi a arquitetura full stack e implementei módulos inteligentes de monitoramento (excesso de velocidade, motor ocioso, direção agressiva). Estruturei a identificação automatizada de motoristas via cruzamento de escalas operacionais e dashboards executivos para apoio à tomada de decisão imediata.",
    tecnologias: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "tRPC", "Tailwind CSS"],
    imagem: "assets/projetos/dgh.png",
    classeFiltro: "contrast-125",
    github: null
  },
  {
    id: "transf-logistica",
    nome: "Torre de Controle — Transferência Logística",
    descricao: "Monitoramento em tempo real de cargas e análise preditiva de atrasos.",
    descricaoCompleta: "Monitoramento logístico em tempo real com integração de telemetria GPS (Sascar).",
    atuacao: "Dashboards em tempo real, mapas interativos e sincronização de dados GPS.",
    tecnologias: ["Next.js", "TypeScript", "Leaflet", "PostgreSQL", "Prisma ORM"],
    imagem: "assets/projetos/logistica.png",
    classeFiltro: "brightness-90",
    github: null
  },
  {
    id: "gestao-socorro",
    nome: "Sistema Inteligente de Resposta a Incidentes",
    descricao: "Solução de geolocalização e Service Desk para otimização de socorro mecânico e redução de tempos de resposta.",
    descricaoCompleta: "Plataforma voltada à gestão de ocorrências e incidentes de frota. Utiliza inteligência geográfica para automatizar a logística de socorro, garantindo agilidade em situações críticas.",
    atuacao: "Implementei a lógica de proximidade baseada em cálculos geoespaciais, permitindo a identificação automática da base de socorro mais próxima. Resultado: Redução estimada entre 25% e 35% no tempo médio de resposta a ocorrências, aumentando significativamente a eficiência operacional em campo.",
    tecnologias: ["Next.js", "PostgreSQL", "Geospatial Logic", "RBAC", "Service Desk"],
    imagem: "assets/projetos/socorro.png",
    classeFiltro: "sepia-25",
    github: null
  },
  {
    id: "auditoria-picking",
    nome: "Control Tower — Auditoria de Picking e Bipagem",
    descricao: "Sistema de auditoria operacional e BI para rastreabilidade de cargas e redução de divergências logísticas.",
    descricaoCompleta: "Solução de Business Intelligence desenvolvida para monitorar o ciclo de movimentação de mercadorias. O foco é a auditoria em tempo real dos processos de picking e transbordo para eliminar falhas no carregamento.",
    atuacao: "Criei dashboards operacionais e implementei consultas SQL avançadas com CTEs para consolidação analítica de alto volume. O sistema permitiu a identificação imediata de pendências e volumes em transbordo, garantindo performance e confiabilidade analítica total sobre a operação de carga.",
    tecnologias: ["Next.js", "SQL Avançado", "PostgreSQL", "Data Audit", "Real-time Monitoring"],
    imagem: "assets/projetos/auditoria.png",
    classeFiltro: "grayscale-0",
    github: null
  },
  {
    id: "project-flow",
    nome: "ProjectFlow — Gestão de Projetos",
    descricao: "Ecossistema completo para gestão de cronogramas, tarefas, análise de riscos e produtividade de equipes.",
    descricaoCompleta: "Desenvolvimento de uma plataforma moderna focada no ciclo de vida de projetos. O sistema oferece ferramentas de gestão ágil e análise estratégica para controle de prazos e performance.",
    atuacao: "Arquitetei a aplicação e modelei o banco de dados. Implementei funcionalidades avançadas como quadro Kanban, timelines visuais e ferramentas de análise estratégica (SWOT, 5W2H e análise de causa raiz). O sistema provê acompanhamento consolidado de progresso e gestão de riscos em tempo real.",
    tecnologias: ["Next.js", "TypeScript", "Prisma ORM", "Zustand", "Recharts", "Mermaid.js"],
    imagem: "assets/projetos/projectflow.png",
    classeFiltro: "invert-0",
    github: null
  }
];
