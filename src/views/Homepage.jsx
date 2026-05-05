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

export default function Homepage() {
  return (
    <>
      <section className="homepage__summary d-none d-md-flex flex-column align-items-center justify-content-center">
        <article id="presentazione" className="homepage__summary-card">
          <div
            className="homepage__summary-intro"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <span className="homepage__summary-eyebrow">About me</span>
            <h2 className="homepage__summary-title">Professional Summary</h2>
          </div>

          <p
            className="scitta_presentazione"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
          >
            I'm Alessandro Michele Piazza a
            <strong className="scritta-bianca">
              {" "}
              Full Stack Web Developer{" "}
            </strong>
            with a background in Computer Science and a passion for creating
            modern, scalable web applications.
          </p>

          <p
            className="scitta_presentazione"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            After graduating in 2017 from I.I.S. Fermi-Guttuso, I worked in
            customer-focused environments. From 2020 to 2024, I was a
            Receptionist and IT Operator at Il Ciliegio dell'Etna, managing
            databases and resolving technical issues, while also working in
            retail at Lidl Italia.
          </p>

          <p
            className="scitta_presentazione"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            In 2025, I completed an intensive 600+ hour
            <strong className="scritta-bianca">
              {" "}
              Full Stack Web Developer{" "}
            </strong>
            bootcamp at Aulab Hackademy, working on real projects as a freelance
            developer to gain practical experience.
          </p>

          <p
            className="scitta_presentazione"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="400"
          >
            I've mastered <strong className="scritta-bianca">HTML5</strong>,{" "}
            <strong className="scritta-bianca">CSS3</strong>,{" "}
            <strong className="scritta-bianca">JavaScript</strong>,{" "}
            <strong className="scritta-bianca">React</strong>,{" "}
            <strong className="scritta-bianca">Bootstrap</strong>,{" "}
            <strong className="scritta-bianca">Tailwind</strong>,{" "}
            <strong className="scritta-bianca">Laravel</strong> and{" "}
            <strong className="scritta-bianca">PHP</strong>. I use{" "}
            <strong className="scritta-bianca">Git</strong>,{" "}
            <strong className="scritta-bianca">GitHub</strong> and tools like
            Microsoft Office, Canva, Trello, and Figma daily.
          </p>

          <p
            className="scitta_presentazione"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="500"
          >
            I combine technical skills with adaptability, problem-solving,
            communication and teamwork developed through customer-facing
            experience.
          </p>

          <p
            className="scitta_presentazione"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="600"
          >
            I'm seeking a full-time position to grow professionally and
            contribute to innovative web development projects.
          </p>
        </article>
      </section>

      <section className="homepage__summary d-flex d-md-none flex-column align-items-center justify-content-center">
        <article id="presentazione-mobile" className="homepage__summary-card">
          <div
            className="homepage__summary-intro text-center"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <span className="homepage__summary-eyebrow">About me</span>
            <h2 className="homepage__summary-title">Professional Summary</h2>
          </div>

          <p
            className="scitta_presentazione text-center"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
          >
            I'm Alessandro Michele Piazza, a
            <strong className="scritta-bianca">
              {" "}
              Full Stack Web Developer{" "}
            </strong>
            passionate about building modern and scalable applications.
          </p>

          <p
            className="scitta_presentazione text-center"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            With a background in Computer Science and an intensive 600+ hour
            bootcamp at
            <strong className="scritta-bianca"> Aulab Hackademy</strong>, I've
            mastered technologies like{" "}
            <strong className="scritta-bianca">
              React, JavaScript, Laravel and PHP
            </strong>
            .
          </p>

          <p
            className="scitta_presentazione text-center"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            I combine technical expertise with strong problem-solving and
            communication skills gained through years of professional
            experience.
          </p>

          <p
            className="scitta_presentazione text-center"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="400"
          >
            I'm now ready to contribute to innovative projects and grow in a
            dynamic tech team.
          </p>
        </article>
      </section>

      <section id="skills" className="homepage__skills">
        <div
          className="skills__intro"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <span className="skills__eyebrow">What I work with</span>
          <h2 className="homepage__skills-title">Skills & Technologies</h2>
          <p className="skills__subtitle">
            A full-stack toolkit built through hands-on training and real-world
            projects.
          </p>
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
          <span className="skills__eyebrow">My projects</span>
          <h2 className="homepage__skills-title">Projects & Experience</h2>
          <p className="skills__subtitle">
            A curated case study that shows how I turn design and development
            into a polished production-ready experience.
          </p>
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
                <strong>Web design</strong> and <strong>development</strong> for
                a Sicilian farmhouse resort. A vibrant,{" "}
                <strong>responsive</strong> layout built with{" "}
                <strong>Laravel</strong> and <strong>Bootstrap</strong>. I
                managed the <strong>photo editing</strong> and a{" "}
                <strong>local SEO</strong> strategy that significantly boosted
                organic rankings. Features <strong>AOS</strong> animations,{" "}
                <strong>Font Awesome</strong>, and <strong>carousels</strong> to
                showcase rooms, restaurant, and event services.
              </p>
              <a
                className="visit-link visit-link--icon"
                href="https://www.ilciliegiodelletna.it"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit website
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
                <strong>Maintenance</strong> and feature enhancement for a
                tourism platform built with <strong>React</strong>. I integrated
                a fully functional <strong>mailing form</strong>, performed
                extensive <strong>bug fixing</strong>, and managed professional{" "}
                <strong>photo editing</strong> to elevate the site's visual
                impact. Focused on optimizing <strong>UI components</strong> and
                ensuring a seamless, high-performance{" "}
                <strong>user experience</strong>.
              </p>
              <a
                className="visit-link visit-link--icon"
                href="https://www.siciliansicily.it/#home"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit website
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
                <strong>Full-stack gaming platform</strong> built with{" "}
                <strong>React</strong> and <strong>Supabase</strong>. Integrated{" "}
                <strong>RAWG API</strong> for real-time data, implementing{" "}
                <strong>SQL triggers</strong> for reviews and favorites.
                Features <strong>user authentication</strong>,{" "}
                <strong>RLS security</strong>, and{" "}
                <strong>cloud storage</strong> for profiles. Designed with{" "}
                <strong>Tailwind CSS</strong> and <strong>daisyUI</strong> for a
                fully <strong>responsive</strong> experience.
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
