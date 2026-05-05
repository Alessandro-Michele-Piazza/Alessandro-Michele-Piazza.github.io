import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DESKTOP_MEDIA_QUERY = "(min-width: 768px)";
const NAV_ITEMS = [
  { href: "#presentazione", label: "Professional Summary" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

function NavigationSections({ onNavigate, animated = false }) {
  const introAnimationProps = animated
    ? {
        "data-aos": "fade-up",
        "data-aos-duration": "500",
        "data-aos-delay": "90",
      }
    : {};
  const menuAnimationProps = animated
    ? {
        "data-aos": "fade-up",
        "data-aos-duration": "500",
        "data-aos-delay": "150",
      }
    : {};
  const footerAnimationProps = animated
    ? {
        "data-aos": "fade-up",
        "data-aos-duration": "500",
        "data-aos-delay": "300",
      }
    : {};

  return (
    <>
      <div className="navbar__intro" {...introAnimationProps}>
        <div className="d-flex gap-3">
          <img
            src="public\foto_alessandro_michele_piazza.webp"
            alt="Foto di Alessandro Michele Piazza"
            className="img-profilo"
          />
          <h1 className="navbar__title">Alessandro Michele Piazza</h1>
        </div>
        <h2 className="navbar__role mt-4">Junior Web Developer</h2>
        <p className="navbar__lead">
          Open to new opportunities and collaborations. <br />
        </p>
      </div>

      <div className="menu-container navbar__menu" {...menuAnimationProps}>
        <ul className="custom-menu">
          {NAV_ITEMS.map((item, index) => {
            const itemAnimationProps = animated
              ? {
                  "data-aos": "fade-up",
                  "data-aos-duration": "500",
                  "data-aos-delay": `${180 + index * 70}`,
                }
              : {};

            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={onNavigate}
                  {...itemAnimationProps}
                >
                  <span className="nav-indicator"></span>
                  <span className="nav-text">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="navbar__footer" {...footerAnimationProps}>
        <div className="navbar__socials">
          <a
            className="social-link social-link--icon"
            href="https://www.linkedin.com/in/alessandro-michele-piazza-13b751171/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            onClick={onNavigate}
          >
            <i className="bi bi-linkedin" aria-hidden="true"></i>
          </a>

          <a
            className="social-link social-link--icon"
            href="https://github.com/Alessandro-Michele-Piazza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            onClick={onNavigate}
          >
            <i className="bi bi-github" aria-hidden="true"></i>
          </a>

          <a
            className="social-link social-link--icon"
            href="https://www.instagram.com/alessandrom.piazza/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            onClick={onNavigate}
          >
            <i className="bi bi-instagram" aria-hidden="true"></i>
          </a>
        </div>

        <div className="navbar__contact-list">
          <a
            className="social-link social-link--contact"
            href="mailto:alexpiazza98@gmail.com"
            onClick={onNavigate}
          >
            <i className="bi bi-envelope-fill" aria-hidden="true"></i>
            <span>alexpiazza98@gmail.com</span>
          </a>

          <a
            className="social-link social-link--contact"
            href="tel:+393491378265"
            onClick={onNavigate}
          >
            <i className="bi bi-telephone-fill " aria-hidden="true"></i>
            <span>+39 349 137 8265</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out-cubic",
      once: false,
      mirror: false,
      offset: 0,
    });
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);

    const handleChange = (event) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    handleChange(mediaQuery);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);

      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }

    mediaQuery.addListener(handleChange);

    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
      requestAnimationFrame(() => {
        AOS.refreshHard();
      });
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "navbar--open" : ""}`}>
      <button
        type="button"
        className={`navbar__toggle ${isMenuOpen ? "navbar__toggle--hidden" : ""}`}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        aria-label={
          isMenuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        onClick={toggleMenu}
      >
        <span className="navbar__toggle-line"></span>
        <span className="navbar__toggle-line"></span>
        <span className="navbar__toggle-line"></span>
      </button>

      <div className="navbar__desktop-panel">
        <NavigationSections onNavigate={closeMenu} />
      </div>

      {isMenuOpen ? (
        <div className="navbar__mobile-overlay" onClick={closeMenu}>
          <div className="navbar__mobile-panel">
            <div
              id="mobile-navigation"
              className="navbar__mobile-canvas"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <div
                className="navbar__mobile-header "
                data-aos="fade-down"
                data-aos-duration="400"
              >
                <button
                  type="button"
                  className="navbar__mobile-close"
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                >
                  <span aria-hidden="true">X</span>
                </button>
              </div>

              <NavigationSections onNavigate={closeMenu} animated />
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
