'use strict';

import React from 'react';

require('styles//Filter.scss');

class FilterComponent extends React.Component {
  render() {
    const {settings} = this.props;
    return (
      <div className="filter-component">
        <svg version="1.1" id="Ebene_1" width="100%" height="100%">

          <defs>
            <filter id="filter">
              <feFlood floodColor="#582D1B" result="COLOR-red"/>
              <feTurbulence baseFrequency=".05,.004" type="fractalNoise" numOctaves="4" seed="0" result="FRACTAL-TEXTURE_10"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0,
          0 0 0 0 0,
          0 0 0 0 0,
          0 0 0 -1.2 1.1" in="FRACTAL-TEXTURE_10" result="FRACTAL-TEXTURE_20"/>
              <feMorphology operator="dilate" radius="4" in="SourceAlpha" result="STROKE_10"/>
              <feOffset in="STROKE_10" result="BEVEL_10"/>
              <feConvolveMatrix order="9,9" divisor="1" kernelMatrix="1 0 0 0 0 0 0 0 0
          0 1 0 0 0 0 0 0 0
          0 0 1 0 0 0 0 0 0
          0 0 0 1 0 0 0 0 0
          0 0 0 0 1 0 0 0 0
          0 0 0 0 0 1 0 0 0
          0 0 0 0 0 0 1 0 0
          0 0 0 0 0 0 0 1 0
          0 0 0 0 0 0 0 0 1" in="BEVEL_10" result="BEVEL_20"/>

        <feOffset dx={settings.extrusionX} dy={settings.extrusionY} in="BEVEL_20" result="BEVEL_25"/>
              <feComposite operator="out" in="BEVEL_25" in2="STROKE_10" result="BEVEL_30"/>
              <feComposite in="COLOR-red" in2="BEVEL_30" operator="in" result="BEVEL_40"/>
              <feMerge result="BEVEL_50">
                <feMergeNode in="BEVEL_40"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
              <feComposite operator="in" in="BEVEL_50" in2="FRACTAL-TEXTURE_20" result="RESULT"/>
            </filter>
          </defs>

        </svg>

        <section className="filtered">
          <h2>Petrol</h2>
        </section>
      </div>
    );
  }
}
FilterComponent.displayName = 'FilterComponent';

// Uncomment properties you need
// FilterComponent.propTypes = {};
// FilterComponent.defaultProps = {};

export default FilterComponent;
