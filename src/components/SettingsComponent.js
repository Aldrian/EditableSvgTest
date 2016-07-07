'use strict';
import React from 'react';
import {SliderPicker} from 'react-color';

require('../../node_modules/skeleton-scss/scss/skeleton.scss');
require('styles//Settings.scss');

class SettingsComponent extends React.Component {
  render() {
    const {actions, settings} = this.props;
    return (
      <div className="settings-component container">
        <div className="row">
          <div className="six columns">
            <div className="textstyle">
              <h4>Text style</h4>
              Color
              <SliderPicker color={settings.textColor} onChangeComplete={(color) => actions.changeTextColor(color.hex)}/>
              <label htmlFor="textrotation">Text Rotation</label>
              <input type="range" name="textrotation" min="-180" max="180" step="10" defaultValue={settings.textRotation} onChange={(event) => actions.changeTextRotation(event.target.value)}/>
              <label htmlFor="fontsize">Font Size</label>
              <input type="range" name="fontsize" min="10" max="250" step="10" defaultValue={settings.fontSize} onChange={(event) => actions.changeFontSize(event.target.value)}/>
            </div>
          </div>
          <div className="six columns">
            <div className="extrusion">
              <h4>Extrusion</h4>
              Color
              <SliderPicker color={settings.extrusionColor} onChangeComplete={(color) => actions.changeExtrusionColor(color.hex)}/>
              <label htmlFor="extrusionx">Extrusion X</label>
              <input type="range" name="extrusionx" min="0" max="10" step="1" defaultValue={settings.extrusionX} onChange={(event) => actions.changeExtrusionX(event.target.value)}/>
              <label htmlFor="extrusionY">Extrusion Y</label>
              <input type="range" name="extrusiony" min="0" max="10" step="1" defaultValue={settings.extrusionX} onChange={(event) => actions.changeExtrusionY(event.target.value)}/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <div className="fractal">
              <h4>Fractal texture</h4>
              <label htmlFor="textureHorizontalFrequency">Horizontal Frequency</label>
              <input type="range" name="textureHorizontalFrequency" min="0.01" max="0.5" step="0.01" defaultValue={settings.textureHorizontalFrequency} onChange={(event) => actions.changeTextureHorizontalFrequency(event.target.value)}/>
              <label htmlFor="textureVerticalFrequency">Vertical Frequency</label>
              <input type="range" name="textureVerticalFrequency" min="0.01" max="0.5" step="0.01" defaultValue={settings.textureVerticalFrequency} onChange={(event) => actions.changeTextureVerticalFrequency(event.target.value)}/>
              <label htmlFor="textureIntensity">Texture Intensity</label>
              <input type="range" name="textureIntensity" min="0.2" max="1.9" step="0.1" defaultValue={settings.textureIntensity} onChange={(event) => actions.changeTextureIntensity(event.target.value)}/>
            </div>
          </div>
          <div className="six columns">
            <div className="stroke">
              <h4>Stroke</h4>
              <label htmlFor="strokeWidth">Stroke Width</label>
              <input type="range" name="strokeWidth" min="1" max="10" step="0.5" defaultValue={settings.strokeWidth} onChange={(event) => actions.changeStrokeWidth(event.target.value)}/>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

SettingsComponent.displayName = 'SettingsComponent';

// Uncomment properties you need
// SettingsComponent.propTypes = {};
// SettingsComponent.defaultProps = {};

export default SettingsComponent;
