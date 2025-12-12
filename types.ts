
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  caseStudyUrl?: string;
  role?: string;
  problem?: string;
  solution?: string;
  process?: string[];
  results?: string;
  team?: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface SiteContent {
  home: {
    hero: {
      name: string;
      title: string;
      subtitle: string;
      description: string;
      image: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    highlightStrip: string[];
    intro: {
      title: string;
      description: string;
    };
    services: Service[];
    currently: string;
  };
  about: {
    header: string;
    subheader: string;
    bio: string;
    quickFacts: {
      location: string;
      role: string;
      tools: string;
      interests: string;
    };
    skills: {
      ui: string;
      ux: string;
      frontend: string;
      prototyping: string;
    };
    process: Step[];
    cta: string;
  };
  projects: Project[];
  contact: {
    header: string;
    subheader: string;
    email: string;
    phone: string;
    location: string;
    formspreeId: string; // Added this field
    socials: {
      behance: string;
      linkedin: string;
      github: string;
    };
  };
}
