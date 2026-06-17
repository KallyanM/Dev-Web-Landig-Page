import './Header.css';

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Header({ menuOpen, setMenuOpen }: HeaderProps) {
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <a href="#home">
            <span className="logo-icon">⚡</span>
            <div className="logo-text">
              <span className="brand-name">GREF</span>
              <span className="brand-sub">ELÉTRICA & CLIMATIZAÇÃO</span>
            </div>
          </a>
        </div>

        <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Abrir menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
            <li><a href="#about" onClick={handleLinkClick}>Sobre</a></li>
            <li><a href="#services" onClick={handleLinkClick}>Serviços</a></li>
            <li><a href="#pricing" onClick={handleLinkClick}>Preços</a></li>
            <li><a href="#contact" onClick={handleLinkClick}>Contato</a></li>
          </ul>
          <div className="nav-cta-mobile">
            <a href="#contact" className="btn-budget" onClick={handleLinkClick}>Orçamento</a>
          </div>
        </nav>

        <div className="nav-cta">
          <a href="#contact" className="btn-budget">Orçamento</a>
        </div>
      </div>
    </header>
  );
}
