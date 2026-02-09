import './App.css'

type LinkItem = { label: string; href: string }
type Project = { name: string; desc: string; live?: string; code?: string }

const links: LinkItem[] = [
  { label: 'GitHub', href: 'https://github.com/yourusername' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
  { label: 'Email', href: 'mailto:emilybreen8@gmail.com' },
]

const projects: Project[] = [
  {
    name: 'Project One',
    desc: 'A short description of what it does and what you built it with.',
    live: 'https://example.com',
    code: 'https://github.com/yourusername/project-one',
  },
  {
    name: 'Project Two',
    desc: 'Another project—highlight impact, tech, and what you learned.',
    code: 'https://github.com/yourusername/project-two',
  },
]

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>Your Name</h1>
        <p>Frontend Developer · React · TypeScript</p>

        <nav className="links">
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </nav>
      </header>

      <section>
        <h2>About</h2>
        <p>
          I build fast, accessible web apps with React + TypeScript. I like clean UI, good DX,
          and performance.
        </p>
      </section>

      <section>
        <h2>Projects</h2>

        <div className="grid">
          {projects.map((p) => (
            <article key={p.name} className="card">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="cardLinks">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer">
                    Live
                  </a>
                )}
                {p.code && (
                  <a href={p.code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <small>© {new Date().getFullYear()} Your Name</small>
      </footer>
    </div>
  )
}
