import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer className="footer">
      <div className="footer-bottom">
        {/* Selettore Lingua */}
        <div className="footer__lang-switcher">
          <button 
            className={`footer__lang-btn ${i18n.language === 'it' ? 'active' : ''}`} 
            onClick={() => changeLanguage('it')}
          >
            IT
          </button>
          <span className="footer__lang-divider">|</span>
          <button 
            className={`footer__lang-btn ${i18n.language === 'en' ? 'active' : ''}`} 
            onClick={() => changeLanguage('en')}
          >
            EN
          </button>
        </div>

        <p>
          &copy; {new Date().getFullYear()} 
          <a 
            href="https://www.linkedin.com/in/alessandro-michele-piazza-13b751171/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {" "}Alessandro Michele Piazza
          </a>. {t('footer_rights')}
        </p>
      </div>
    </footer>
  );
}