import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container about-container">
        <div className="about-image-container">
          <div className="about-stats-card">
            <div className="stats-header">⚡ GREF</div>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Anos no mercado</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Segurança</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Clientes satisfeitos</span>
              </div>
            </div>
          </div>
        </div>
        <div className="about-content">
          <span className="subtitle">Sobre Nós</span>
          <h2 className="about-title">Gref Elétrica & Climatização</h2>
          <p className="about-description">
            Fundada com a missão de oferecer soluções robustas e seguras no segmento de instalações elétricas e climatização, a Gref Elétrica consolidou-se como referência em Cascavel e região pela excelência de sua equipe e transparência em seus negócios.
          </p>
          <p className="about-description">
            Nosso compromisso é levar conforto térmico e eficiência energética a residências, comércios e indústrias. Trabalhamos exclusivamente com técnicos certificados e materiais de primeira linha para garantir a máxima durabilidade e conformidade com as normas técnicas de segurança.
          </p>
          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">👷</div>
              <div>
                <h4>Técnicos Certificados</h4>
                <p>Equipe altamente qualificada seguindo rigorosos padrões de segurança.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📋</div>
              <div>
                <h4>Transparência Total</h4>
                <p>Orçamentos detalhados sem taxas surpresas ou custos ocultos.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🛡️</div>
              <div>
                <h4>Garantia de Serviço</h4>
                <p>Todos os nossos serviços contam com garantia pós-execução.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
