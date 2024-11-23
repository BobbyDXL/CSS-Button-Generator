import React from 'react';
import { Copy, Loader2 } from 'lucide-react';
import * as Icons from 'lucide-react';
import { ButtonStyles } from '../types/button';

interface ButtonPreviewProps {
  styles: ButtonStyles;
  copyCode: () => void;
}

export default function ButtonPreview({ styles, copyCode }: ButtonPreviewProps) {
  const Icon = styles.icon.enabled ? Icons[styles.icon.name as keyof typeof Icons] : null;

  const getGradientStyle = () => {
    if (!styles.gradient.enabled) return styles.bgColor;
    return `linear-gradient(${styles.gradient.angle}deg, ${styles.gradient.startColor}, ${styles.gradient.endColor})`;
  };

  const getShadowStyle = () => {
    if (!styles.shadow.enabled) return '';
    return `${styles.shadow.x} ${styles.shadow.y} ${styles.shadow.blur} ${styles.shadow.spread} ${styles.shadow.color}`;
  };

  const getTextShadowStyle = () => {
  if (!styles.textShadow || !styles.textShadow.enabled) return '';
  return `${styles.textShadow.x} ${styles.textShadow.y} ${styles.textShadow.blur} ${styles.textShadow.color}`;
};

  const getIconAnimation = () => {
    if (!styles.icon.enabled || styles.icon.animation === 'none') return '';
    
    const animations: Record<string, string> = {
      spin: 'animate-spin',
      bounce: 'animate-bounce',
      shake: 'animate-shake',
    };
    
    return animations[styles.icon.animation] || '';
  };

  const buttonStyle = `
    .custom-button {
      background: ${getGradientStyle()};
      color: ${styles.textColor};
      padding: ${styles.padding};
      border-radius: ${styles.borderRadius};
      font-size: ${styles.fontSize};
      border: ${styles.borderWidth} ${styles.borderStyle} ${styles.borderColor};
      box-shadow: ${getShadowStyle()};
      text-shadow: ${getTextShadowStyle()};
      transition: all 0.3s ease;
      cursor: pointer;
      font-weight: 500;
      position: relative;
      overflow: hidden;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      ${styles.animation === 'tilt' ? 'transform-style: preserve-3d;' : ''}
    }

    .custom-button:hover {
      background: ${styles.gradient.enabled 
        ? `linear-gradient(${styles.gradient.angle}deg, ${styles.gradient.startColor}ee, ${styles.gradient.endColor}ee)`
        : styles.hoverBgColor};
      color: ${styles.hoverTextColor};
      ${styles.animation === 'scale' ? 'transform: scale(1.05);' : ''}
      ${styles.animation === 'tilt' ? 'transform: perspective(1000px) rotateX(10deg) rotateY(10deg);' : ''}
      ${styles.animation === 'slide' ? 'transform: translateX(5px);' : ''}
    }

    .custom-button:active {
      transform: translateY(1px);
    }

    .custom-button:focus {
      outline: none;
      box-shadow: 0 0 0 ${styles.focusRing.width} ${styles.focusRing.color};
      outline-offset: ${styles.focusRing.offset};
    }

    ${styles.animation === 'ripple' ? `
    .custom-button::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${styles.hoverBgColor};
      top: 0;
      left: -100%;
      transition: 0.3s;
      opacity: 0;
    }

    .custom-button:hover::after {
      left: 0;
      opacity: 0.2;
    }` : ''}

    .custom-button .icon {
      ${getIconAnimation()}
    }

    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      75% { transform: translateX(5px); }
    }

    .animate-shake {
      animation: shake 0.5s infinite;
    }

    @media (max-width: 640px) {
      .custom-button {
        width: 100%;
      }
    }
  `;

  return (
    <div className="space-y-6">
      <div className="p-12 bg-gray-900 rounded-lg flex flex-col items-center space-y-8">
        <div className="space-y-4 w-full">
          <button className="custom-button" disabled={styles.loading}>
            {styles.icon.enabled && styles.icon.position === 'left' && Icon && (
              <span className="icon">
                <Icon size={styles.icon.size} />
              </span>
            )}
            {styles.loading ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                <span>Loading...</span>
              </>
            ) : (
              styles.text
            )}
            {styles.icon.enabled && styles.icon.position === 'right' && Icon && (
              <span className="icon">
                <Icon size={styles.icon.size} />
              </span>
            )}
          </button>
          <div className="text-gray-400 text-sm text-center">
            Hover, click, or focus to see different states
          </div>
        </div>
      </div>

      <div className="relative">
        <pre className="bg-gray-800 p-4 rounded-lg text-gray-300 text-sm overflow-x-auto">
          <code>{buttonStyle}</code>
        </pre>
        <button
          onClick={copyCode}
          className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white bg-gray-700 rounded-md"
          title="Copy CSS"
        >
          <Copy size={18} />
        </button>
      </div>

      <style>{buttonStyle}</style>
    </div>
  );
}