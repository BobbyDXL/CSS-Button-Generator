import React from 'react';
import * as Icons from 'lucide-react';

interface IconSelectorProps {
  icon: ButtonStyles['icon'];
  onChange: (icon: ButtonStyles['icon']) => void;
}

export default function IconSelector({ icon, onChange }: IconSelectorProps) {
  const iconList = Object.keys(Icons).filter(name => 
    name !== 'createLucideIcon' && name !== 'default'
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={icon.enabled}
          onChange={(e) => onChange({ ...icon, enabled: e.target.checked })}
          className="rounded border-gray-700 bg-gray-800 text-blue-500"
        />
        <label className="text-sm font-medium text-gray-200">Add Icon</label>
      </div>

      {icon.enabled && (
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">Position</label>
            <select
              value={icon.position}
              onChange={(e) => onChange({ ...icon, position: e.target.value as 'left' | 'right' })}
              className="w-full bg-gray-800 text-gray-200 rounded-md px-3 py-2 text-sm"
            >
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">Icon</label>
            <select
              value={icon.name}
              onChange={(e) => onChange({ ...icon, name: e.target.value })}
              className="w-full bg-gray-800 text-gray-200 rounded-md px-3 py-2 text-sm"
            >
              {iconList.map(name => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}