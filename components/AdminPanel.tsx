import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { X, Save, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { initialContent } from '../data/initialContent';

const AdminPanel: React.FC = () => {
  const { content, updateContent, isAdminOpen, toggleAdmin } = useContent();
  const [jsonText, setJsonText] = useState(JSON.stringify(content, null, 2));
  const [error, setError] = useState<string | null>(null);

  const handleSave = () => {
    try {
      const parsed = JSON.parse(jsonText);
      updateContent(parsed);
      setError(null);
      alert("Content updated successfully!");
    } catch (e) {
      setError("Invalid JSON format. Please check your syntax.");
    }
  };

  const handleReset = () => {
    if (confirm("Reset all content to default? This cannot be undone.")) {
        updateContent(initialContent);
        setJsonText(JSON.stringify(initialContent, null, 2));
    }
  };

  return (
    <AnimatePresence>
      {isAdminOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={toggleAdmin}
            className="fixed inset-0 bg-black z-40"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-0 h-full w-full md:w-[600px] bg-white z-50 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-xl font-display font-bold">Admin Panel</h2>
              <button onClick={toggleAdmin} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 p-4 overflow-hidden flex flex-col">
              <p className="text-sm text-gray-500 mb-4">
                Edit the JSON below to update the website content in real-time.
              </p>
              
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm">
                  {error}
                </div>
              )}

              <textarea
                value={jsonText}
                onChange={(e) => setJsonText(e.target.value)}
                className="flex-1 font-mono text-sm p-4 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent outline-none resize-none bg-gray-50"
                spellCheck={false}
              />
            </div>

            <div className="p-4 border-t border-gray-200 flex gap-4 bg-gray-50">
              <button
                onClick={handleSave}
                className="flex-1 bg-black text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
              >
                <Save className="w-4 h-4" /> Save Changes
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-3 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 flex items-center gap-2"
                title="Reset to default"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AdminPanel;