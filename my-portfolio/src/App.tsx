// src/App.tsx
import "./App.css";
import profileImg from "./assets/IMG_2545.jpg";

type Link = { label: string; href: string };
type Card = { title: string; body: string; meta?: string; links?: Link[] };
type TimelineItem = { role: string; org: string; when: string; bullets: string[] };

const links: Link[] = [
  { label: "GitHub", href: "https://github.com/Emily-Breen" },
  { label: "Bronze Age Brawl", href: "https://scaldypanda.itch.io/bronze-age-brawl" },
];

const aboutCards: Card[] = [
  {
    title: "About",
    body:
      "Final-year Computer Games Development student at SETU Carlow with hands-on industry experience, including a six-month internship at Netwatch Ireland. Strong foundation across frontend, backend, and mobile development.",
  },
  {
    title: "Now",
    body:
      "Seeking a graduate / junior software developer role. Comfortable working in Agile/Scrum teams and delivering production-ready features with developers and QA.",
  },
  {
    title: "Focus",
    body:
      "React + TypeScript UI, .NET backend integration, REST APIs, clean code, and collaborative workflows using Git/GitHub and Azure DevOps.",
  },
];

const techColumns: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["C#", "TypeScript", "JavaScript", "C++", "SQL", "Python", "GDScript"] },
  { title: "Frontend", items: ["React", "React Native", "HTML", "CSS"] },
  { title: "Backend", items: [".NET", "Node.js", "REST APIs"] },
  { title: "Tools & Practices", items: ["Git/GitHub", "Azure DevOps", "Agile/Scrum", "OOP", "Unit Testing", "Debugging"] },
];

const projects: Card[] = [
  {
    title: "Bronze Age Brawl",
    meta: "Award-winning · EA Games Fleadh 2024",
    body:
      "Lead Designer within a multidisciplinary team. Contributed to gameplay design, iteration, and feature development using Agile practices and collaborative workflows.",
    links: [{ label: "View project", href: "https://scaldypanda.itch.io/bronze-age-brawl" }],
  },
  {
    title: "Netwatch Internship Work",
    meta: "Full-stack + mobile · 2025",
    body:
      "Developed and maintained web applications using React, TypeScript, and C# (.NET). Contributed to React Native mobile features and integrated RESTful APIs across frontend and backend systems.",
  },
];

const timeline: TimelineItem[] = [
  {
    role: "Software Developer (Intern)",
    org: "Netwatch Ireland",
    when: "2025 · 6-month internship",
    bullets: [
      "React + TypeScript + C# (.NET) full-stack development",
      "React Native mobile contribution",
      "Designed and implemented a PWA",
      "Agile/Scrum: stand-ups, sprint planning, reviews",
      "Git/GitHub + Azure DevOps collaboration",
    ],
  },
  {
    role: "Senior Project Lead",
    org: "Datagroup",
    when: "Nov 2009 – Present",
    bullets: [
      "Led cross-functional teams under strict deadlines",
      "Coordinated client requirements and third-party service providers",
      "Onboarding/training for new systems and processes",
      "Ensured compliance with data protection and regulatory requirements",
    ],
  },
  {
    role: "BA (Hons) Computer Games Development",
    org: "SETU Carlow",
    when: "Sept 2022 – Present",
    bullets: [
      "Lead Designer of “Bronze Age Brawl” (EA Games Fleadh 2024)",
      "SETU Carlow Game Jam 2023 & 2024",
      "Built strong skills in OOP, problem-solving, teamwork",
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
        <section className="hero">
          <div className="heroLeft">
            <p className="kicker">Junior Software Developer</p>

            <h1 className="h1">
              Hi, I’m <span className="accent">Emily</span>.
            </h1>

            <p className="lead">
              Final-year Computer Games Development student with a six-month internship at{" "}
              <span className="accent">Netwatch Ireland</span>. I build production-ready features with{" "}
              <span className="accent">React</span>, <span className="accent">TypeScript</span> and{" "}
              <span className="accent">.NET</span>.
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
                  <div className="profileMeta">React · TypeScript · .NET</div>
                </div>
              </div>

              <div className="profileGrid">
                <div className="mini">
                  <div className="miniLabel">Internship</div>
                  <div className="miniValue">Netwatch Ireland (2025)</div>
                </div>
                <div className="mini">
                  <div className="miniLabel">Project</div>
                  <div className="miniValue">Bronze Age Brawl (EA Games Fleadh 2024)</div>
                </div>
                <div className="mini">
                  <div className="miniLabel">Looking for</div>
                  <div className="miniValue">Graduate / Junior roles</div>
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
