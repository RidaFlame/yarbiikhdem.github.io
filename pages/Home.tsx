import React from 'react';
import { useContent } from '../context/ContentContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, MapPin, MousePointer2, Layers, Code, Palette, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const Home: React.FC = () => {
  const { content } = useContent();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroImageY = useTransform(scrollY, [0, 500], [0, 50]);
  
  // CV Download Function
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/rida_cv.pdf'; 
    link.download = 'CV_KHANOUFI_RIDA.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0: return <Palette className="w-6 h-6" />;
      case 1: return <Layers className="w-6 h-6" />;
      case 2: return <Code className="w-6 h-6" />;
      case 3: return <MousePointer2 className="w-6 h-6" />;
      default: return <div className="font-display font-bold text-lg">0{index + 1}</div>;
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden pt-28 md:pt-0">
        {/* Abstract Background Shapes - Improved Animation */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            rotate: [0, 20, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-50/80 rounded-full blur-3xl -z-10" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 50, 0]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-0 left-0 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-orange-50/60 rounded-full blur-3xl -z-10" 
        />

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content - Order 1 on mobile now */}
          <motion.div style={{ y: heroY }} className="space-y-6 md:space-y-8 order-1 md:order-1 z-10 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-xs md:text-sm font-bold tracking-widest text-accent mb-4 uppercase flex items-center justify-center md:justify-start gap-2">
                <span className="w-8 h-[2px] bg-accent"></span>
                Portfolio
              </h2>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] mb-4 md:mb-6 uppercase tracking-tight"
              >
                {content.home.hero.name.split(' ')[0]}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
                  {content.home.hero.name.split(' ')[1]}
                </span>
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-3xl font-display font-medium text-gray-800 mb-4"
              >
                {content.home.hero.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-base md:text-lg text-gray-600 max-w-lg leading-relaxed mx-auto md:mx-0"
              >
                {content.home.hero.subtitle}
              </motion.p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col md:flex-row flex-wrap gap-4 justify-center md:justify-start"
            >
              <Link to="/projects" className="bg-black text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl shadow-black/10">
                {content.home.hero.ctaPrimary} <ArrowRight className="w-4 h-4" />
              </Link>
              <button onClick={handleDownloadCV} className="bg-white text-black border border-gray-200 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 group">
                 <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" /> Download CV
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Visual - Improved Visibility & Animation */}
          <motion.div
             style={{ y: heroImageY }}
             className="relative order-2 md:order-2 flex justify-center items-center mt-8 md:mt-0 perspective-1000"
          >
             {/* Floating Container */}
             <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full max-w-xs md:max-w-md"
             >
                {/* Image Frame */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl z-10 bg-white border-[8px] md:border-[12px] border-white ring-1 ring-gray-100"
                >
                  <motion.img 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={content.home.hero.image} 
                    alt="Rida Khanoufi" 
                    className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Glossy Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>

                {/* Decorative Background Elements */}
                <motion.div 
                  animate={{ rotate: [3, -3, 3] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 -right-4 bottom-4 -left-4 border-2 border-gray-200/60 rounded-[2.5rem] -z-10"
                />
                <motion.div 
                  animate={{ rotate: [-3, 3, -3] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 -right-8 bottom-8 -left-8 border-2 border-gray-100/60 rounded-[2.5rem] -z-20" 
                />
                
                {/* Floating "Frontend" Code Card (New) */}
                <motion.div 
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0, y: [10, -10, 10] }}
                   transition={{ 
                     opacity: { delay: 0.6 },
                     y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0 }
                   }}
                   className="absolute -top-4 -left-4 md:-left-8 bg-white p-3 rounded-xl shadow-xl z-20 border border-gray-50 max-w-[150px] hidden sm:block"
                >
                   <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-gray-800">Frontend</span>
                   </div>
                   <div className="space-y-1.5">
                     <div className="h-1.5 w-16 bg-gray-100 rounded-full" />
                     <div className="h-1.5 w-10 bg-gray-100 rounded-full" />
                   </div>
                </motion.div>

                {/* Floating "UI Design" Card (New) */}
                <motion.div 
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0, y: [-10, 10, -10] }}
                   transition={{ 
                     opacity: { delay: 0.7 },
                     y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }
                   }}
                   className="absolute top-24 -right-6 md:-right-10 bg-white p-3 rounded-xl shadow-xl z-20 border border-gray-50 hidden sm:block"
                >
                   <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-500 flex items-center justify-center">
                        <Palette className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-800">UI Design</div>
                        <div className="text-[10px] text-gray-400">Pixel Perfect</div>
                      </div>
                   </div>
                </motion.div>
                
                {/* Floating Location Badge (Existing but repositioned slightly) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-6 -left-4 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-gray-50 max-w-[200px]"
                >
                   <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-accent shrink-0">
                     <MapPin className="w-5 h-5" />
                   </div>
                   <div>
                     <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Based in</p>
                     <p className="text-sm font-bold text-gray-900 leading-tight">Agadir, Morocco</p>
                   </div>
                </motion.div>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Strip */}
      <div className="bg-accent text-white py-4 overflow-hidden whitespace-nowrap -rotate-1 origin-left scale-105 shadow-lg relative z-20 mt-20 md:mt-0">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="inline-block"
        >
          {content.home.highlightStrip.map((item, index) => (
            <span key={index} className="mx-8 text-lg md:text-xl font-display font-bold uppercase tracking-widest">
              {item} <span className="text-black/20 ml-8 text-2xl">•</span>
            </span>
          ))}
        </motion.div>
         <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="inline-block"
        >
          {content.home.highlightStrip.map((item, index) => (
            <span key={`dup-${index}`} className="mx-8 text-lg md:text-xl font-display font-bold uppercase tracking-widest">
              {item} <span className="text-black/20 ml-8 text-2xl">•</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Intro */}
      <AnimatedSection className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-accent font-bold tracking-widest uppercase mb-4 text-xs md:text-sm">Introduction</h2>
        <h3 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">
          {content.home.intro.title}
        </h3>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
          {content.home.intro.description}
        </p>
      </AnimatedSection>

      {/* Hard Skills (Restored & Enhanced) */}
      <section className="py-20 px-6 bg-surface relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
           <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
           <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              Hard Skills
            </motion.h2>
            <p className="text-gray-500 text-lg">My technical and creative expertise</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.home.services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="h-full bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-accent hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 group flex flex-col"
                >
                  <div className="h-14 w-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-black group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    {getServiceIcon(index)}
                  </div>
                  <h4 className="text-xl font-bold mb-3 font-display group-hover:text-accent transition-colors">{service.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{service.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Projects Preview */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">Selected Projects</h2>
              <p className="text-xl text-gray-400 max-w-lg">A selection of my recent work in UI design, product thinking and frontend development.</p>
            </div>
            <Link to="/projects" className="hidden md:flex bg-white text-black px-8 py-4 rounded-full items-center gap-2 font-medium hover:bg-accent hover:text-white transition-colors">
              View all work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.projects.slice(0, 3).map((project, i) => (
              <Link to="/projects" key={project.id}>
                <AnimatedSection delay={i * 0.2} className="group cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden rounded-3xl mb-6 relative bg-gray-900 border border-gray-800">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                      <div className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        View Project <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400">{project.category}</p>
                    </div>
                  </div>
                </AnimatedSection>
              </Link>
            ))}
          </div>
          
           <div className="mt-12 text-center md:hidden">
             <Link to="/projects" className="inline-flex items-center gap-2 font-medium hover:text-accent transition-colors bg-white text-black px-8 py-4 rounded-full">
              View all work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;