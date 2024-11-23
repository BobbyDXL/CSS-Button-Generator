import React from 'react';
import ColorPicker from './ColorPicker';

interface GradientBuilderProps {
  gradient: ButtonStyles['gradient'];
  onChange: (gradient: ButtonStyles['gradient']) => void;
}

export default function GradientBuilder({ gradient, onChange }: GradientBuilderProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={gradient.enabled}
          onChange={(e) => onChange({ ...gradient, enabled: e.target.checked })}
          className="rounded border-gray-700 bg-gray-800 text-blue-500"
        />
        <label className="text-sm font-medium text-gray-200">Enable Gradient</label>
      </div>

      {gradient.enabled && (
        <div className="space-y-4">
          <ColorPicker
            label="Start Color"
            value={gradient.startColor}
            onChange={(value) => onChange({ ...gradient, startColor: value })}
          />
          <ColorPicker
            label="End Color"
            value={gradient.endColor}
            onChange={(value) => onChange({ ...gradient, endColor: value })}
          />
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Angle ({gradient.angle}°)
            </label>
            <input
              type="range"
              min="0"
              max="360"
              value={gradient.angle}
              onChange={(e) => onChange({ ...gradient, angle: Number(e.target.value) })}
              className="w-full bg-gray-800 rounded-lg appearance-none h-2"
            />
          </div>
        </div>
      )}
    </div>
  );
}