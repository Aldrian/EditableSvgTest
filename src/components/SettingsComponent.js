'use strict';

import React from 'react';
import {SliderPicker} from 'react-color';

require('styles//Settings.scss');

class SettingsComponent extends React.Component {
  render() {
    const {actions, settings} = this.props;
    return (
      <div className="settings-component">
        <div className="textstyle">
          <h3>Text style</h3>
          Color
          <SliderPicker color={settings.textColor} onChangeComplete={(color) => actions.changeTextColor(color.hex)}/>
          Text Rotation
          <input type="range" name="textrotation" min="-180" max="180" step="10" defaultValue={settings.textRotation} onChange={(event) => actions.changeTextRotation(event.target.value)}/>
          Font Size
          <input type="range" name="fontsize" min="10" max="250" step="10" defaultValue={settings.fontSize} onChange={(event) => actions.changeFontSize(event.target.value)}/>
        </div>
        <div className="extrusion">
          <h3>Extrusion</h3>
          Color
          <SliderPicker color={settings.extrusionColor} onChangeComplete={(color) => actions.changeExtrusionColor(color.hex)}/>
          Extrusion X
          <input type="range" name="extrusionx" min="0" max="10" step="1" defaultValue={settings.extrusionX} onChange={(event) => actions.changeExtrusionX(event.target.value)}/>
          Extrusion Y
          <input type="range" name="extrusiony" min="0" max="10" step="1" defaultValue={settings.extrusionX} onChange={(event) => actions.changeExtrusionY(event.target.value)}/>
        </div>
        <div className="fractal">
          <h3>Fractal texture</h3>
          Horizontal Frequency
          <input type="range" name="textureHorizontalFrequency" min="0.01" max="0.5" step="0.01" defaultValue={settings.textureHorizontalFrequency} onChange={(event) => actions.changeTextureHorizontalFrequency(event.target.value)}/>
          Vertical Frequency
          <input type="range" name="textureVerticalFrequency" min="0.01" max="0.5" step="0.01" defaultValue={settings.textureVerticalFrequency} onChange={(event) => actions.changeTextureVerticalFrequency(event.target.value)}/>
          Texture intensity
          <input type="range" name="textureIntensity" min="0.2" max="1.9" step="0.1" defaultValue={settings.textureIntensity} onChange={(event) => actions.changeTextureIntensity(event.target.value)}/>
        </div>
        <div className="stroke">
          <h3>Stroke</h3>
          Stroke width
          <input type="range" name="strokeWidth" min="1" max="10" step="0.5" defaultValue={settings.strokeWidth} onChange={(event) => actions.changeStrokeWidth(event.target.value)}/>
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
