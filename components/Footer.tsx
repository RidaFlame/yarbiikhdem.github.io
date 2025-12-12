import React from 'react';
import { useContent } from '../context/ContentContext';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const { content } = useContent();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-2">UiRida.</h3>
            <p className="text-gray-400 max-w-sm">
              Crafting thoughtful digital experiences from Agadir, Morocco.
            </p>
          </div>
          <div className="flex gap-6">
             <a href={content.contact.socials.behance} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                Behance <ExternalLink className="w-4 h-4" />
             </a>
             <a href={content.contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
             </a>
             <a href={content.contact.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
             </a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>© {year} Rida Khanoufi. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <span>Privacy Policy</span>
             <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;