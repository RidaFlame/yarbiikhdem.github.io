import { SiteContent } from '../types';

export const initialContent: SiteContent = {
  home: {
    hero: {
      name: "Rida Khanoufi",
      title: "UI/UX Designer & Frontend Developer",
      subtitle: "Second-year UI Design student based in Agadir, Morocco.",
      description: "Designing clean, modern interfaces and bringing them to life with Figma and code.",
      image: "https://i.pinimg.com/736x/cf/a9/9f/cfa99fe9dc1fb9e1c7e81868fffeb2b1.jpg", 
      ctaPrimary: "View selected projects",
      ctaSecondary: "Contact me"
    },
    highlightStrip: [
      "Figma Proficient",
      "User-Centered Design",
      "Responsive Web",
      "Smooth Micro-Interactions",
      "Figma Proficient",
      "User-Centered Design"
    ],
    intro: {
      title: "Crafting thoughtful digital experiences",
      description: "I design and develop interfaces that feel simple, clear, and purposeful. From first sketches and UX flows to polished UI and front-end builds, every detail is focused on helping users move smoothly through your product."
    },
    services: [
      {
        title: "UI Design",
        description: "Clear layouts, strong typography, and consistent design systems for web and mobile."
      },
      {
        title: "UX & Product Thinking",
        description: "Personas, user journeys, flows, and wireframes that keep decisions focused on real needs."
      },
      {
        title: "Frontend Development",
        description: "Clean, responsive interfaces using HTML, CSS, and JavaScript in Visual Studio Code."
      },
      {
        title: "Prototyping",
        description: "Interactive Figma prototypes to test ideas quickly before development."
      }
    ],
    currently: "Exploring clean design systems, scroll-based interactions, and turning case studies into full live websites."
  },
  about: {
    header: "About Rida",
    subheader: "UI-focused designer with a love for details and smooth experiences.",
    bio: "I am a second-year UI design student in Agadir, Morocco, specializing in user interface design and frontend implementation. My work focuses on clean layouts, readable typography, and interactive details that make digital products feel both modern and intuitive. Between Figma, design systems, and HTML/CSS/JS in VS Code, I enjoy owning the full journey from concept to a working interface. I care about structure, spacing, and motion, so every screen feels intentional and easy to use.",
    quickFacts: {
      location: "Agadir, Morocco",
      role: "UI/UX Designer & Frontend Developer",
      tools: "Figma, VS Code, Affinity Designer, GitHub",
      interests: "Web design, music platforms, e-commerce, clean portfolio experiences"
    },
    skills: {
      ui: "Design systems, components, layout grids, color and type.",
      ux: "Research basics, personas, user flows, information architecture, wireframes.",
      frontend: "Semantic HTML, modern CSS, basic JavaScript for interactions/animations.",
      prototyping: "Clickable flows in Figma to validate UX and showcase UI."
    },
    process: [
      {
        title: "Understand",
        description: "Clarify problem, audience, goals before drawing screens."
      },
      {
        title: "Structure",
        description: "Map user journeys, flows, content for logical product."
      },
      {
        title: "Design",
        description: "Build clean, consistent UI with clear hierarchy, reusable components."
      },
      {
        title: "Refine",
        description: "Add micro-interactions, polish states, ensure device responsiveness."
      }
    ],
    cta: "Open to internships, junior roles, freelance UI/UX. Let’s work together."
  },
  projects: [
    {
      id: "destitia",
      title: "Destitia",
      category: "UX/UI - Web - Collaborative - Responsive",
      description: "Destitia is a collaborative travel platform for discovering Morocco's destinations, booking experiences, and planning trips with intuitive flows and vibrant visuals tied to local culture.",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/0f4acc239218723.6924e0eb6307a.jpg",
      caseStudyUrl: "https://www.behance.net/gallery/239218723/Destina-A-Modern-Moroccan-Travel-UIUX-Case-Study",
      role: "UI Design lead (visual systems, layouts, prototyping, frontend responsiveness). Collaborated with Fatima Zahra Habib (UX Researcher).",
      problem: "Travel sites overwhelm with cluttered listings, poor mobile for Morocco itineraries (beach escapes, Atlas hikes).",
      solution: "Clean card-based home with filters, detailed destination pages, seamless booking. Responsive: large hero images, minimal nav, one-tap mobile actions.",
      process: [
        "Fatima's research: Personas (solo travelers, families), key tasks.",
        "My work: Wireframes to high-fid UI, design system (buttons/cards/modals).",
        "Responsive breakpoints for Agadir coastal vibes."
      ],
      results: "Polished team concept ready for dev. Showcases collaboration + strong UI. Live prototype available."
    },
    {
      id: "smart-chef",
      title: "Smart Chef",
      category: "UX/UI - Mobile",
      description: "Smart Chef makes finding recipes, managing ingredients, and step-by-step cooking easy without overwhelm.",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/6aee2c228379927.6851e219d551f.png",
      caseStudyUrl: "https://www.behance.net/gallery/228379927/SmartChef-Ux-Case-Study",
      problem: "Recipe apps visually noisy, not optimized for quick cooking checks.",
      solution: "Clean interface: recipes/favorites/step-by-step mode, legible typography, simple nav.",
      process: [
        "Personas for home cooks/busy users.",
        "Flows for search/save/follow recipes.",
        "Card layouts, clear steps, contrasting buttons."
      ],
      results: "Mobile concept helps cook confidently with focused, calm visuals."
    },
    {
      id: "vinyl-echo",
      title: "Vinyl Echo",
      category: "UI/UX - E-commerce - Web",
      description: "Vinyl Echo for vinyl lovers: premium style, smooth shopping for albums/collections.",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/70097f239729321.6930ab4c746dc.jpg",
      caseStudyUrl: "https://www.behance.net/gallery/239729321/VINYL-ECHO-Music-ECommerce-Website-Design",
      problem: "Online vinyl stores outdated/generic, hard to enjoy browsing.",
      solution: "Refined interface: large covers, clear categories, modern music-inspired visuals for hip-hop/contemporary collectors.",
      process: [
        "Info architecture: home/catalog/product/cart/checkout.",
        "Responsive layouts, retro-modern mood (warm tones, strong typography).",
        "Flows for discover/pre-order/buy."
      ],
      results: "Full website turns crate-digging into polished digital experience."
    }
  ],
  contact: {
    header: "Let’s build something clean and modern",
    subheader: "Whether UI concept, case study, or live website, reach out.",
    email: "ridakhanoufi0201@gmail.com",
    phone: "0637102373",
    location: "Agadir, Morocco",
    formspreeId: "xgvgrzqr", // Updated with user provided ID
    socials: {
      behance: "www.behance.net/ridakhanoufi",
      linkedin: "www.linkedin.com/in/rida-khanoufi-99108b338/",
      github: "www.github.com/RidaFlame"
    }
  }
};