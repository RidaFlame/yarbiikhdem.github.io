import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SiteContent } from '../types';
import { initialContent } from '../data/initialContent';

interface ContentContextType {
  content: SiteContent;
  updateContent: (newContent: SiteContent) => void;
  isAdminOpen: boolean;
  toggleAdmin: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(initialContent);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // In a real app, we would fetch from an API. 
  // Here we check localStorage to see if user has saved changes previously.
  useEffect(() => {
    const savedContent = localStorage.getItem('rida-portfolio-content');
    if (savedContent) {
      try {
        setContent(JSON.parse(savedContent));
      } catch (e) {
        console.error("Failed to parse saved content", e);
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle admin panel with Ctrl + Shift + A
      if (e.ctrlKey && e.shiftKey && (e.key === 'a' || e.key === 'A')) {
        setIsAdminOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const updateContent = (newContent: SiteContent) => {
    setContent(newContent);
    localStorage.setItem('rida-portfolio-content', JSON.stringify(newContent));
  };

  const toggleAdmin = () => {
    setIsAdminOpen(prev => !prev);
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, isAdminOpen, toggleAdmin }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};