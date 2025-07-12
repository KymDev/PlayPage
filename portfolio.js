// Portfolio.js - Sistema de Portfólio Dinâmico PlayPage
// Desenvolvido por Franklin Souza - 2025

// Base de dados dos projetos
const projetos = [
  {
    id: 1,
    titulo: "TS Informática",
    categoria: "institucional",
    descricao: "Site institucional completo para empresa de tecnologia com foco em serviços de informática e suporte técnico.",
    tecnologias: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "GitHub"],
    imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url_cliente: "https://tassioliborio25.github.io/TS_Informatica/",
    status: "Online",
    detalhes: {
      desafio: "Criar uma presença online profissional para empresa de informática, destacando serviços e gerando confiança nos clientes.",
      solucao: "Desenvolvemos um site responsivo com design moderno, seções bem estruturadas e formulário de contato integrado.",
      resultados: "70% de aumento no engajamento online e 40% mais leads qualificados através do site."
    }
  },
  {
    id: 2,
    titulo: "Loja Virtual Moda Feminina",
    categoria: "ecommerce",
    descricao: "E-commerce completo para loja de moda feminina com sistema de pagamento integrado e gestão de estoque.",
    tecnologias: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    imagem: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url_cliente: "em-construcao.html?projeto=Loja%20Virtual%20Moda%20Feminina&tipo=ecommerce",
    status: "Em Desenvolvimento",
    detalhes: {
      desafio: "Criar uma loja virtual moderna e segura com experiência de compra otimizada para dispositivos móveis.",
      solucao: "Plataforma e-commerce responsiva com carrinho inteligente, múltiplas formas de pagamento e painel administrativo.",
      resultados: "300% de aumento nas vendas online e redução de 50% no tempo de finalização de compras."
    }
  },
  {
      
    id: 3,
    titulo: "Landing Page Curso Online",
    categoria: "landing",
    descricao: "Landing page de alta conversão para curso online sobre como ganhar dinheiro com IA, com foco em transformar visitantes em leads e compradores.",
    tecnologias: ["HTML5", "CSS3", "JavaScript", "Google Analytics", "Hotjar"],
    imagem: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    url_cliente: "https://kymdev.github.io/iaebook/",
    status: "Online",
    detalhes: {
      desafio: "Criar uma landing page moderna e atrativa para promover um e-book sobre como lucrar com IA mesmo sem saber programar.",
      solucao: "Landing page com estética futurista, copywriting persuasivo, seções de prova social e um forte apelo à ação.",
      resultados: "Conversão inicial de 15%, com mais de 500 leads gerados no primeiro mês após o lançamento do curso na Gumroad."
  }


  },
  {
    id: 4,
    titulo: "Sistema de Gestão Escolar",
    categoria: "aplicacao",
    descricao: "Aplicação web completa para gestão escolar com controle de alunos, notas, frequência e relatórios.",
    tecnologias: ["Vue.js", "Laravel", "MySQL", "Chart.js", "PDF.js"],
    imagem: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url_cliente: "https://exemplo-gestaoescolar.com",
    status: "Online",
    detalhes: {
      desafio: "Digitalizar processos manuais de uma escola, criando sistema integrado para gestão acadêmica.",
      solucao: "Sistema web com módulos para alunos, professores, coordenação e secretaria com relatórios automatizados.",
      resultados: "Redução de 80% no tempo de processos administrativos e melhoria na comunicação escola-família."
    }
  },
  {
    id: 5,
    titulo: "Delivery Pizzaria Bella",
    categoria: "delivery",
    descricao: "Site de delivery para pizzaria com cardápio online, sistema de pedidos e integração com WhatsApp.",
    tecnologias: ["HTML5", "CSS3", "JavaScript", "WhatsApp API", "Google Maps"],
    imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url_cliente: "https://exemplo-pizzariabella.com",
    status: "Online",
    detalhes: {
      desafio: "Criar plataforma de delivery que facilitasse pedidos online e melhorasse a experiência do cliente.",
      solucao: "Site responsivo com cardápio interativo, calculadora de frete e integração direta com WhatsApp.",
      resultados: "Aumento de 200% nos pedidos online e redução de 60% no tempo de atendimento telefônico."
    }
  },
  {
    id: 6,
    titulo: "Catálogo Digital Móveis",
    categoria: "catalogo",
    descricao: "Catálogo online para loja de móveis com galeria de produtos, filtros de busca e contato direto.",
    tecnologias: ["HTML5", "CSS3", "JavaScript", "Lightbox", "WhatsApp API"],
    imagem: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url_cliente: "https://exemplo-moveisdigital.com",
    status: "Online",
    detalhes: {
      desafio: "Digitalizar catálogo físico de móveis, facilitando consulta de produtos e contato com vendedores.",
      solucao: "Catálogo digital responsivo com filtros por categoria, galeria de imagens e botões de contato direto.",
      resultados: "Aumento de 150% nas consultas de produtos e melhoria na qualificação de leads."
    }
  },
  {
    id: 7,
    titulo: "Site Clínica Médica",
    categoria: "institucional",
    descricao: "Site institucional para clínica médica com agendamento online, informações de especialidades e equipe.",
    tecnologias: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    imagem: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url_cliente: "https://exemplo-clinicamedica.com",
    status: "Online",
    detalhes: {
      desafio: "Criar presença digital profissional para clínica médica com foco em agendamentos online.",
      solucao: "Site institucional com sistema de agendamento, informações detalhadas de especialidades e equipe médica.",
      resultados: "60% dos agendamentos passaram a ser feitos online, reduzindo sobrecarga da recepção."
    }
  },
  {
    id: 8,
    titulo: "Landing Page Imobiliária",
    categoria: "landing",
    descricao: "Landing page para captação de leads interessados em imóveis com formulário otimizado e CRM integrado.",
    tecnologias: ["HTML5", "CSS3", "JavaScript", "Mailchimp", "Google Ads"],
    imagem: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url_cliente: "https://exemplo-imobiliaria.com",
    status: "Online",
    detalhes: {
      desafio: "Capturar leads qualificados para imobiliária através de campanhas de marketing digital.",
      solucao: "Landing page otimizada com formulário inteligente, integração com CRM e automação de e-mail marketing.",
      resultados: "Taxa de conversão de 12% e geração de 200+ leads qualificados mensalmente."
    }
  },
  {
    id: 9,
    titulo: "E-commerce Produtos Naturais",
    categoria: "ecommerce",
    descricao: "Loja virtual especializada em produtos naturais com blog integrado e sistema de assinatura.",
    tecnologias: ["WooCommerce", "WordPress", "PHP", "MySQL", "PayPal"],
    imagem: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url_cliente: "https://exemplo-produtosnaturais.com",
    status: "Online",
    detalhes: {
      desafio: "Criar loja online para produtos naturais com foco em educação e fidelização de clientes.",
      solucao: "E-commerce com blog educativo, sistema de assinatura mensal e programa de fidelidade.",
      resultados: "40% dos clientes aderiram ao sistema de assinatura, aumentando o ticket médio em 180%."
    }
  },
  {
    id: 10,
    titulo: "Dashboard Analytics",
    categoria: "aplicacao",
    descricao: "Painel de controle para análise de dados de vendas com gráficos interativos e relatórios automatizados.",
    tecnologias: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis"],
    imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url_cliente: "https://exemplo-dashboard.com",
    status: "Online",
    detalhes: {
      desafio: "Criar ferramenta de análise de dados que facilitasse tomada de decisões estratégicas da empresa.",
      solucao: "Dashboard interativo com visualizações em tempo real, filtros avançados e exportação de relatórios.",
      resultados: "Redução de 70% no tempo de análise de dados e melhoria na precisão das decisões estratégicas."
    }
  },
  {
    id: 11,
    titulo: "Site Delivery Açaí",
    categoria: "delivery",
    descricao: "Plataforma de delivery para loja de açaí com personalização de produtos e rastreamento de pedidos.",
    tecnologias: ["HTML5", "CSS3", "JavaScript", "Firebase", "Google Maps"],
    imagem: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url_cliente: "https://exemplo-acaidelivery.com",
    status: "Online",
    detalhes: {
      desafio: "Criar sistema de delivery que permitisse personalização completa dos produtos de açaí.",
      solucao: "Plataforma com configurador de produtos, cálculo automático de preços e rastreamento em tempo real.",
      resultados: "Aumento de 250% nos pedidos online e melhoria na satisfação do cliente com rastreamento."
    }
  },
  {
    id: 12,
    titulo: "Catálogo Autopeças",
    categoria: "catalogo",
    descricao: "Catálogo digital para loja de autopeças com busca por veículo e sistema de compatibilidade.",
    tecnologias: ["HTML5", "CSS3", "JavaScript", "API FIPE", "MySQL"],
    imagem: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url_cliente: "https://exemplo-autopecas.com",
    status: "Online",
    detalhes: {
      desafio: "Facilitar busca de autopeças através de sistema inteligente de compatibilidade com veículos.",
      solucao: "Catálogo com busca por marca/modelo do veículo, sistema de compatibilidade e orçamento online.",
      resultados: "Redução de 80% no tempo de consulta de peças e aumento de 120% nas vendas online."
    }
  }
];

