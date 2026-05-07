import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaPhp,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiLaravel,
  SiMysql,
  SiNpm,
  SiTrello,
  SiCanva,
} from "react-icons/si";

import {
  MdOutlineWeb,
  MdStorage,
  MdBuild,
  MdPeople,
  MdAutorenew,
  MdLightbulb,
  MdChat,
  MdGroups,
  MdTranslate,
} from "react-icons/md";

import { useTranslation } from "react-i18next";

export default function Homepage() {
  const { t } = useTranslation();

  return (
    <>
      <span id="presentazione"></span>
      <section className="homepage__summary d-none d-md-flex flex-column align-items-center justify-content-center">
        <article className="homepage__summary-card">
          <div
            className="homepage__summary-intro"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <span className="homepage__summary-eyebrow">{t("About me")}</span>
            <h2 className="homepage__summary-title">
              {t("Professional Summary")}
            </h2>
          </div>

          {/* Paragrafo 1 */}
          <p
            className="scitta_presentazione"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
          >
            {t("about_me_1")}{" "}
            <strong className="scritta-bianca">
              {t("Full Stack Web Developer")}
            </strong>{" "}
            {t("about_me_2")}
          </p>

          {/* Paragrafo 2 */}
          <p
            className="scitta_presentazione"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            {t("about_me_3")}
          </p>

          {/* Paragrafo 3 */}
          <p
            className="scitta_presentazione"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            {t("about_me_4")}{" "}
            <strong className="scritta-bianca">
              {t("Full Stack Web Developer")}
            </strong>
            {t("about_me_5")}
          </p>

          {/* Paragrafo 4 (Competenze Tecniche) */}
          <p
            className="scitta_presentazione"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="400"
          >
            {t("about_me_6")} <strong className="scritta-bianca">HTML5</strong>,{" "}
            <strong className="scritta-bianca">CSS3</strong>,{" "}
            <strong className="scritta-bianca">JavaScript</strong>,{" "}
            <strong className="scritta-bianca">React</strong>,{" "}
            <strong className="scritta-bianca">Bootstrap</strong>,{" "}
            <strong className="scritta-bianca">Tailwind</strong>,{" "}
            <strong className="scritta-bianca">Laravel</strong> {t("and")}{" "}
            <strong className="scritta-bianca">PHP</strong>. {t("I use")}{" "}
            <strong className="scritta-bianca">Git</strong>,{" "}
            <strong className="scritta-bianca">GitHub</strong> {t("about_me_7")}
          </p>

          {/* Paragrafo 5 */}
          <p
            className="scitta_presentazione"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="500"
          >
            {t("about_me_8")}
          </p>

          {/* Paragrafo 6 */}
          <p
            className="scitta_presentazione"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="600"
          >
            {t("about_me_9")}
          </p>
        </article>
      </section>

      <section className="homepage__summary d-flex d-md-none flex-column align-items-center justify-content-center">
        <article className="homepage__summary-card">
          <div
            className="homepage__summary-intro text-center"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <span className="homepage__summary-eyebrow">{t("About me")}</span>
            <h2 className="homepage__summary-title">
              {t("Professional Summary")}
            </h2>
          </div>

          {/* Paragrafo 1 */}
          <p
            className="scitta_presentazione text-center"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
          >
            {t("about_me_tel_1")}{" "}
            <strong className="scritta-bianca">
              {t("Full Stack Web Developer")}
            </strong>{" "}
            {t("about_me_tel_2")}
          </p>

          {/* Paragrafo 2 */}
          <p
            className="scitta_presentazione text-center"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            {t("about_me_tel_3")}
            <strong className="scritta-bianca"> Aulab Hackademy</strong>
            {t("about_me_tel_4")}{" "}
            <strong className="scritta-bianca">{t("about_me_tel_5")}</strong>.
          </p>

          {/* Paragrafo 3 */}
          <p
            className="scitta_presentazione text-center"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            {t("about_me_tel_6")}
          </p>

          {/* Paragrafo 4 */}
          <p
            className="scitta_presentazione text-center"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="400"
          >
            {t("about_me_tel_7")}
          </p>
        </article>
      </section>

      <section id="skills" className="homepage__skills">
        <div
          className="skills__intro"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <span className="skills__eyebrow">{t("What I work with")}</span>
          <h2 className="homepage__skills-title">
            {t("Skills & Technologies")}
          </h2>
          <p className="skills__subtitle">{t("Sottotitolo_skill")}</p>
        </div>

        <div className="skills-container">
          {/* Frontend */}
          <div className="skill-card" data-aos="fade-up" data-aos-delay="100">
            <div className="skill-card__header">
              <MdOutlineWeb className="skill-icon" />
              <h3>Frontend</h3>
            </div>

            <ul className="skill-list">
              <li className="skill-list__item">
                <FaHtml5 className="skill-icon html" /> <span>HTML5</span>
              </li>
              <li className="skill-list__item">
                <FaCss3Alt className="skill-icon css" /> <span>CSS3</span>
              </li>
              <li className="skill-list__item">
                <FaJs className="skill-icon js" /> <span>JavaScript</span>
              </li>
              <li className="skill-list__item">
                <FaReact className="skill-icon react" /> <span>React</span>
              </li>
              <li className="skill-list__item">
                <FaBootstrap className="skill-icon bootstrap" />{" "}
                <span>Bootstrap</span>
              </li>
              <li className="skill-list__item">
                <SiTailwindcss className="skill-icon tailwind" />{" "}
                <span>Tailwind</span>
              </li>
            </ul>
          </div>

          {/* Backend */}
          <div className="skill-card" data-aos="fade-up" data-aos-delay="200">
            <div className="skill-card__header">
              <MdStorage className="skill-icon" />
              <h3>Backend</h3>
            </div>

            <ul className="skill-list">
              <li className="skill-list__item">
                <FaPhp className="skill-icon php" /> <span>PHP</span>
              </li>
              <li className="skill-list__item">
                <SiLaravel className="skill-icon laravel" />{" "}
                <span>Laravel</span>
              </li>
              <li className="skill-list__item">
                <SiMysql className="skill-icon mysql" /> <span>MySQL</span>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div className="skill-card" data-aos="fade-up" data-aos-delay="300">
            <div className="skill-card__header">
              <MdBuild className="skill-icon" />
              <h3>Tools & Dev</h3>
            </div>

            <ul className="skill-list">
              <li className="skill-list__item">
                <FaGitAlt className="skill-icon git" /> <span>Git</span>
              </li>
              <li className="skill-list__item">
                <FaGithub className="skill-icon github" /> <span>GitHub</span>
              </li>
              <li className="skill-list__item">
                <SiNpm className="skill-icon npm" /> <span>NPM</span>
              </li>
              <li className="skill-list__item">
                <FaFigma className="skill-icon figma" /> <span>Figma</span>
              </li>
              <li className="skill-list__item">
                <SiTrello className="skill-icon trello" /> <span>Trello</span>
              </li>
              <li className="skill-list__item">
                <SiCanva className="skill-icon canva" /> <span>Canva</span>
              </li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="skill-card" data-aos="fade-up" data-aos-delay="400">
            <div className="skill-card__header">
              <MdPeople className="soft-skill-icon" />
              <h3>Soft Skills</h3>
            </div>

            <ul className="skill-list">
              <li className="skill-list__item">
                <MdAutorenew className="soft-skill-icon" />{" "}
                <span>Adaptability</span>
              </li>
              <li className="skill-list__item">
                <MdLightbulb className="soft-skill-icon" />{" "}
                <span>Problem Solving</span>
              </li>
              <li className="skill-list__item">
                <MdChat className="soft-skill-icon" />{" "}
                <span>Communication</span>
              </li>
              <li className="skill-list__item">
                <MdGroups className="soft-skill-icon" /> <span>Teamwork</span>
              </li>
              <li className="skill-list__item">
                <MdTranslate className="soft-skill-icon" />{" "}
                <span>Italian — Native</span>
              </li>
              <li className="skill-list__item">
                <MdTranslate className="soft-skill-icon" />{" "}
                <span>English — B1</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="homepage__skills homepage__projects">
        <div
          className="skills__intro"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <span className="skills__eyebrow">{t("My projects")}</span>
          <h2 className="homepage__skills-title">
            {t("Projects & Experience")}
          </h2>
          <p className="skills__subtitle mx-3">{t("Sottotitolo_projects")}</p>
        </div>

        <div className="projects-showcase aos-overflow-wrapper">
          {/* PROGETTO 1 */}
          <article className="project-card">
            <div
              className="project-card__media"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <a
                href="https://www.ilciliegiodelletna.it"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/ciliegio_esterno.webp"
                  alt="Preview of the Il Ciliegio dell'Etna website"
                  className="project-card__image"
                  loading="lazy"
                />
              </a>
            </div>

            <div
              className="project-card__content"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <h3 className="project-card__title">Il Ciliegio dell'Etna</h3>
              <p className="project-card__text">
                {t("Descrizione_sito_Ciliegio")}
              </p>
              <a
                className="visit-link visit-link--icon"
                href="https://www.ilciliegiodelletna.it"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("Visit website")}
              </a>
            </div>
          </article>

          {/* PROGETTO 2 */}
          <article className="project-card my-5">
            <div
              className="project-card__media"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <a
                href="https://www.siciliansicily.it/#home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/siciliansicily_homepage.webp"
                  alt="Preview of the Sicilian Sicily website"
                  className="project-card__image"
                  loading="lazy"
                />
              </a>
            </div>

            <div
              className="project-card__content"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <h3 className="project-card__title">Sicilian Sicily</h3>
              <p className="project-card__text">
                {t("Descrizione_sito_Sicilian_Sicily")}
              </p>
              <a
                className="visit-link visit-link--icon"
                href="https://www.siciliansicily.it/#home"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("Visit website")}
              </a>
            </div>
          </article>

          {/* PROGETTO 3 */}
          <article className="project-card my-5">
            <div
              className="project-card__media"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <a
                href="https://github.com/Alessandro-Michele-Piazza/Square-game"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/square_games.webp"
                  alt="Preview of the Square Games website"
                  className="project-card__image"
                  loading="lazy"
                />
              </a>
            </div>

            <div
              className="project-card__content"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <h3 className="project-card__title">Square Games</h3>
              <p className="project-card__text">
                {t("Descrizione_sito_Square_games")}
              </p>
              <a
                className="visit-link visit-link--icon"
                href="https://github.com/Alessandro-Michele-Piazza/Square-game"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
