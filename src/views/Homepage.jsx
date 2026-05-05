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
      <section className="homepage__summary d-flex flex-column align-items-center justify-content-center">
        <article id="presentazione" className="homepage__summary-card">
          <div
            className="homepage__summary-intro"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <span className="homepage__summary-eyebrow">About me</span>
            <h2 className="homepage__summary-title">Professional Summary</h2>
          </div>

          <p className="scitta_presentazione">
            I'm Alessandro Michele Piazza a
            <strong className="scritta-bianca">
              {" "}
              Full Stack Web Developer{" "}
            </strong>
            with a background in Computer Science and a passion for creating
            modern, scalable web applications.
            <br />
            <br />
            After graduating in 2017 from I.I.S. Fermi-Guttuso, I worked in
            customer-focused environments. From 2020 to 2024, I was a
            Receptionist and IT Operator at Il Ciliegio dell'Etna, managing
            databases and resolving technical issues, while also working in
            retail at Lidl Italia.
            <br />
            <br />
            In 2025, I completed an intensive 600+ hour
            <strong className="scritta-bianca">
              {" "}
              Full Stack Web Developer{" "}
            </strong>
            bootcamp at Aulab Hackademy, working on real projects as a freelance
            developer to gain practical experience.
            <br />
            <br />
            I've mastered <strong className="scritta-bianca">
              HTML5
            </strong>, <strong className="scritta-bianca">CSS3</strong>,
            <strong className="scritta-bianca">JavaScript</strong>,
            <strong className="scritta-bianca">React</strong>,
            <strong className="scritta-bianca">Bootstrap</strong>,
            <strong className="scritta-bianca">Tailwind</strong>,
            <strong className="scritta-bianca"> Laravel</strong> and
            <strong className="scritta-bianca"> PHP</strong>.<br /> I use
            <strong className="scritta-bianca"> Git</strong>,
            <strong className="scritta-bianca"> GitHub</strong> and tools like
            Microsoft Office, Canva, Trello, and Figma daily.
            <br />
            <br />
            I combine technical skills with adaptability, problem-solving,
            communication and teamwork developed through customer-facing
            experience.
            <br />
            <br />
            I'm seeking a full-time position to grow professionally and
            contribute to innovative web development projects.
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
                <MdAutorenew className="soft-skill-icon" /> <span>Adaptability</span>
              </li>
              <li className="skill-list__item">
                <MdLightbulb className="soft-skill-icon" />{" "}
                <span>Problem Solving</span>
              </li>
              <li className="skill-list__item">
                <MdChat className="soft-skill-icon" /> <span>Communication</span>
              </li>
              <li className="skill-list__item">
                <MdGroups className="soft-skill-icon" /> <span>Teamwork</span>
              </li>
              <li className="skill-list__item">
                <MdTranslate className="soft-skill-icon" />{" "}
                <span>Italian — Native</span>
              </li>
              <li className="skill-list__item">
                <MdTranslate className="soft-skill-icon" /> <span>English — B1</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
