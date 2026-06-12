
import "./App.css";
import { useEffect } from "react";
import profileImg from "./assets/WhatsApp Image 2026-06-12 at 12.41.58.jpeg";
import tamagotchiImg from "./assets/Tamagotchi1.png";
import tamagotchi2Img from "./assets/Tamagotchi2.png";
import spacCruiser1Img from "./assets/Space Cruiser1.png";
import spacCruiser2Img from "./assets/Space Cruiser2.png";
import BZAB1Img from "./assets/BZAB1.png";
import BZAB2Img from "./assets/BZAB2.png";
import CIH1Img from "./assets/CIH1.png";
import CIH2Img from "./assets/CIH2.png";
import hrManagementSystemImg from "./assets/HRManagementSystem.png";
import pdfValidatorImg from "./assets/PDF_Validator.png";


type Link = { label: string; href: string };
type Card = { title: string; body: string; meta?: string; links?: Link[]; images?: string[]; };
type TimelineItem = { role: string; org: string; when: string; bullets: string[] };

const links: Link[] = [
  { label: "GitHub", href: "https://github.com/Emily-Breen" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/emily-breen-491769214/" },
];

const aboutCards: Card[] = [
  {
    title: "What I enjoy",
    body: "Building polished UI, solving system problems, and making features feel great to use.",
  },
  {
    title: "What I’m looking for",
    body: "Software developer roles where I can learn fast and ship real features.",
  },
  {
    title: "How I work",
    body: "Agile/Scrum, clean code, version control, and collaborating closely with developers and QA.",
  },
];


const techColumns: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["C#", "TypeScript", "JavaScript", "C++", "SQL", "Python", "GDScript"] },
  { title: "Frontend", items: ["React", "React Native", "HTML", "CSS"] },
  { title: "Backend", items: [".NET", "Node.js"] },
  { title: "DevOps & Workflow", items: ["Git/GitHub", "Azure DevOps", "Agile/Scrum", "REST APIs"] },
  { title: "Practices", items: ["OOP", "Unit Testing", "Debugging"] },
];

const projects: Card[] = [
  {
    title: "Can I Hinder?",
    meta: "Final Year Project · Real-time Interactive System",
    body:
      "Designed and developed a real-time interactive system allowing live audience participation in gameplay using WebSockets. Built a multi-service architecture consisting of a C++ game client, React PWA frontend, ASP.Net Core API and Node.js WebSocket relay server. Engineered low-latency (<100ms) communication, deployed the full system to Microsoft Azure with CI/CD pipelines via GitHub Actions.",
    links: [{ label: "View project", href: "https://github.com/Emily-Breen" }],
    images: [CIH1Img, CIH2Img]
  },
  {
    title: "Bronze Age Brawl",
    meta: "Award-winning · Best in Gameplay · EA Games Fleadh 2024",
    body:
      "Lead Designer within a multidisciplinary team. Contributed to gameplay design, iteration, and feature development using Agile practices. Designed and implemented core combat mechanics, character abilities, animations and enemy behaviours in C++ with SFML. Collaborated closely with artists and designers to ensure cohesive gameplay experience. Received 'Best in Gameplay' award at EA Games Fleadh 2024.",
    links: [{ label: "View project", href: "https://scaldypanda.itch.io/bronze-age-brawl" }],
    images:[BZAB1Img, BZAB2Img]
  },

  {
    title: "Tamagochi Clone",
    meta: "Spring Interactive · March 2023",
    body:
      "A virtual pet game built in C++ using SFML. Implemented a fixed-timestep game loop, event-driven input handling, sprite animation, and multiple game states (gameplay/game over). Added pet stats (hunger, cleanliness, health) that change over time with UI interactions (feed/clean) and on-screen feedback messages.",
      links: [{ label: "View project", href: "https://github.com/PeterLowe/spring-interactive-Emily-Breen" }],
      images: [tamagotchiImg, tamagotchi2Img],
  },
  {
    title: "SpaceCruiser",
    meta: "Sci-Fi Survival · April 2023",
    body:
      "A space survival game with real-time strategy elements Built in C++ using SFML. Players navigate through an onslaught of enemies, engaging with in tactical battles.",
        links: [{ label: "View project", href: "https://github.com/Emily-Breen/1st-year-project-SPACE-CRUSIER.git" }],
    images: [spacCruiser1Img, spacCruiser2Img],
    
  },
  {
  title: "PDF Validator",
  meta: "Desktop Application · Python · Business Process Automation · Deployed",
  body:
    "Designed and developed a desktop application for automated PDF validation and integrity checking. The system processes large batches of PDF documents, detects corrupted or unreadable files using visual validation techniques, and automatically segregates invalid documents for review. Features include batch processing, progress tracking, CSV reporting, duplicate file handling, branded user interface design, and multithreaded processing to improve performance. Created to reduce manual quality assurance effort and improve document processing workflows.",
  images: [pdfValidatorImg],
  },
  {
  title: "HR Management System",
  meta: "Desktop Application · C# · WPF · SQL Server · In Development",
  body:
    "Developed a multi-user HR management system to replace manual and spreadsheet-based employee administration processes. Built using WPF and SQL Server, the application provides employee management, leave request tracking, document storage, audit logging, reporting, department administration, and role-based access control. Designed to support multiple concurrent users across a shared network while improving data accuracy, security, and operational efficiency.",
  images: [hrManagementSystemImg],
  },
  {
  title: "Enterprise Information & Navigation Screen",
  meta: "Interactive Kiosk System · React · TypeScript · In Development",
  body:
    "Recreated and modernised an interactive touchscreen information system for the Wexford Enterprise Centre. Developed a responsive React and TypeScript application that displays tenant information, office locations, room directories, and navigation guidance through an intuitive kiosk interface. The project involved reverse-engineering an existing legacy solution, replicating its functionality and visual design while improving maintainability, scalability, and user experience for visitors and tenants.",
  },
];

