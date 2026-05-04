export default function Navbar() {
  return (
    <nav className="navbar d-flex flex-column align-items-start justify-content-between ">
      <div className="navbar__intro mx-5">
        <p className="navbar__eyebrow">Portfolio</p>
        <h1 className="navbar__title">Alessandro Michele Piazza</h1>
        <h2 className="navbar__role">Junior Web Developer</h2>
        <p className="navbar__lead">
          Open to new opportunities and collaborations. <br />
          Let&apos;s chat about projects, ideas, or just say hi!
        </p>
      </div>
      <div className="menu-container navbar__menu mx-5">
        <ul className="custom-menu">
          <li>
            <a href="#">
              <span className="nav-indicator"></span>
              <span className="nav-text">Professional Summary</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="nav-indicator"></span>
              <span className="nav-text">Skills</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="nav-indicator"></span>
              <span className="nav-text">Projects</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar__footer mx-5">
        <div className="navbar__socials">
          <a
            className="social-link social-link--icon"
            href="https://www.linkedin.com/in/alessandro-michele-piazza-13b751171/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin" aria-hidden="true"></i>
          </a>

          <a
            className="social-link social-link--icon"
            href="https://github.com/Alessandro-Michele-Piazza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="bi bi-github" aria-hidden="true"></i>
          </a>

          <a
            className="social-link social-link--icon"
            href="https://www.instagram.com/alessandrom.piazza/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="bi bi-instagram" aria-hidden="true"></i>
          </a>

        </div>

        <div className="navbar__contact-list">
          <a className="social-link social-link--contact" href="mailto:alexpiazza98@gmail.com">
            <i className="bi bi-envelope-fill" aria-hidden="true"></i>
            <span>alexpiazza98@gmail.com</span>
          </a>

          <a className="social-link social-link--contact" href="tel:+393491378265">
            <i className="bi bi-telephone-fill" aria-hidden="true"></i>
            <span>+39 349 137 8265</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
