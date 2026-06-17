import heroImg from '../../assets/EletricistaDesenho.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Serviços Elétricos e Climatização com <span className="highlight">Qualidade</span> e <span className="highlight">Segurança</span>
          </h1>
          <p className="hero-text">
            Técnicos certificados, orçamento transparente e garantia para sua residência ou empresa. Atendimento especializado em Cascavel e região.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Solicitar Orçamento</a>
            <a href="#services" className="btn-secondary">Nossos Serviços</a>
          </div>
          <div className="hero-badges">
            <div className="badge">
              <span className="badge-icon">🛡️</span>
              <span>100% Seguro</span>
            </div>
            <div className="badge">
              <span className="badge-icon">⚡</span>
              <span>Atendimento Rápido</span>
            </div>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img src={heroImg} alt="Gref Elétrica e Climatização" className="hero-image" />
            <div className="accent-circle"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
