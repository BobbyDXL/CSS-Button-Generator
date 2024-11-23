import React from 'react';

interface AnimationSelectorProps {
  animation: string;
  onChange: (animation: string) => void;
}

export default function AnimationSelector({ animation, onChange }: AnimationSelectorProps) {
  const animations = [
    { value: 'none', label: 'None' },
    { value: 'ripple', label: 'Ripple Effect' },
    { value: 'tilt', label: '3D Tilt' },
    { value: 'scale', label: 'Scale' },
    { value: 'slide', label: 'Slide' },
  ];

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-200">
        Hover Animation
      </label>
      <select
        value={animation}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-gray-800 text-gray-200 rounded-md px-3 py-2 text-sm"
      >
        {animations.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}