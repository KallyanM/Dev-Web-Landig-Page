import './Pricing.css';

const pricingData = [
  {
    id: 1,
    name: 'Residencial',
    description: 'Soluções rápidas e seguras de instalações, climatização e manutenções preventivas para o conforto do seu lar.',
    popular: false,
    benefits: [
      'Visita técnica agendada',
      'Instalação de ar-condicionado e fiação',
      'Reparos de tomadas, interruptores e disjuntores',
      'Garantia em todos os serviços realizados',
      'Suporte via WhatsApp em horário comercial'
    ],
    ctaText: 'Solicitar Residencial'
  },
  {
    id: 2,
    name: 'Comercial',
    description: 'Manutenção elétrica preventiva e adequação de infraestrutura lógica e climatização para manter sua empresa faturando.',
    popular: true,
    benefits: [
      'Atendimento prioritário de emergência',
      'Manutenção preventiva de quadros e aparelhos',
      'Instalação de câmeras CFTV e redes lógicas',
      'Laudo técnico de conformidade (ART/CREA)',
      'Contratos mensais flexíveis e suporte estendido'
    ],
    ctaText: 'Solicitar Comercial'
  },
  {
    id: 3,
    name: 'Industrial',
    description: 'Projetos elétricos complexos de alta tensão, montagem de painéis industriais e contratos robustos de manutenção preventiva.',
    popular: false,
    benefits: [
      'Suporte técnico emergencial 24h',
      'Projetos elétricos industriais e subestações',
      'Montagem e parametrização de painéis elétricos',
      'Estudo de eficiência energética e correção de fator de potência',
      'Equipe dedicada e gerência técnica de conta'
    ],
    ctaText: 'Solicitar Industrial'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section section-padding">
      <div className="container">
        <div className="pricing-header">
          <span className="subtitle">Preços e Planos</span>
          <h2 className="pricing-title">Categorias de Atendimento</h2>
          <p className="pricing-subtitle">
            Desenvolvemos soluções sob medida para as necessidades do seu projeto. Escolha a categoria ideal para você:
          </p>
        </div>

        <div className="pricing-grid">
          {pricingData.map((plan) => (
            <div key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <span className="popular-badge">Mais Procurado</span>}
              <div className="card-top">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-desc">{plan.description}</p>
              </div>
              <div className="card-divider"></div>
              <ul className="plan-benefits">
                {plan.benefits.map((benefit, i) => (
                  <li key={i} className="benefit-item">
                    <span className="check-icon">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="card-cta">
                <a href="#contact" className="btn-plan-contact">
                  {plan.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