const timeline: TimelineItem[] = [
  {
    role: "Software Developer (Intern)",
    org: "Netwatch Ireland",
    when: "2025 · 6-month internship",
    bullets: [
      "Developed and maintained full-stack web applications using React, TypeScript and C# (.NET)",
      "Contributed to mobile application development using React Native",
      "Designed and integrated RESTful APIs between frontend and backend systems",
      "Worked with an Agile/Scrum team, participating in stand-ups, sprint planning and reviews",
      "Used Azure DevOps for task tracking and collaboration along with version control",
      "Collaborated with senior developers and QA to deliver features to production standards",
    ],
  },
  {
    role: "BA (Hons) Computer Games Development",
    org: "SETU Carlow",
    when: "Sept 2022 – 2026 · GPA 2:1",
    bullets: [
      "Lead Designer of \u201cBronze Age Brawl\u201d, an award-winning game at the 2024 EA Games Fleadh",
      "Participated in SETU Carlow Global Game Jam 2023 & 2024, building complete games under tight constraints",
      "Completed a broad curriculum spanning software development, web development, databases, networking, AI, mobile development, UI/UX, cloud infrastructure and low-level graphics programming (OpenGL/GLEW)",
      "Developed strong skills in software development, object orientated programming, problem-solving and teamwork",
    ],
  },
  {
    role: "Senior Project Lead",
    org: "Datagroup",
    when: "Nov 2009 – Present",
    bullets: [
      "Managed cross-functional teams, coordinating delivery of projects across strict deadlines",
      "Acted as the primary liaison between clients and technical teams, translating business requirements into actionable plans",
      "Oversaw onboarding and training for new systems and processes across the organisation",
      "Drove process improvement and issue resolution across internal systems",
      "Ensured full compliance with data protection and regulatory guidelines (GDPR)",
      "Developed strong communication, leadership and stakeholder management skills",
    ],
  },

];

const DEST_EMAIL = "emilybreen8@gmail.com";

function buildMailto() {
  const subject = encodeURIComponent("Portfolio contact");
  const body = encodeURIComponent(
    `Hi Emily,\n\nI found your portfolio and I'd like to get in touch about...\n\n—\nName:\nCompany/Role:\nBest way to reply:\n`
  );
  return `mailto:${DEST_EMAIL}?subject=${subject}&body=${body}`;
}

