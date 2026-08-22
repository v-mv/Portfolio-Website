// Style reminder: This page is the Signal & Substance portfolio—dark graphite surfaces, copper signals, offset editorial sections, and instrumentation-led motion.

import {
  ArrowUpRight,
  Award,
  BookOpen,
  CalendarDays,
  ChevronDown,
  CircuitBoard,
  Code2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  MapPin,
  MoveRight,
  Thermometer,
  Waves,
  FlaskConical,
} from "lucide-react";
import { useEffect, useState } from "react";
import { portfolio } from "../data/portfolio";
import { PortfolioNav } from "@/components/PortfolioNav";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactCard } from "@/components/ContactCard";
import { LinacExplainer } from "@/components/LinacExplainer";
import { PORTFOLIO_THEME_KEY, resolvePortfolioTheme, togglePortfolioTheme } from "@/lib/portfolioTheme";

const iconMap = {
  code: Code2,
  wave: Waves,
  circuit: CircuitBoard,
  lab: FlaskConical,
};

function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social links">
      <a href={portfolio.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={18} strokeWidth={1.65} /></a>
      <a href={portfolio.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={18} strokeWidth={1.65} /></a>
    </div>
  );
}

function SignalRule() {
  return <div className="signal-rule" aria-hidden="true"><span /></div>;
}

