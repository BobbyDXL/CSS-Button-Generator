export interface ButtonStyles {
  text: string;
  bgColor: string;
  textColor: string;
  padding: string;
  borderRadius: string;
  fontSize: string;
  borderWidth: string;
  borderColor: string;
  borderStyle: 'solid' | 'dashed' | 'dotted';
  hoverBgColor: string;
  hoverTextColor: string;
  animation: 'none' | 'ripple' | 'tilt' | 'scale' | 'slide';
  loading: boolean;
  textShadow: {
    enabled: boolean;
    x: string;
    y: string;
    blur: string;
    color: string;
  };
  gradient: {
    enabled: boolean;
    startColor: string;
    endColor: string;
    angle: number;
  };
  shadow: {
    enabled: boolean;
    x: string;
    y: string;
    blur: string;
    spread: string;
    color: string;
  };
  icon: {
    enabled: boolean;
    position: 'left' | 'right';
    name: string;
    size: number;
    animation: 'none' | 'spin' | 'bounce' | 'shake';
  };
  focusRing: {
    color: string;
    width: string;
    offset: string;
    style: 'solid' | 'dashed' | 'dotted';
  };
}