// Classe principal do Portfolio
class PortfolioManager {
  constructor() {
    this.projetos = projetos;
    this.filtroAtivo = 'todos';
    this.modal = null;
    this.init();
  }

  init() {
    this.setupElements();
    this.setupEventListeners();
    this.renderProjetos();
    this.updateProjectsCount();
    this.handleURLParams();
  }

  setupElements() {
    this.projectsGrid = document.getElementById('projectsGrid');
    this.projectsCount = document.getElementById('projectsCount');
    this.filterButtons = document.querySelectorAll('.filter-btn');
    this.modal = document.getElementById('projectModal');
    this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    this.navMenu = document.querySelector('nav ul');
  }

  setupEventListeners() {
    // Filtros de categoria
    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.handleFilterClick(e.target.dataset.filter);
      });
    });

    // Modal
    if (this.modal) {
      const closeBtn = document.getElementById('closeModal');
      const modalCloseBtn = document.getElementById('modalCloseBtn');
      
      closeBtn?.addEventListener('click', () => this.closeModal());
      modalCloseBtn?.addEventListener('click', () => this.closeModal());
      
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) {
          this.closeModal();
        }
      });
    }

    // Menu mobile
    this.mobileMenuBtn?.addEventListener('click', () => {
      this.navMenu?.classList.toggle('show');
    });

    // Fechar menu ao clicar em link
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        this.navMenu?.classList.remove('show');
      });
    });

    // Tecla ESC para fechar modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal?.style.display === 'block') {
        this.closeModal();
      }
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  handleFilterClick(filtro) {
    this.filtroAtivo = filtro;
    
    // Atualizar botões ativos
    this.filterButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    
    document.querySelector(`[data-filter="${filtro}"]`).classList.add('active');
    
    // Filtrar e renderizar projetos
    this.renderProjetos();
    this.updateProjectsCount();
    
    // Atualizar URL
    this.updateURL();
  }

  renderProjetos() {
    if (!this.projectsGrid) return;

    const projetosFiltrados = this.filtroAtivo === 'todos' 
      ? this.projetos 
      : this.projetos.filter(projeto => projeto.categoria === this.filtroAtivo);

    this.projectsGrid.innerHTML = '';

    projetosFiltrados.forEach((projeto, index) => {
      const projectCard = this.createProjectCard(projeto, index);
      this.projectsGrid.appendChild(projectCard);
    });

    // Animar entrada dos cards
    this.animateCards();
  }

  createProjectCard(projeto, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
      <div class="project-image">
        <img src="${projeto.imagem}" alt="${projeto.titulo}" loading="lazy">
        <div class="project-category">${this.getCategoryName(projeto.categoria)}</div>
        <div class="project-status">${projeto.status}</div>
      </div>
      <div class="project-content">
        <h3 class="project-title">${projeto.titulo}</h3>
        <p class="project-description">${projeto.descricao}</p>
        <div class="project-tech">
          ${projeto.tecnologias.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-actions">
          <a href="${projeto.url_cliente}" target="_blank" rel="noopener" class="btn btn-primary">
            <i class="fas fa-external-link-alt"></i> Visitar Site
          </a>
          <button class="btn btn-secondary" onclick="portfolio.openModal(${projeto.id})">
            <i class="fas fa-info-circle"></i> Ver Detalhes
          </button>
        </div>
      </div>
    `;

    return card;
  }

  getCategoryName(categoria) {
    const categorias = {
      'landing': 'Landing Page',
      'institucional': 'Site Institucional',
      'ecommerce': 'E-commerce',
      'aplicacao': 'Aplicação Web',
      'delivery': 'Site Delivery',
      'catalogo': 'Catálogo Online'
    };
    
    return categorias[categoria] || categoria;
  }

  animateCards() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        card.style.transition = 'all 0.6s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }

  updateProjectsCount() {
    if (!this.projectsCount) return;

    const count = this.filtroAtivo === 'todos' 
      ? this.projetos.length 
      : this.projetos.filter(projeto => projeto.categoria === this.filtroAtivo).length;
    
    this.projectsCount.textContent = count;
  }

  openModal(projetoId) {
    const projeto = this.projetos.find(p => p.id === projetoId);
    if (!projeto || !this.modal) return;

    // Preencher dados do modal
    document.getElementById('modalTitle').textContent = projeto.titulo;
    document.getElementById('modalImage').src = projeto.imagem;
    document.getElementById('modalImage').alt = projeto.titulo;
    document.getElementById('modalDescription').textContent = projeto.descricao;
    document.getElementById('modalChallenge').textContent = projeto.detalhes.desafio;
    document.getElementById('modalSolution').textContent = projeto.detalhes.solucao;
    document.getElementById('modalResults').textContent = projeto.detalhes.resultados;
    
    // Tecnologias
    const techContainer = document.getElementById('modalTechnologies');
    techContainer.innerHTML = projeto.tecnologias
      .map(tech => `<span class="tech-tag">${tech}</span>`)
      .join('');
    
    // Link do site
    const visitBtn = document.getElementById('modalVisitBtn');
    visitBtn.href = projeto.url_cliente;
    
    // Mostrar modal
    this.modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Foco no modal para acessibilidade
    this.modal.focus();
  }

  closeModal() {
    if (!this.modal) return;
    
    this.modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  handleURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoria = urlParams.get('categoria');
    
    if (categoria && categoria !== this.filtroAtivo) {
      this.handleFilterClick(categoria);
    }
  }

  updateURL() {
    const url = new URL(window.location);
    
    if (this.filtroAtivo === 'todos') {
      url.searchParams.delete('categoria');
    } else {
      url.searchParams.set('categoria', this.filtroAtivo);
    }
    
    window.history.replaceState({}, '', url);
  }

  // Método público para navegação externa
  filterByCategory(categoria) {
    this.handleFilterClick(categoria);
  }
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  window.portfolio = new PortfolioManager();
});

// Função global para compatibilidade
function openProjectModal(projetoId) {
  if (window.portfolio) {
    window.portfolio.openModal(projetoId);
  }
}

// Exportar para uso em outros arquivos se necessário
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PortfolioManager, projetos };
}

