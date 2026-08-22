import { ArrowUpRight, Crosshair, RadioTower, ShieldCheck, Zap } from "lucide-react";
import { portfolio } from "../data/portfolio";

const iconMap = {
  rf: RadioTower,
  target: Zap,
  shape: Crosshair,
  verify: ShieldCheck,
};

/** A concise, equipment-focused introduction to the RF LINAC work in the experience timeline. */
export function LinacExplainer() {
  return (
    <div className="linac-explainer">
      <div className="linac-intro-grid">
        <figure className="linac-image-card linac-image-card--rf">
          <img src={portfolio.linac.rfImage} alt="Illustrative close view of copper RF accelerating cavities, vacuum flanges, and waveguide hardware." />
          <figcaption><span>01</span> RF accelerating structure / illustrative visual</figcaption>
        </figure>
        <div className="linac-intro-card">
          <p className="linac-eyebrow">At a glance</p>
          <h3>From radio-frequency energy to a highly controlled beam.</h3>
          <p>A medical linear accelerator, or LINAC, is an electricity-driven machine used in external-beam radiation therapy. In broad terms, it uses microwave technology to accelerate electrons; those electrons can be delivered directly or used to generate high-energy x-rays.</p>
          <p className="linac-intro-card__note">This is equipment context for my RF systems work at SAMEER, not clinical or treatment guidance.</p>
          <a className="inline-link" href={portfolio.linac.sourceHref} target="_blank" rel="noreferrer">Read the public primer <ArrowUpRight size={14} strokeWidth={1.7} /></a>
        </div>
      </div>

      <div className="linac-flow" aria-label="How a medical linear accelerator works at a high level">
        {portfolio.linac.steps.map((step) => {
          const Icon = iconMap[step.icon as keyof typeof iconMap];
          return (
            <article className="linac-step" key={step.number}>
              <div className="linac-step__top"><span>{step.number}</span><Icon size={18} strokeWidth={1.5} /></div>
              <h3>{step.label}</h3>
              <p>{step.text}</p>
            </article>
          );
        })}
      </div>

      <div className="linac-contribution-grid">
        <div className="linac-contribution-copy">
          <p className="linac-eyebrow">Where I contributed</p>
          <h3>Precision fabrication, vacuum integrity, and RF validation.</h3>
          <p>At SAMEER, I contributed to the fabrication and characterisation of RF accelerating structures for 6 MeV and 15 MeV medical LINAC systems. The work combined careful mechanical integration with vacuum measurements, RF component checks, and traceable quality-assurance documentation.</p>
          <div className="tag-row"><span>RF cavities</span><span>Waveguides</span><span>Helium leak detection</span><span>Shunt impedance</span></div>
          <a className="button button--text" href="#experience">See the SAMEER field notes <ArrowUpRight size={17} strokeWidth={1.8} /></a>
        </div>
        <figure className="linac-image-card linac-image-card--gantry">
          <img src={portfolio.linac.gantryImage} alt="Illustrative view of a modern medical linear accelerator gantry and empty treatment couch." />
          <figcaption><span>02</span> Gantry and treatment-room context / illustrative visual</figcaption>
        </figure>
      </div>
    </div>
  );
}
