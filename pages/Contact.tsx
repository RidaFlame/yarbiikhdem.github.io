import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import AnimatedSection from '../components/AnimatedSection';
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const { content } = useContent();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if formspreeId is configured
    if (!content.contact.formspreeId) {
      alert("Please configure your Formspree Form ID in the Admin Panel (Ctrl+Shift+A) to receive messages.");
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(`https://formspree.io/f/${content.contact.formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="pt-12 pb-24 px-6 min-h-screen flex flex-col justify-center bg-gray-50">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16">
        
        <div className="space-y-12">
           <AnimatedSection>
             <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
               {content.contact.header}
             </h1>
             <p className="text-xl text-gray-500">
               {content.contact.subheader}
             </p>
           </AnimatedSection>

           <AnimatedSection delay={0.2} className="space-y-8">
              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                 <div className="bg-black text-white p-3 rounded-full">
                    <Mail className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a href={`mailto:${content.contact.email}`} className="text-gray-600 hover:text-accent transition-colors text-lg break-all">
                      {content.contact.email}
                    </a>
                 </div>
              </div>

               <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                 <div className="bg-black text-white p-3 rounded-full">
                    <Phone className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <a href={`tel:${content.contact.phone}`} className="text-gray-600 hover:text-accent transition-colors text-lg">
                      {content.contact.phone}
                    </a>
                 </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                 <div className="bg-black text-white p-3 rounded-full">
                    <MapPin className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p className="text-gray-600 text-lg">
                      {content.contact.location}
                    </p>
                 </div>
              </div>
           </AnimatedSection>

           <AnimatedSection delay={0.3}>
             <h3 className="font-bold mb-4">Find me on</h3>
             <div className="flex flex-wrap gap-4">
               {Object.entries(content.contact.socials).map(([platform, url]) => (
                 <a 
                   key={platform}
                   href={`https://${(url as string).replace(/^https?:\/\//, '')}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="px-6 py-3 bg-white border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all capitalize shadow-sm hover:shadow-lg font-medium"
                 >
                   {platform}
                 </a>
               ))}
             </div>
           </AnimatedSection>
        </div>

        <AnimatedSection delay={0.4} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden">
           {/* Success State Overlay */}
           <AnimatePresence>
             {status === 'success' && (
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center p-8"
               >
                 <motion.div 
                   initial={{ scale: 0.5, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   transition={{ type: "spring", stiffness: 200, damping: 20 }}
                   className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6"
                 >
                   <CheckCircle className="w-10 h-10" />
                 </motion.div>
                 <h3 className="text-3xl font-display font-bold mb-2">Message Sent!</h3>
                 <p className="text-gray-500 mb-8 max-w-sm">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                 <button 
                   onClick={() => setStatus('idle')}
                   className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-colors"
                 >
                   Send another
                 </button>
               </motion.div>
             )}
           </AnimatePresence>

           <h2 className="text-3xl font-display font-bold mb-2">Send a message</h2>
           <p className="text-gray-600 mb-8 text-sm">Share project details, timeline, needs. I’ll reply with UI/UX/front-end ideas.</p>
           
           <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
             <div>
               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
               <input 
                 type="text" 
                 id="name"
                 name="name" // Important for Formspree
                 required
                 value={formState.name}
                 onChange={(e) => setFormState({...formState, name: e.target.value})}
                 className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all bg-gray-50"
                 placeholder="Your name"
               />
             </div>
             <div>
               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
               <input 
                 type="email" 
                 id="email"
                 name="email" // Important for Formspree
                 required
                 value={formState.email}
                 onChange={(e) => setFormState({...formState, email: e.target.value})}
                 className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all bg-gray-50"
                 placeholder="name@example.com"
               />
             </div>
             <div>
               <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
               <textarea 
                 id="message"
                 name="message" // Important for Formspree
                 required
                 rows={4}
                 value={formState.message}
                 onChange={(e) => setFormState({...formState, message: e.target.value})}
                 className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none bg-gray-50"
                 placeholder="Tell me about your project..."
               />
             </div>

             <button 
               type="submit" 
               disabled={status === 'submitting'}
               className="w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors disabled:opacity-70 shadow-lg shadow-black/20"
             >
               {status === 'submitting' ? 'Sending...' : (
                 <>Send Message <Send className="w-4 h-4" /></>
               )}
             </button>
             
             {status === 'error' && (
               <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm mt-4">
                 <AlertCircle className="w-4 h-4" />
                 Something went wrong. Please try again or email me directly.
               </div>
             )}

             <p className="text-xs text-center text-gray-400 mt-4">
               Available for remote collaborations, internships, freelance UI/UX. Response within 24h.
             </p>
           </form>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default Contact;