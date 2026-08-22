// Style reminder: Keep all portfolio content aligned with the Signal & Substance direction—precise, editorial, and grounded in verified resume details.

export const portfolio = {
  name: "Mohit Vaidya",
  shortName: "MV",
  title: "Computational Physics Researcher",
  eyebrow: "M.Sc. Physics (Electronics) · Scientific Programming · RF Instrumentation",
  location: "Mumbai, India",
  linkedin: "https://linkedin.com/in/justmv03",
  github: "https://github.com/v-mv",
  resume: "/assets/Mohit_Vaidya_Research_Resume.pdf",
  summary:
    "I build validated computational models and precision measurement workflows for real physical systems—from quantum wave packets to medical RF accelerating structures.",
  about:
    "Physics graduate with a strong foundation in applied and computational physics, electronics, and precision instrumentation. At SAMEER, a national research institution under MeitY, I contributed to the fabrication and performance validation of medical-grade RF accelerating systems. Alongside research work, I built a Python automation tool that replaced a manual MATLAB workflow for RF cavity analysis. I now deepen that practice through end-to-end computational physics projects grounded in analytical validation, error quantification, and clear technical documentation.",
  status: "Open to research, scientific programming, and instrumentation opportunities",
  stats: [
    { value: "< 0.001%", label: "reported numerical error" },
    { value: "2", label: "open-source physics projects" },
    { value: "6 / 15 MeV", label: "medical LINAC systems" },
  ],
  experience: [
    {
      period: "Oct 2024 — Apr 2025",
      role: "Project Assistant — RF Systems & Instrumentation",
      company: "SAMEER",
      context: "Society for Applied Microwave Electronics Engineering and Research · Mumbai",
      description:
        "Contributed to the design, fabrication, and validation of RF accelerating tubes for medical LINAC systems—high-precision scientific instrumentation supporting national healthcare infrastructure.",
      highlights: [
        "Fabricated and characterised RF accelerating structures for 6 MeV and 15 MeV medical LINAC systems.",
        "Performed vacuum integrity testing and helium leak detection with systematic measurement and documentation.",
        "Validated waveguides, RF couplers, and RF loads by measuring shunt impedance against design specifications.",
        "Built a Python automation tool for RF cavity analysis with SciPy resonance peak detection, impedance integration, and publication-ready plots.",
        "Executed cavity alignment, mechanical integration, bake-out procedures, and critical vacuum measurements with QA traceability.",
      ],
      tools: ["Python", "SciPy", "RF testing", "Vacuum technology", "QA documentation"],
    },
    {
      period: "Apr 2025 — Present",
      role: "Independent Computational Physics Research",
      company: "Self-directed",
      context: "Applied simulation and scientific programming",
      description:
        "Deepening applied expertise through end-to-end simulation projects, each grounded in real physics problems, validated against analytical solutions, and documented to research standards.",
      highlights: [
        "Building numerical solvers and simulation frameworks with NumPy, SciPy, Matplotlib, and rigorous error quantification.",
        "Developing MATLAB expertise for 3D finite difference thermal modelling, gradient-based optimisation, and sparse matrix computation.",
        "Published two open-source computational physics projects with derivations, validation reports, and structured documentation.",
      ],
      tools: ["NumPy", "MATLAB", "Finite differences", "Optimisation", "Jupyter"],
    },
  ],
  linac: {
    sourceHref: "https://www.radiologyinfo.org/en/info/linac",
    rfImage: "/assets/linac-rf-accelerator-detail.png",
    gantryImage: "/assets/linac-gantry-context.png",
    steps: [
      {
        number: "01",
        label: "Accelerate",
        icon: "rf",
        text: "Microwave RF power accelerates electrons through a waveguide—the precision structure at the centre of the system.",
      },
      {
        number: "02",
        label: "Convert",
        icon: "target",
        text: "For x-ray treatments, accelerated electrons strike a metal target, producing high-energy x-rays.",
      },
      {
        number: "03",
        label: "Shape",
        icon: "shape",
        text: "Beam-shaping hardware and a rotating gantry support a prescribed beam path from carefully selected angles.",
      },
      {
        number: "04",
        label: "Verify",
        icon: "verify",
        text: "Interlocks, calibrated measurements, and repeatable QA checks help confirm that the equipment performs as intended.",
      },
    ],
  },
  projects: [
    {
      number: "01",
      title: "PsiEvolutionKit",
      subtitle: "Quantum Mechanics Simulation Toolkit",
      description:
        "A 1D Schrödinger equation solver using finite difference methods, covering the infinite square well, harmonic oscillator, and time-evolving wave packets with animated visualisations.",
      impact: "< 0.001% numerical error vs. analytical solutions",
      stack: ["Python", "NumPy", "SciPy", "Matplotlib"],
      href: "https://github.com/v-mv/PsiEvolutionKit",
      theme: "cyan",
    },
    {
      number: "02",
      title: "3D Heatsink",
      subtitle: "Thermal Modelling & Topology Optimisation",
      description:
        "A 3D finite difference thermal solver with a 7-point spatial stencil and Robin/Neumann boundary conditions, paired with gradient-based topology optimisation.",
      impact: "Sparse Laplacian assembly reduces complexity from O(N²) to O(N)",
      stack: ["MATLAB", "FDM", "fmincon SQP", "Sparse matrices"],
      href: "https://github.com/v-mv/3d-Heatsink",
      theme: "copper",
    },
  ],
  skills: [
    {
      label: "Scientific programming",
      icon: "code",
      items: ["Python", "NumPy", "SciPy", "Matplotlib", "MATLAB", "Simulink"],
    },
    {
      label: "Physics & methods",
      icon: "wave",
      items: ["Quantum mechanics", "Finite difference methods", "Numerical methods", "Data analysis", "Visualisation"],
    },
    {
      label: "Electronics & embedded",
      icon: "circuit",
      items: ["Embedded C", "C++", "Assembly", "VHDL", "Proteus", "Keil µVision"],
    },
    {
      label: "Instrumentation & research",
      icon: "lab",
      items: ["RF performance testing", "Vacuum technology", "Helium leak detection", "Shunt impedance", "Jupyter", "Technical reporting"],
    },
  ],
  education: [
    {
      period: "Sep 2021 — Jul 2023",
      degree: "Master of Science",
      field: "Physics with Specialisation in Electronics",
      detail: "Mumbai University · GPA 7.17 / 10",
      note: "Academic Topper — NES Ratnam College (2022–23)",
    },
    {
      period: "Jun 2018 — Jun 2021",
      degree: "Bachelor of Science",
      field: "Physics",
      detail: "Mumbai University · GPA 6.89 / 10",
      note: "Class Topper — IAPT NGPE Examination (Apr 2021)",
    },
  ],
  awards: [
    "Academic Topper — M.Sc. Physics, NES Ratnam College of Arts, Science and Commerce (2022–23)",
    "Class Topper — National Graduate Physics Examination (NGPE), Indian Association of Physics Teachers, 2021",
  ],
} as const;

export type Portfolio = typeof portfolio;
