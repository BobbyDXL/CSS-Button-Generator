import React, { useState } from 'react';
import { Wand2, Github } from 'lucide-react';
import ButtonPreview from './components/ButtonPreview';
import ButtonControls from './components/ButtonControls';
import { ButtonStyles } from './types/button';

function App() {
  const [styles, setStyles] = useState<ButtonStyles>({
    text: 'Click me',
    bgColor: '#3B82F6',
    textColor: '#FFFFFF',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    borderWidth: '2px',
    borderColor: '#3B82F6',
    hoverBgColor: '#2563EB',
    hoverTextColor: '#FFFFFF',
    animation: 'none',
    loading: false,  // Make sure to include loading state
    textShadow: {    // Ensure textShadow is defined
      enabled: false,
      x: '0',
      y: '0',
      blur: '0',
      color: '#000000',
    },
    gradient: {
      enabled: false,
      startColor: '#3B82F6',
      endColor: '#2563EB',
      angle: 45,
    },
    shadow: {
      enabled: false,
      x: '0',
      y: '4px',
      blur: '6px',
      spread: '0',
      color: 'rgba(0, 0, 0, 0.1)',
    },
    icon: {
      enabled: false,
      position: 'left',
      name: 'ArrowRight',
    },
    focusRing: {
      color: '#3B82F640',
      width: '3px',
      offset: '2px',
    },
  });

  const copyCode = () => {
    const cssCode = document.querySelector('pre code')?.textContent;
    if (cssCode) {
      navigator.clipboard.writeText(cssCode);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Wand2 className="w-8 h-8 text-blue-500" />
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              CSS Button Generator
            </h1>
          </div>
          <a
            href="https://github.com/BobbyDXL"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors duration-200"
          >
            <Github size={20} />
            <span className="hidden sm:inline">BobbyDXL</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50">
              <ButtonControls styles={styles} setStyles={setStyles} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-800/50 sticky top-6">
              <ButtonPreview styles={styles} copyCode={copyCode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;