export default function App() {
  const mailtoHref = buildMailto();
useEffect(() => {
  const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
  const appEl = document.querySelector<HTMLElement>(".app");
  let rafId = 0;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  const updateFaviconScroll = () => {
    if (appEl) {
      appEl.style.setProperty("--favicon-scroll-y", `${window.scrollY}px`);
    }
    rafId = 0;
  };

  const onScroll = () => {
    if (rafId === 0) {
      rafId = window.requestAnimationFrame(updateFaviconScroll);
    }
  };

  updateFaviconScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  els.forEach((el) => io.observe(el));
  return () => {
    io.disconnect();
    window.removeEventListener("scroll", onScroll);
    if (rafId !== 0) {
      window.cancelAnimationFrame(rafId);
    }
  };
}, []);
  return (
    <div className="app">
      <div className="bgGlow" />

      <header className="topbar">
        <div className="wrap topbarInner">
          <div className="brand">
            <span className="brandDot" />
            <span>Emily Breen</span>
          </div>

          <nav className="nav">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#timeline">Timeline</a>
          </nav>
        </div>
      </header>

      <main className="wrap">
        {/* HERO */}
        <section className="hero" data-reveal>
          <div className="heroLeft">
            <p className="kicker">Software Developer</p>

            <h1 className="h1">
              Hi there welcome, I'm <span className="accent">Emily</span>.
            </h1>

            <p className="lead">
  Experienced professional transitioning into software development, combining{" "}
  <span className="accent">15+ years of leadership and project delivery experience</span>{" "}
  with hands-on technical expertise gained through a{" "}
  <span className="accent">BA (Hons) in Computer Games Development</span> and a{" "}
  <span className="accent">six-month software development internship at Netwatch Ireland</span>.
  <br />
  <br />
  Experienced in developing{" "}
  <span className="accent">desktop applications</span>,{" "}
  <span className="accent">web platforms</span>,{" "}
  <span className="accent">mobile applications</span> and{" "}
  <span className="accent">real-time interactive systems</span>, with practical experience spanning full-stack development, database design, API integration, cloud technologies and business process automation. Comfortable working across the complete software development lifecycle, from requirements gathering and solution design through to implementation, testing and deployment within Agile environments.
  <br />
  <br />
  Bringing a unique combination of technical ability, business understanding and real-world professional experience, I am passionate about building reliable software solutions that create meaningful value. A selection of academic, professional and personal projects can be found below.
</p>

            <div className="heroActions">
              <a className="btn primary" href="#work">
                View work
              </a>
              <a className="btn ghost" href={mailtoHref}>
                Contact
              </a>
            </div>

            <div className="heroLinks">
              {links.map((l) => (
                <a key={l.label} className="chipLink" href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                  <span className="arrow">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <aside className="heroRight">
            <div className="profileCard">
              <div className="profileTop">
                <div className="avatar">
                  <img src={profileImg} alt="Emily Breen" />
                </div>
                <div>
                  <div className="profileName">Emily Breen</div>
                  <div className="profileMeta">
                     Graduate Software Developer | Full-Stack, Mobile & Desktop Applications
                    </div>
                </div>
              </div>

              <div className="profileGrid">
                <div className="mini">
                  <div className="miniLabel">Internship</div>
                  <div className="miniValue">Netwatch Ireland (2025)</div>
                </div>
                <div className="mini">
                  <div className="miniLabel">Awards</div>
                  <div className="miniValue">Bronze Age Brawl - Best in Gameplay</div>
                </div>
                <div className="mini">
                  <div className="miniLabel">Looking for</div>
                  <div className="miniValue">Software Engineer/Development roles</div>
                </div>
                <div className="mini">
                  <div className="miniLabel">Workflow</div>
                  <div className="miniValue">Agile · Git · Azure DevOps</div>
                </div>
              </div>
            </div>
          </aside>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="sectionHead">
            <h2>About</h2>
            <p>Quick snapshot of what I do and what I’m aiming for.</p>
          </div>

          <div className="cardGrid3">
            {aboutCards.map((c) => (
              <article key={c.title} className="card">
                <div className="cardTitle">{c.title}</div>
                <p className="cardBody">{c.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* WORK */}
        <section className="section" id="work">
          <div className="sectionHead">
            <h2>Work</h2>
            <p>Selected projects and highlights.</p>
          </div>

          <div className="cardGrid2">
            {projects.map((p) => (
              <article key={p.title} className="card cardHover">
            {p.images && (
  <div className="projectImageGrid">
    {p.images.map((img, index) => (
      <div
        key={index}
        className={`projectImageWrap stack ${["Tamagochi Clone", "PDF Validator", "HR Management System"].includes(p.title) ? "containMode" : ""}`}
      >
        <img src={img} alt={`${p.title} screenshot ${index + 1}`} className={`projectImage layer layer-${index}`} />
      </div>
    ))}
  </div>
)}
                <div className="cardRow">
                  <div>
                    <div className="cardTitle">{p.title}</div>
                    {p.meta && <div className="cardMeta">{p.meta}</div>}
                  </div>
                  {p.links?.[0] ? (
                    <a className="pillBtn" href={p.links[0].href} target="_blank" rel="noreferrer">
                      {p.links[0].label} ↗
                    </a>
                  ) : (
                    <span className="cardMeta">Private</span>
                  )}
                </div>
                <p className="cardBody">{p.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <div className="sectionHead">
            <h2>Skills</h2>
            <p>Tools I’m confident using day-to-day.</p>
          </div>

          <div className="skillsGrid">
            {techColumns.map((col) => (
              <article key={col.title} className="card">
                <div className="cardTitle">{col.title}</div>
                <div className="pillWrap">
                  {col.items.map((it) => (
                    <span key={it} className="pill">
                      {it}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* TIMELINE */}
        <section className="section" id="timeline">
          <div className="sectionHead">
            <h2>Timeline</h2>
            <p>Experience and education highlights.</p>
          </div>

          <div className="timeline">
            {timeline.map((t) => (
              <article key={`${t.role}-${t.org}`} className="tItem">
                <div className="tRail">
                  <span className="tDot" />
                  <span className="tLine" />
                </div>

                <div className="tCard card">
                  <div className="cardRow">
                    <div>
                      <div className="cardTitle">{t.role}</div>
                      <div className="cardMeta">{t.org}</div>
                    </div>
                    <div className="cardMeta">{t.when}</div>
                  </div>
                  <ul className="list">
                    {t.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="footer">
          <span className="muted">© {new Date().getFullYear()} Emily Breen</span>
        </footer>
      </main>
    </div>
  );
}
