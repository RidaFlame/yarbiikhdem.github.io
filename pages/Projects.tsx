import React, { useRef } from 'react';
import { useContent } from '../context/ContentContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

const ProjectItem: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen py-24 border-b border-gray-100 last:border-0">
      <div className="grid md:grid-cols-12 gap-8 md:gap-16">
        
        {/* Sticky Sidebar: Title & Meta */}
        <div className="md:col-span-4 relative">
          <div className="md:sticky md:top-32">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-accent font-bold tracking-widest text-xs uppercase mb-4 block"
            >
              {project.category}
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight"
            >
              {project.title}
            </motion.h2>

            <div className="space-y-6 text-sm">
              {project.role && (
                <div className="bg-surface p-6 rounded-xl">
                  <h4 className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-2">Role</h4>
                  <p className="text-gray-900 font-medium">{project.role}</p>
                </div>
              )}
               <div className="flex gap-4 pt-4">
                 {project.caseStudyUrl ? (
                    <a 
                      href={project.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold border-b border-black pb-1 hover:text-accent hover:border-accent transition-colors"
                    >
                        View Case Study on Behance <ArrowUpRight className="w-4 h-4" />
                    </a>
                 ) : (
                    <button className="flex items-center gap-2 text-sm font-bold border-b border-black pb-1 hover:text-accent hover:border-accent transition-colors">
                        Coming Soon
                    </button>
                 )}
               </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content: Image & Details */}
        <div className="md:col-span-8 space-y-16">
          {/* Parallax Image Container */}
          <div className="w-full aspect-video rounded-3xl overflow-hidden bg-gray-100 relative shadow-2xl">
             <motion.div style={{ y: imageY }} className="w-full h-[120%] -mt-[10%]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover" 
                />
             </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
            >
               <h3 className="text-2xl font-bold mb-4 font-display">The Challenge</h3>
               <p className="text-gray-600 leading-relaxed text-lg">
                 {project.description}
                 {project.problem && <span className="block mt-4">{project.problem}</span>}
               </p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
            >
              {project.solution && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 font-display">The Solution</h3>
                  <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                </div>
              )}
            </motion.div>
          </div>

          {project.process && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-black text-white p-8 md:p-12 rounded-3xl"
            >
              <h3 className="text-2xl font-bold mb-8 font-display">Process Highlights</h3>
              <div className="grid gap-6">
                {project.process.map((step, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <span className="text-accent font-mono text-xl">0{i+1}</span>
                    <p className="text-gray-300 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {project.results && (
             <motion.div 
               initial={{ scale: 0.95, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               className="border border-gray-200 p-8 rounded-2xl bg-surface"
             >
                <h4 className="font-bold text-accent text-sm uppercase tracking-wider mb-4">Results</h4>
                <p className="text-2xl font-display font-medium leading-normal">{project.results}</p>
             </motion.div>
          )}
        </div>

      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="pt-24 pb-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-32 max-w-3xl"
        >
           <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tight">
             Selected<br />Work<span className="text-accent">.</span>
           </h1>
           <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
             Case studies focused on clarity, structure, and interaction. 
             Scroll down to explore the journey.
           </p>
        </motion.div>

        <div>
          {content.projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 pt-24 border-t border-gray-100 text-center"
        >
           <h3 className="text-3xl font-bold mb-6 font-display">Want to see more?</h3>
           <p className="text-gray-600 mb-8">
             Explore my full visual explorations and daily UI challenges on Behance.
           </p>
           <a 
             href={`https://${content.contact.socials.behance}`}
             target="_blank"
             rel="noreferrer" 
             className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-accent transition-colors"
           >
             Visit Behance <ExternalLink className="w-4 h-4" />
           </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;