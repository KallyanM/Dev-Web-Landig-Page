import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand-section">
          <div className="logo footer-logo">
            <a href="#home">
              <span className="logo-icon">⚡</span>
              <div className="logo-text">
                <span className="brand-name">GREF</span>
                <span className="brand-sub">ELÉTRICA & CLIMATIZAÇÃO</span>
              </div>
            </a>
          </div>
          <p className="footer-brand-desc">
            Soluções completas de instalações elétricas, manutenção de ar-condicionado, segurança eletrônica e energia solar fotovoltaica.
          </p>
        </div>

        <div className="footer-links-section">
          <h4 className="footer-title">Links Rápidos</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre a Empresa</a></li>
            <li><a href="#services">Nossos Serviços</a></li>
            <li><a href="#pricing">Planos de Serviço</a></li>
            <li><a href="#contact">Fazer Orçamento</a></li>
          </ul>
        </div>

        <div className="footer-info-section">
          <h4 className="footer-title">Contato e Endereço</h4>
          <ul className="footer-contact-details">
            <li>
              <span className="footer-info-icon">📞</span>
              <span>(45) 99999-8888</span>
            </li>
            <li>
              <span className="footer-info-icon">✉️</span>
              <span>contato@grefeletrica.com.br</span>
            </li>
            <li>
              <span className="footer-info-icon">📍</span>
              <span>Rua da Fiação, 123 - Centro, Cascavel - PR</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright">&copy; {currentYear} Gref Elétrica & Climatização. Todos os direitos reservados.</p>
          <p className="developer-tag">Atividade Prática - Desenvolvimento Web</p>
        </div>
      </div>
    </footer>
  );
}
