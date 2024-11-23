import React from 'react';
import ColorPicker from './ColorPicker';

interface TextShadowBuilderProps {
  textShadow: ButtonStyles['textShadow'];
  onChange: (textShadow: ButtonStyles['textShadow']) => void;
}

export default function TextShadowBuilder({ textShadow = { enabled: false, x: '0', y: '0', blur: '0', color: '#000000' }, onChange }: TextShadowBuilderProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={textShadow.enabled}
          onChange={(e) => onChange({ ...textShadow, enabled: e.target.checked })}
          className="rounded border-gray-700 bg-gray-800 text-blue-500"
        />
        <label className="text-sm font-medium text-gray-200">Text Shadow</label>
      </div>

      {textShadow.enabled && (
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">X Offset</label>
            <input
              type="text"
              value={textShadow.x}
              onChange={(e) => onChange({ ...textShadow, x: e.target.value })}
              className="w-full bg-gray-800 text-gray-200 rounded-md px-3 py-2 text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">Y Offset</label>
            <input
              type="text"
              value={textShadow.y}
              onChange={(e) => onChange({ ...textShadow, y: e.target.value })}
              className="w-full bg-gray-800 text-gray-200 rounded-md px-3 py-2 text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">Blur</label>
            <input
              type="text"
              value={textShadow.blur}
              onChange={(e) => onChange({ ...textShadow, blur: e.target.value })}
              className="w-full bg-gray-800 text-gray-200 rounded-md px-3 py-2 text-sm"
            />
          </div>
          <div className="col-span-2">
            <ColorPicker
              label="Shadow Color"
              value={textShadow.color}
              onChange={(value) => onChange({ ...textShadow, color: value })}
            />
          </div>
        </div>
      )}
    </div>
  );
}