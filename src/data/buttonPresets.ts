import { ButtonStyles } from '../types/button';

type ButtonPreset = {
  name: string;
  styles: Partial<ButtonStyles>;
};

export const buttonPresets: ButtonPreset[] = [
  {
    name: 'Modern Primary',
    styles: {
      bgColor: '#3B82F6',
      textColor: '#FFFFFF',
      hoverBgColor: '#2563EB',
      hoverTextColor: '#FFFFFF',
      borderColor: '#3B82F6',
      gradient: {
        enabled: false,
        startColor: '#3B82F6',
        endColor: '#2563EB',
        angle: 45,
      },
    }
  },
  {
    name: 'Glass Effect',
    styles: {
      bgColor: 'rgba(255, 255, 255, 0.1)',
      textColor: '#FFFFFF',
      hoverBgColor: 'rgba(255, 255, 255, 0.2)',
      hoverTextColor: '#FFFFFF',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderWidth: '1px',
      shadow: {
        enabled: true,
        x: '0',
        y: '4px',
        blur: '24px',
        spread: '0',
        color: 'rgba(0, 0, 0, 0.1)',
      },
    }
  },
  {
    name: 'Neon Glow',
    styles: {
      bgColor: '#000000',
      textColor: '#00FF99',
      hoverBgColor: '#000000',
      hoverTextColor: '#00FF99',
      borderColor: '#00FF99',
      borderWidth: '2px',
      shadow: {
        enabled: true,
        x: '0',
        y: '0',
        blur: '20px',
        spread: '0',
        color: '#00FF99',
      },
    }
  },
  {
    name: '3D Button',
    styles: {
      bgColor: '#4F46E5',
      textColor: '#FFFFFF',
      hoverBgColor: '#4338CA',
      hoverTextColor: '#FFFFFF',
      borderColor: '#4F46E5',
      shadow: {
        enabled: true,
        x: '0',
        y: '6px',
        blur: '0',
        spread: '0',
        color: '#3730A3',
      },
    }
  },
  {
    name: 'Gradient Pop',
    styles: {
      bgColor: '#3B82F6',
      textColor: '#FFFFFF',
      hoverBgColor: '#2563EB',
      hoverTextColor: '#FFFFFF',
      borderColor: 'transparent',
      gradient: {
        enabled: true,
        startColor: '#6366F1',
        endColor: '#A855F7',
        angle: 45,
      },
    }
  },
  {
    name: 'Minimal Outline',
    styles: {
      bgColor: 'transparent',
      textColor: '#3B82F6',
      hoverBgColor: '#3B82F6',
      hoverTextColor: '#FFFFFF',
      borderColor: '#3B82F6',
      borderWidth: '2px',
    }
  },
  {
    name: 'Soft Shadow',
    styles: {
      bgColor: '#FFFFFF',
      textColor: '#1F2937',
      hoverBgColor: '#F3F4F6',
      hoverTextColor: '#111827',
      borderColor: '#E5E7EB',
      shadow: {
        enabled: true,
        x: '0',
        y: '4px',
        blur: '6px',
        spread: '0',
        color: 'rgba(0, 0, 0, 0.1)',
      },
    }
  },
  {
    name: 'Retro Gaming',
    styles: {
      bgColor: '#FF0066',
      textColor: '#FFFFFF',
      hoverBgColor: '#CC0052',
      hoverTextColor: '#FFFFFF',
      borderColor: '#FF0066',
      borderWidth: '4px',
      borderRadius: '0',
      shadow: {
        enabled: true,
        x: '4px',
        y: '4px',
        blur: '0',
        spread: '0',
        color: '#000000',
      },
    }
  },
  {
    name: 'Cyberpunk',
    styles: {
      bgColor: '#000000',
      textColor: '#00FFFF',
      hoverBgColor: '#00FFFF',
      hoverTextColor: '#000000',
      borderColor: '#FF00FF',
      borderWidth: '2px',
      gradient: {
        enabled: true,
        startColor: '#FF00FF',
        endColor: '#00FFFF',
        angle: 45,
      },
    }
  },
  {
    name: 'Minimal Dark',
    styles: {
      bgColor: '#18181B',
      textColor: '#FFFFFF',
      hoverBgColor: '#27272A',
      hoverTextColor: '#FFFFFF',
      borderColor: '#27272A',
      borderWidth: '1px',
    }
  },
  {
    name: 'Rainbow Border',
    styles: {
      bgColor: '#000000',
      textColor: '#FFFFFF',
      hoverBgColor: '#000000',
      hoverTextColor: '#FFFFFF',
      borderColor: 'transparent',
      borderWidth: '3px',
      gradient: {
        enabled: true,
        startColor: '#FF0000',
        endColor: '#00FF00',
        angle: 90,
      },
    }
  },
  {
    name: 'Frosted Glass',
    styles: {
      bgColor: 'rgba(255, 255, 255, 0.1)',
      textColor: '#FFFFFF',
      hoverBgColor: 'rgba(255, 255, 255, 0.2)',
      hoverTextColor: '#FFFFFF',
      borderColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: '1px',
      shadow: {
        enabled: true,
        x: '0',
        y: '8px',
        blur: '32px',
        spread: '-8px',
        color: 'rgba(0, 0, 0, 0.25)',
      },
    }
  },
  {
    name: 'Neumorphic Light',
    styles: {
      bgColor: '#E0E0E0',
      textColor: '#2D3748',
      hoverBgColor: '#EAEAEA',
      hoverTextColor: '#1A202C',
      borderColor: 'transparent',
      borderRadius: '16px',
      shadow: {
        enabled: true,
        x: '8px',
        y: '8px',
        blur: '16px',
        spread: '-4px',
        color: '#A3A3A3',
      },
    }
  },
  {
    name: 'Neumorphic Dark',
    styles: {
      bgColor: '#1A1A1A',
      textColor: '#E0E0E0',
      hoverBgColor: '#242424',
      hoverTextColor: '#FFFFFF',
      borderColor: 'transparent',
      borderRadius: '16px',
      shadow: {
        enabled: true,
        x: '8px',
        y: '8px',
        blur: '16px',
        spread: '-4px',
        color: '#000000',
      },
    }
  },
  {
    name: 'Gradient Border',
    styles: {
      bgColor: 'transparent',
      textColor: '#FFFFFF',
      hoverBgColor: 'transparent',
      hoverTextColor: '#FFFFFF',
      borderColor: 'transparent',
      borderWidth: '2px',
      gradient: {
        enabled: true,
        startColor: '#FF0080',
        endColor: '#7928CA',
        angle: 45,
      },
    }
  },
  {
    name: 'Minimal Success',
    styles: {
      bgColor: '#10B981',
      textColor: '#FFFFFF',
      hoverBgColor: '#059669',
      hoverTextColor: '#FFFFFF',
      borderColor: '#10B981',
      borderWidth: '1px',
    }
  },
  {
    name: 'Minimal Danger',
    styles: {
      bgColor: '#EF4444',
      textColor: '#FFFFFF',
      hoverBgColor: '#DC2626',
      hoverTextColor: '#FFFFFF',
      borderColor: '#EF4444',
      borderWidth: '1px',
    }
  },
  {
    name: 'Minimal Warning',
    styles: {
      bgColor: '#F59E0B',
      textColor: '#FFFFFF',
      hoverBgColor: '#D97706',
      hoverTextColor: '#FFFFFF',
      borderColor: '#F59E0B',
      borderWidth: '1px',
    }
  },
  {
    name: 'Minimal Info',
    styles: {
      bgColor: '#3B82F6',
      textColor: '#FFFFFF',
      hoverBgColor: '#2563EB',
      hoverTextColor: '#FFFFFF',
      borderColor: '#3B82F6',
      borderWidth: '1px',
    }
  },
  {
    name: 'Dotted Border',
    styles: {
      bgColor: 'transparent',
      textColor: '#6366F1',
      hoverBgColor: '#6366F1',
      hoverTextColor: '#FFFFFF',
      borderColor: '#6366F1',
      borderWidth: '2px',
      borderStyle: 'dotted',
    }
  },
];