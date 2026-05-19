import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { useTranslation } from "react-i18next";

const DESKTOP_MEDIA_QUERY = "(min-width: 768px)";
const NAV_ITEMS = [
  { href: "#presentazione", labelKey: "Professional Summary" },
  { href: "#skills", labelKey: "Skills & Technologies" },
  { href: "#projects", labelKey: "My projects" },
];

function NavigationSections({ onNavigate, animated = false }) {
  const introAnimationProps = animated
    ? {
        "data-aos": "fade-down",
        "data-aos-duration": "600",
        "data-aos-delay": "0",
      }
    : {};

  const { t } = useTranslation();

  return (
    <>
      <div className="navbar__intro" {...introAnimationProps}>
        <div className="d-flex gap-3">
          <img
            src="./foto_mia_5.webp"
            alt="Foto di Alessandro Michele Piazza"
            className="img-profilo"
          />
          <h1 className="navbar__title">Alessandro Michele Piazza</h1>
        </div>
        <h2 className="navbar__role mt-4"> Full Stack Web Developer </h2>
        <p className="navbar__lead">
          {t("Scritta_sidebar")} <br />
        </p>
      </div>

      <div className="menu-container navbar__menu">
        <ul className="custom-menu">
          {NAV_ITEMS.map((item, index) => {
            const itemAnimationProps = animated
              ? {
                  "data-aos": "fade-down",
                  "data-aos-duration": "600",
                  "data-aos-delay": `${100 + index * 100}`,
                }
              : {};

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={onNavigate}
                  {...itemAnimationProps}
                >
                  <span className="nav-indicator"></span>
                  <span className="nav-text">{t(item.labelKey)}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="navbar__footer">
        <div className="navbar__socials">
          <a
            className="social-link social-link--icon"
            href="https://www.linkedin.com/in/alessandro-michele-piazza-13b751171/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            onClick={onNavigate}
            data-aos={animated ? "fade-right" : undefined}
            data-aos-duration={animated ? "600" : undefined}
            data-aos-delay={animated ? "400" : undefined}
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
            data-aos={animated ? "fade-right" : undefined}
            data-aos-duration={animated ? "600" : undefined}
            data-aos-delay={animated ? "500" : undefined}
          >
            <i className="bi bi-github" aria-hidden="true"></i>
          </a>

          {/* <a
            className="social-link social-link--icon"
            href="https://www.instagram.com/alessandrom.piazza/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            onClick={onNavigate}
            data-aos={animated ? "fade-right" : undefined}
            data-aos-duration={animated ? "600" : undefined}
            data-aos-delay={animated ? "600" : undefined}
          >
            <i className="bi bi-instagram" aria-hidden="true"></i>
          </a> */}
        </div>

        <div
          className="navbar__contact-list"
          data-aos={animated ? "fade-up" : undefined}
          data-aos-duration={animated ? "600" : undefined}
          data-aos-delay={animated ? "700" : undefined}
        >
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
            <i className="bi bi-telephone-fill" aria-hidden="true"></i>
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
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
      offset: 0,
      anchorPlacement: "top-bottom",
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
        <HiMenuAlt3 size={24} aria-hidden="true" />
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
                className="navbar__mobile-header"
                data-aos="fade-down"
                data-aos-duration="400"
              >
                <button
                  type="button"
                  className="navbar__mobile-close"
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                >
                  <i className="bi bi-x-lg" aria-hidden="true"></i>{" "}
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
