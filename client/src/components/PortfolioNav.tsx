// Style reminder: The navigation behaves like a compact lab index—opaque when needed for contrast, restrained, and keyboard friendly.

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { portfolio } from "../data/portfolio";

const links = [
  { label: "Profile", href: "#profile" },
  { label: "Experience", href: "#experience" },
  { label: "LINAC", href: "#linac" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

type PortfolioNavProps = {
  isLight: boolean;
  onToggleTheme: () => void;
};

export function PortfolioNav({ isLight, onToggleTheme }: PortfolioNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 22);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
      <div className="site-nav__inner">
        <a className="brand" href="#top" onClick={closeMenu} aria-label={`${portfolio.name} home`}>
          <span className="brand__mark"><img src="/assets/mohit-mark.svg" alt="" /></span>
          <span className="brand__wordmark">MOHIT VAIDYA</span>
        </a>

        <nav className={`site-nav__links ${menuOpen ? "site-nav__links--open" : ""}`} aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="site-nav__resume" href={portfolio.resume} download="Mohit_Vaidya_Resume.pdf" onClick={closeMenu}>
            Resume <span>↗</span>
          </a>
        </nav>

        <div className="site-nav__actions">
          <button className={`theme-toggle ${isLight ? "theme-toggle--light" : "theme-toggle--dark"}`} type="button" onClick={onToggleTheme} aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"} aria-pressed={isLight} title={isLight ? "Light theme active — switch to dark" : "Dark theme active — switch to light"}>
            {isLight ? <Moon size={17} strokeWidth={1.7} /> : <Sun size={17} strokeWidth={1.7} />}
            <span className="theme-toggle__label">{isLight ? "Light" : "Dark"}</span>
          </button>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} strokeWidth={1.7} /> : <Menu size={22} strokeWidth={1.7} />}
          </button>
        </div>
      </div>
    </header>
  );
}
