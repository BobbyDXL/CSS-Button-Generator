import React from 'react';
import ColorPicker from './ColorPicker';

interface ShadowBuilderProps {
  shadow: ButtonStyles['shadow'];
  onChange: (shadow: ButtonStyles['shadow']) => void;
}

export default function ShadowBuilder({ shadow, onChange }: ShadowBuilderProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={shadow.enabled}
          onChange={(e) => onChange({ ...shadow, enabled: e.target.checked })}
          className="rounded border-gray-700 bg-gray-800 text-blue-500"
        />
        <label className="text-sm font-medium text-gray-200">Enable Shadow</label>
      </div>

      {shadow.enabled && (
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">X Offset</label>
            <input
              type="text"
              value={shadow.x}
              onChange={(e) => onChange({ ...shadow, x: e.target.value })}
              className="w-full bg-gray-800 text-gray-200 rounded-md px-3 py-2 text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">Y Offset</label>
            <input
              type="text"
              value={shadow.y}
              onChange={(e) => onChange({ ...shadow, y: e.target.value })}
              className="w-full bg-gray-800 text-gray-200 rounded-md px-3 py-2 text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">Blur</label>
            <input
              type="text"
              value={shadow.blur}
              onChange={(e) => onChange({ ...shadow, blur: e.target.value })}
              className="w-full bg-gray-800 text-gray-200 rounded-md px-3 py-2 text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">Spread</label>
            <input
              type="text"
              value={shadow.spread}
              onChange={(e) => onChange({ ...shadow, spread: e.target.value })}
              className="w-full bg-gray-800 text-gray-200 rounded-md px-3 py-2 text-sm"
            />
          </div>
          <div className="col-span-2">
            <ColorPicker
              label="Shadow Color"
              value={shadow.color}
              onChange={(value) => onChange({ ...shadow, color: value })}
            />
          </div>
        </div>
      )}
    </div>
  );
}