export default function Home() {
  const [isLight, setIsLight] = useState(() => {
    if (typeof window === "undefined") return false;
    return resolvePortfolioTheme(window.localStorage.getItem(PORTFOLIO_THEME_KEY), window.location.search) === "light";
  });

  useEffect(() => {
    const theme = isLight ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(PORTFOLIO_THEME_KEY, theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", isLight ? "#fffdf7" : "#0c0f10");
  }, [isLight]);

  return (
    <div id="top" className="portfolio-shell">
      <PortfolioNav isLight={isLight} onToggleTheme={() => setIsLight((value) => togglePortfolioTheme(value ? "light" : "dark") === "light")} />

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-section__image" />
          <div className="hero-section__wash" />
          <div className="shell hero-section__inner">
            <div className="hero-section__content">
              <div className="hero-kicker reveal reveal--one"><span className="pulse-dot" /> AVAILABLE FOR RESEARCH &amp; ENGINEERING WORK</div>
              <h1 id="hero-title" className="reveal reveal--two">Computing the<br /><em>physical world.</em></h1>
              <p className="hero-section__summary reveal reveal--three">{portfolio.summary}</p>
              <div className="hero-section__actions reveal reveal--four">
                <a className="button button--primary" href="#projects">Trace the work <ArrowUpRight size={17} strokeWidth={1.8} /></a>
                <a className="button button--text" href="#contact">Start a conversation <MoveRight size={17} strokeWidth={1.8} /></a>
              </div>
              <div className="hero-section__meta reveal reveal--four">
                <span><MapPin size={14} strokeWidth={1.5} /> {portfolio.location}</span>
                <span><span className="meta-divider" /> M.Sc. PHYSICS / ELECTRONICS</span>
              </div>
            </div>
            <div className="hero-section__annotation reveal reveal--three">
              <span className="annotation-line" />
              <span>RF SYSTEMS<br />&amp; NUMERICAL METHODS</span>
            </div>
          </div>
          <a className="scroll-cue" href="#profile" aria-label="Scroll to profile"><span>SCROLL TO EXPLORE</span><ChevronDown size={16} strokeWidth={1.4} /></a>
        </section>

        <section id="profile" className="profile-section section-shell">
          <div className="shell">
            <SectionHeader index="01" eyebrow="Profile / 2025" title="Models should explain the system, not hide it." intro="A research-minded engineer working at the meeting point of physical intuition, computational methods, and measurable outcomes." />
            <div className="profile-grid">
              <div className="profile-copy">
                <p className="lead-copy">{portfolio.about}</p>
                <div className="profile-links">
                  <a className="inline-link" href={portfolio.resume} download="Mohit_Vaidya_Resume.pdf"><Download size={16} strokeWidth={1.7} /> Download full resume <ArrowUpRight size={14} strokeWidth={1.7} /></a>
                  <a className="inline-link" href={portfolio.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} strokeWidth={1.7} /> LinkedIn profile <ArrowUpRight size={14} strokeWidth={1.7} /></a>
                </div>
              </div>
              <div className="profile-stats" aria-label="Selected profile facts">
                {portfolio.stats.map((stat) => (
                  <div className="stat" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="experience-section section-shell section-shell--dark">
          <div className="shell">
            <SectionHeader index="02" eyebrow="Experience / Field notes" title="Precision work, from vacuum systems to validated code." intro="Hands-on instrumentation experience at SAMEER, followed by a self-directed practice in computational physics research." light />
            <div className="experience-list">
              {portfolio.experience.map((item, index) => (
                <article className="experience-item" key={item.role}>
                  <div className="experience-item__rail">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div className="experience-item__line" />
                  </div>
                  <div className="experience-item__period"><CalendarDays size={15} strokeWidth={1.5} /> {item.period}</div>
                  <div className="experience-item__body">
                    <p className="company-label">{item.company}</p>
                    <h3>{item.role}</h3>
                    <p className="experience-context">{item.context}</p>
                    <p className="experience-description">{item.description}</p>
                    <ul>
                      {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                    <div className="tag-row">{item.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="linac" className="linac-section section-shell" aria-labelledby="linac-heading">
          <div className="shell">
            <SectionHeader index="03" eyebrow="Medical LINAC / Context" title="The system behind the RF measurements." intro="A short visual guide to the accelerator systems I helped fabricate and validate at SAMEER—designed for visitors who do not already speak RF." />
            <div id="linac-heading"><LinacExplainer /></div>
          </div>
        </section>

        <section id="projects" className="projects-section section-shell">
          <div className="shell">
            <SectionHeader index="04" eyebrow="Selected work / Open source" title="Two systems. One research habit." intro="Projects built end-to-end: derive the physics, solve the problem, validate the result, then make the reasoning readable." />
            <div className="project-list">
              {portfolio.projects.map((project) => (
                <article className={`project-card project-card--${project.theme}`} key={project.title}>
                  <div className="project-card__visual">
                    <div className="project-card__visual-art" aria-hidden="true" />
                    <div className="project-card__visual-label"><span>{project.number}</span><span>OPEN SOURCE / GITHUB</span></div>
                  </div>
                  <div className="project-card__content">
                    <p className="project-card__subtitle">{project.subtitle}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-card__impact"><span>Observed signal</span><strong>{project.impact}</strong></div>
                    <div className="project-card__footer">
                      <div className="tag-row">{project.stack.map((tool) => <span key={tool}>{tool}</span>)}</div>
                      <a className="icon-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><Github size={18} strokeWidth={1.6} /><ExternalLink size={14} strokeWidth={1.6} /></a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section section-shell section-shell--warm">
          <div className="shell">
            <SectionHeader index="05" eyebrow="Capabilities / Toolkit" title="A toolkit for turning physical questions into working instruments." intro="The through-line is not a list of tools. It is a repeatable way of thinking: model, measure, compare, communicate." />
            <div className="skills-grid">
              {portfolio.skills.map((skill) => {
                const Icon = iconMap[skill.icon as keyof typeof iconMap];
                return <article className="skill-card" key={skill.label}>
                  <div className="skill-card__icon"><Icon size={20} strokeWidth={1.5} /></div>
                  <h3>{skill.label}</h3>
                  <div className="skill-card__items">{skill.items.map((item) => <span key={item}>{item}</span>)}</div>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section id="education" className="education-section section-shell">
          <div className="shell education-grid">
            <div>
              <SectionHeader index="06" eyebrow="Education / Foundations" title="Strong fundamentals. Useful curiosity." />
              <div className="education-list">
                {portfolio.education.map((item) => <article className="education-item" key={item.degree}>
                  <p className="education-item__period">{item.period}</p>
                  <h3>{item.degree}</h3>
                  <p>{item.field}</p>
                  <span>{item.detail}</span>
                  <small><Award size={14} strokeWidth={1.5} /> {item.note}</small>
                </article>)}
              </div>
            </div>
            <aside className="awards-panel">
              <div className="awards-panel__top"><Award size={19} strokeWidth={1.4} /><span>RECOGNITION</span></div>
              <h3>Proof of a<br /><em>steady practice.</em></h3>
              <div className="awards-panel__list">{portfolio.awards.map((award, index) => <p key={award}><span>0{index + 1}</span>{award}</p>)}</div>
            </aside>
          </div>
        </section>

        <section id="contact" className="contact-section section-shell section-shell--dark">
          <div className="shell contact-grid">
            <div>
              <p className="section-kicker section-kicker--light">07 / CONTACT</p>
              <h2>Let’s make the<br /><em>next measurement.</em></h2>
            </div>
            <div className="contact-copy">
              <p>For research collaborations, scientific programming opportunities, or conversations about instrumentation, send a note. I’m always interested in work that rewards care, clarity, and a good model.</p>
              <ContactCard />
              <div className="contact-socials"><SocialLinks /><span className="contact-location"><MapPin size={14} strokeWidth={1.5} /> {portfolio.location}</span></div>
            </div>
          </div>
          <div className="shell footer-bar"><span>© {new Date().getFullYear()} {portfolio.name}</span><span>COMPUTATIONAL PHYSICS / SCIENTIFIC PROGRAMMING</span><a href="#top">Back to top ↑</a></div>
        </section>
      </main>
    </div>
  );
}
