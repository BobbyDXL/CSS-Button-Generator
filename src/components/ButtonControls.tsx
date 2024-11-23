import React from 'react';
import ColorPicker from './ColorPicker';
import GradientBuilder from './GradientBuilder';
import ShadowBuilder from './ShadowBuilder';
import TextShadowBuilder from './TextShadowBuilder';
import IconSelector from './IconSelector';
import AnimationSelector from './AnimationSelector';
import { ButtonStyles } from '../types/button';
import { buttonPresets } from '../data/buttonPresets';

interface ButtonControlsProps {
  styles: ButtonStyles;
  setStyles: (styles: ButtonStyles) => void;
}

export default function ButtonControls({ styles, setStyles }: ButtonControlsProps) {
  const handlePresetClick = (preset: typeof buttonPresets[0]) => {
    setStyles({ ...styles, ...preset.styles });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-200">Presets</h3>
          <div className="text-sm text-gray-400">
            {buttonPresets.length} styles available
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
          {buttonPresets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => handlePresetClick(preset)}
              className="group relative px-4 py-3 bg-gray-800/50 text-gray-200 rounded-lg hover:bg-gray-700/50 text-sm transition-all duration-200 border border-gray-700/50 hover:border-blue-500/50"
            >
              <div className="flex flex-col items-start gap-2">
                <span className="font-medium">{preset.name}</span>
                <div className="w-full h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2">
            Basic Styles
            <span className="px-2 py-0.5 bg-gray-800 rounded-md text-xs text-gray-400">
              Core properties
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200">
                  Button Text
                </label>
                <input
                  type="text"
                  value={styles.text}
                  onChange={(e) => setStyles({ ...styles, text: e.target.value })}
                  className="w-full bg-gray-800/50 text-gray-200 rounded-md px-3 py-2 text-sm border border-gray-700/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-all duration-200"
                />
              </div>

              <ColorPicker
                label="Text Color"
                value={styles.textColor}
                onChange={(value) => setStyles({ ...styles, textColor: value })}
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200">
                  Padding
                </label>
                <input
                  type="text"
                  value={styles.padding}
                  onChange={(e) => setStyles({ ...styles, padding: e.target.value })}
                  className="w-full bg-gray-800/50 text-gray-200 rounded-md px-3 py-2 text-sm border border-gray-700/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-all duration-200"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200">
                  Border Style
                </label>
                <select
                  value={styles.borderStyle}
                  onChange={(e) => setStyles({ ...styles, borderStyle: e.target.value as ButtonStyles['borderStyle'] })}
                  className="w-full bg-gray-800/50 text-gray-200 rounded-md px-3 py-2 text-sm border border-gray-700/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-all duration-200"
                >
                  <option value="solid">Solid</option>
                  <option value="dashed">Dashed</option>
                  <option value="dotted">Dotted</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200">
                  Border Radius
                </label>
                <input
                  type="text"
                  value={styles.borderRadius}
                  onChange={(e) => setStyles({ ...styles, borderRadius: e.target.value })}
                  className="w-full bg-gray-800/50 text-gray-200 rounded-md px-3 py-2 text-sm border border-gray-700/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-all duration-200"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200">
                  Border Width
                </label>
                <input
                  type="text"
                  value={styles.borderWidth}
                  onChange={(e) => setStyles({ ...styles, borderWidth: e.target.value })}
                  className="w-full bg-gray-800/50 text-gray-200 rounded-md px-3 py-2 text-sm border border-gray-700/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-all duration-200"
                />
              </div>

              <ColorPicker
                label="Border Color"
                value={styles.borderColor}
                onChange={(value) => setStyles({ ...styles, borderColor: value })}
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200">
                  Loading State
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={styles.loading}
                    onChange={(e) => setStyles({ ...styles, loading: e.target.checked })}
                    className="rounded border-gray-700 bg-gray-800 text-blue-500"
                  />
                  <span className="text-sm text-gray-200">Show loading state</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2">
            Advanced Styles
            <span className="px-2 py-0.5 bg-gray-800 rounded-md text-xs text-gray-400">
              Visual effects
            </span>
          </h3>
          <div className="space-y-6">
            <GradientBuilder
              gradient={styles.gradient}
              onChange={(gradient) => setStyles({ ...styles, gradient })}
            />

            <ShadowBuilder
              shadow={styles.shadow}
              onChange={(shadow) => setStyles({ ...styles, shadow })}
            />

            <TextShadowBuilder
              textShadow={styles.textShadow}  // Ensure this is defined
              onChange={(textShadow) => setStyles({ ...styles, textShadow })}
            />

            <IconSelector
              icon={styles.icon}
              onChange={(icon) => setStyles({ ...styles, icon })}
            />

            <AnimationSelector
              animation={styles.animation}
              onChange={(animation) => setStyles({ ...styles, animation })}
            />

            <div className="space-y-4">
              <h4 className="text-md font-semibold text-gray-200 flex items-center gap-2">
                Focus Ring
                <span className="px-2 py-0.5 bg-gray-800 rounded-md text-xs text-gray-400">
                  Accessibility
                </span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorPicker
                  label="Ring Color"
                  value={styles.focusRing.color}
                  onChange={(value) =>
                    setStyles({
                      ...styles,
                      focusRing: { ...styles.focusRing, color: value }
                    })
                  }
                />
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-200">
                    Ring Width
                  </label>
                  <input
                    type="text"
                    value={styles.focusRing.width}
                    onChange={(e) =>
                      setStyles({
                        ...styles,
                        focusRing: { ...styles.focusRing, width: e.target.value }
                      })
                    }
                    className="w-full bg-gray-800/50 text-gray-200 rounded-md px-3 py-2 text-sm border border-gray-700/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-all duration-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}