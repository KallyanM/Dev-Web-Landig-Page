import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'Instalações Elétricas',
    description: 'Projetos elétricos fiação de alta e baixa tensão, troca de disjuntores, montagem de quadros de distribuição e manutenção preventiva.',
    icon: '⚡'
  },
  {
    id: 2,
    title: 'Climatização',
    description: 'Instalação, manutenção preventiva e corretiva, e higienização completa de ar-condicionado de todas as marcas e capacidades.',
    icon: '❄️'
  },
  {
    id: 3,
    title: 'Energia Solar',
    description: 'Projetos completos de energia solar fotovoltaica. Reduza sua conta de luz em até 95% gerando sua própria energia limpa.',
    icon: '☀️'
  },
  {
    id: 4,
    title: 'Segurança Eletrônica',
    description: 'Instalação de câmeras de segurança (CFTV), alarmes monitorados, cercas elétricas e controle de acesso moderno.',
    icon: '🛡️'
  },
  {
    id: 5,
    title: 'Redes Lógicas',
    description: 'Infraestrutura de redes de computadores, cabeamento estruturado Cat6/Cat6A, roteadores empresariais e pontos de acesso Wi-Fi.',
    icon: '💻'
  },
  {
    id: 6,
    title: 'Películas Arquitetônicas',
    description: 'Aplicação de insulfilm arquitetônico residencial e comercial para controle solar, redução de calor, privacidade e design sofisticado.',
    icon: '🏢'
  }
];

export default function Services() {
  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <div className="services-header">
          <span className="subtitle">O Que Fazemos</span>
          <h2 className="services-title">Nossos Serviços Especializados</h2>
          <p className="services-subtitle">
            Oferecemos infraestrutura completa para sua casa ou empresa com foco em segurança, eficiência energética e conforto térmico.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-wrapper">
                <span className="service-emoji">{service.icon}</span>
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
