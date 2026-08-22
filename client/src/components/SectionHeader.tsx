// Style reminder: Section headers are Signal & Substance wayfinding—small, measured labels paired with confident editorial titles.

type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
};

export function SectionHeader({ index, eyebrow, title, intro, light = false }: SectionHeaderProps) {
  return (
    <div className={`section-header ${light ? "section-header--light" : ""}`}>
      <div className="section-header__index">{index}</div>
      <div>
        <p className="section-kicker">{eyebrow}</p>
        <h2>{title}</h2>
        {intro ? <p className="section-header__intro">{intro}</p> : null}
      </div>
    </div>
  );
}
