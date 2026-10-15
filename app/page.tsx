import Image from "next/image";
import KindCards from "../components/KindCards";
import { profile, facts, about, kinds, projects, skills, jobs, faq, shot } from "../data/content";
import valera from "../public/valera.jpg";

const host = (url: string) => new URL(url).hostname.replace("www.", "");

export default function Home() {
  return (
    <main>
      <header className="hero">
        <div className="hero-text">
          <p className="role">{profile.role}</p>
          <h1>{profile.headline}</h1>
          <p className="intro">{profile.intro}</p>
          <div className="actions">
            <a className="btn" href={profile.telegram} target="_blank" rel="noopener noreferrer">Написати в Telegram</a>
            <a className="btn ghost" href={`mailto:${profile.email}`}>Email</a>
            <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <dl className="facts">
            {facts.map((f) => (
              <div key={f.label}><dt>{f.value}</dt><dd>{f.label}</dd></div>
            ))}
          </dl>
        </div>
        <Image className="photo" src={valera} alt={profile.name} width={800} height={1000} priority />
      </header>

      <section aria-labelledby="about">
        <h2 id="about">Про мене</h2>
        <div className="prose">{about.map((t) => <p key={t}>{t}</p>)}</div>
        <div className="marquee" aria-label="Технології">
  <div className="track">
    {[false, true].map((hidden) => (
      <ul key={String(hidden)} aria-hidden={hidden || undefined}>
        {skills.map((s) => (
          <li key={s.name}>
            {s.icon ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={s.icon} alt="" width={22} height={22} />
            ) : (
              <span className="letter" aria-hidden>{s.name[0]}</span>
            )}
            {s.name}
          </li>
        ))}
      </ul>
    ))}
  </div>
</div>
      </section>

      <section aria-labelledby="kinds">
        <h2 id="kinds">Які сайти під які задачі</h2>
        <KindCards items={kinds} projects={projects} />
      </section>

      <section aria-labelledby="projects">
        <h2 id="projects">Проєкти та відгуки</h2>
        <ul className="grid">
          {projects.map((p) => (
            <li key={p.url} className="card">
              <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Відкрити сайт ${p.title}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={shot(p)} alt={`Скріншот сайту ${p.title}`} loading="lazy" width={700} height={440} />
              </a>
              <div className="meta">
                <h3>{p.title}</h3>
                <p>{p.task}</p>
                <blockquote>
                  <p>{p.review}</p>
                  <footer>{p.author}</footer>
                </blockquote>
                <a className="host" href={p.url} target="_blank" rel="noopener noreferrer">{host(p.url)}</a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="exp">
        <h2 id="exp">Досвід</h2>
        <ol className="jobs">
          {jobs.map((j) => (
            <li key={j.company}>
              <div className="row"><strong>{j.company}</strong><span>{j.period}</span></div>
              <p>{j.note}</p>
              <p className="stack">{j.stack}</p>
            </li>
          ))}
        </ol>
        <p className="edu">Освіта: Hebron IT Academy (2023–2024), Todor Academy (2024–2025), Бердянський державний педагогічний університет, право (2023–2027).</p>
      </section>

      <section aria-labelledby="faq">
        <h2 id="faq">Питання та відповіді</h2>
        <div className="faq">
          {faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="contact">
        <h2>Давайте працювати разом</h2>
        <p><a href={profile.telegram} target="_blank" rel="noopener noreferrer">{profile.telegramHandle}</a></p>
        <p><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
        <p><a href={`tel:${profile.phone}`}>{profile.phone}</a></p>
      </footer>
    </main>
  );
}