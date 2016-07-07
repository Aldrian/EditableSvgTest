'use strict';

import React from 'react';

require('styles//Settings.scss');

class SettingsComponent extends React.Component {
  render() {
    const {actions, settings} = this.props;
    return (
      <div className="settings-component">
        <div className="extrusion">
          Extrusion X
          <input type="range" name="extrusionx" min="0" max="10" step="1" defaultValue={settings.extrusionX}  onChange={(event) => actions.changeExtrusionX(event.target.value)}/>
          Extrusion Y
          <input type="range" name="extrusiony" min="0" max="10" step="1" defaultValue={settings.extrusionX} onChange={(event) => actions.changeExtrusionY(event.target.value)}/>
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
