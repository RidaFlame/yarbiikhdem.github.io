import React from 'react';
import { useContent } from '../context/ContentContext';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Layout, Terminal, Palette, MousePointer, Code, Layers, ArrowRight, GraduationCap, PenTool, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const { content } = useContent();

  const skillGroups = [
    {
      title: "UI & Visual Design",
      icon: <Palette className="w-6 h-6" />,
      skills: content.about.skills.ui.split(',').map(s => s.trim()),
      description: "Creating aesthetic, accessible systems."
    },
    {
      title: "UX Strategy",
      icon: <Layers className="w-6 h-6" />,
      skills: content.about.skills.ux.split(',').map(s => s.trim()),
      description: "Research backed decisions."
    },
    {
      title: "Frontend Dev",
      icon: <Code className="w-6 h-6" />,
      skills: content.about.skills.frontend.split(',').map(s => s.trim()),
      description: "Translating design to code."
    },
    {
      title: "Prototyping",
      icon: <MousePointer className="w-6 h-6" />,
      skills: content.about.skills.prototyping.split(',').map(s => s.trim()),
      description: "Interactive experiences."
    }
  ];

  return (
    <div className="pt-24 pb-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-16 mb-24 items-start">
          <AnimatedSection>
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-tight">
              About<br />
              <span className="text-accent">Rida</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="space-y-8 pt-4">
             <h2 className="text-2xl md:text-3xl font-medium leading-relaxed">
               {content.about.subheader}
             </h2>
             <p className="text-gray-600 leading-relaxed text-lg">
               {content.about.bio}
             </p>
             
             {/* Quick Stats Row */}
             <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
                <div>
                   <div className="flex items-center gap-2 text-gray-500 mb-1">
                      <MapPin className="w-4 h-4" /> Location
                   </div>
                   <div className="font-bold text-lg">{content.about.quickFacts.location}</div>
                </div>
                <div>
                   <div className="flex items-center gap-2 text-gray-500 mb-1">
                      <Briefcase className="w-4 h-4" /> Role
                   </div>
                   <div className="font-bold text-lg">{content.about.quickFacts.role}</div>
                </div>
             </div>
          </AnimatedSection>
        </div>
      </div>

      {/* High Attention Skills Section - Dark Mode */}
      <section className="bg-black text-white py-24 px-6 mb-32 -mx-6 md:mx-0 md:rounded-[3rem] overflow-hidden relative">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="max-w-7xl mx-auto relative z-10">
            <AnimatedSection className="mb-16">
               <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Arsenal & Expertise</h2>
               <p className="text-gray-400 text-lg max-w-2xl">
                 A carefully curated stack of tools and methodologies I use to bring digital products to life.
               </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
               {skillGroups.map((group, i) => (
                 <AnimatedSection key={i} delay={i * 0.1} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-6">
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                             {group.icon}
                          </div>
                          <div>
                             <h3 className="text-2xl font-bold font-display">{group.title}</h3>
                             <p className="text-sm text-gray-400">{group.description}</p>
                          </div>
                       </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                       {group.skills.map((skill, idx) => (
                         <span key={idx} className="px-4 py-2 bg-black/50 border border-white/10 rounded-lg text-sm font-medium text-gray-300 group-hover:border-accent/30 group-hover:text-white transition-colors">
                           {skill}
                         </span>
                       ))}
                    </div>
                 </AnimatedSection>
               ))}
            </div>
         </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        {/* Academic Background Timeline */}
        <section className="mb-32">
          <AnimatedSection className="mb-12 text-center">
             <h2 className="text-4xl font-display font-bold flex items-center justify-center gap-3">
               <GraduationCap className="w-8 h-8 text-accent" />
               Academic Background
             </h2>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-5 md:before:left-1/2 md:before:-ml-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {/* Item 1 */}
            <AnimatedSection className="relative flex flex-col md:flex-row items-start md:items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active pl-12 md:pl-0">
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border border-white bg-accent text-white shadow z-10 top-0 md:top-auto">
                 <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="w-full md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                  <div className="font-bold text-gray-900">Specialist in UI Design</div>
                  <time className="font-mono text-xs font-medium text-accent">2025 - Present</time>
                </div>
                <div className="text-sm text-gray-500">Cité des Métiers et Compétences Souss-Massa, Agadir</div>
                <div className="text-sm text-gray-600 mt-2">Second Year</div>
              </div>
            </AnimatedSection>

            {/* Item 2 */}
            <AnimatedSection delay={0.1} className="relative flex flex-col md:flex-row items-start md:items-center justify-between md:justify-normal md:odd:flex-row-reverse group pl-12 md:pl-0">
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-200 shadow z-10 top-0 md:top-auto">
                 <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              </div>
              <div className="w-full md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                  <div className="font-bold text-gray-900">UX UI Design</div>
                  <time className="font-mono text-xs font-medium text-gray-500">2024 - 2025</time>
                </div>
                <div className="text-sm text-gray-500">Cité des Métiers et Compétences Souss-Massa, Agadir</div>
                <div className="text-sm text-gray-600 mt-2">First Year</div>
              </div>
            </AnimatedSection>

             {/* Item 3 */}
            <AnimatedSection delay={0.2} className="relative flex flex-col md:flex-row items-start md:items-center justify-between md:justify-normal md:odd:flex-row-reverse group pl-12 md:pl-0">
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-200 shadow z-10 top-0 md:top-auto">
                 <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              </div>
              <div className="w-full md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                  <div className="font-bold text-gray-900">Baccalaureate in Physical Sciences</div>
                  <time className="font-mono text-xs font-medium text-gray-500">2023 - 2024</time>
                </div>
                <div className="text-sm text-gray-500">Lycée Hassan 2, Tiznit</div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Process Section */}
        <AnimatedSection className="mb-32">
          <div className="bg-white border border-gray-200 text-black rounded-[3rem] p-8 md:p-20 overflow-hidden relative">
             <h2 className="text-3xl font-display font-bold mb-16 relative z-10 text-center md:text-left">How I Work</h2>
            
            <div className="relative z-10 grid md:grid-cols-4 gap-12">
               {content.about.process.map((step, i) => (
                 <div key={i} className="relative group text-center md:text-left">
                    {/* Number */}
                    <div className="text-5xl md:text-6xl font-display font-bold text-gray-200 group-hover:text-accent transition-colors duration-500 mb-6">
                      0{i+1}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                 </div>
               ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.4} className="text-center max-w-2xl mx-auto">
           <h2 className="text-4xl font-display font-bold mb-6">Let's build something together</h2>
           <p className="text-gray-600 mb-8 text-lg">{content.about.cta}</p>
           <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-white px-10 py-4 rounded-full font-medium hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30 hover:scale-105 transform duration-200">
             Get in Touch <ArrowRight className="w-4 h-4" />
           </Link>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;