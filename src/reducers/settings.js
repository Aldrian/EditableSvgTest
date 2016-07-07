/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = {
  extrusionX: 4,
  extrusionY: 4,
  extrusionColor: '#582D1B',
  textureVerticalFrequency: 0.05,
  textureHorizontalFrequency: .004,
  textureIntensity: 1.1,
  strokeWidth: 4,
  textColor: '#2B3F0E',
  fontSize: 140,
  textRotation: -12
};

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //

  switch(action.type) {

    case 'CHANGE_EXTRUSION_X': {
      return Object.assign({}, state, {
        extrusionX:  action.parameter
      });
    }

    case 'CHANGE_EXTRUSION_Y': {
      return Object.assign({}, state, {
        extrusionX:  action.parameter
      });
    }

    case 'CHANGE_EXTRUSION_COLOR': {
      return Object.assign({}, state, {
        extrusionColor:  action.parameter
      });
    }

    case 'CHANGE_TEXTURE_HORIZONTAL_FREQUENCY': {
      return Object.assign({}, state, {
        textureHorizontalFrequency:  action.parameter
      });
    }

    case 'CHANGE_TEXTURE_VERTICAL_FREQUENCY': {
      return Object.assign({}, state, {
        textureVerticalFrequency:  action.parameter
      });
    }

    case 'CHANGE_TEXTURE_INTENSITY': {
      return Object.assign({}, state, {
        textureIntensity:  action.parameter
      });
    }

    case 'CHANGE_STROKE_WIDTH': {
      return Object.assign({}, state, {
        strokeWidth:  action.parameter
      });
    }

    case 'CHANGE_TEXT_COLOR': {
      return Object.assign({}, state, {
        textColor:  action.parameter
      });
    }

    case 'CHANGE_TEXT_ROTATION': {
      return Object.assign({}, state, {
        textRotation:  action.parameter
      });
    }

    case 'CHANGE_FONT_SIZE': {
      return Object.assign({}, state, {
        fontSize:  action.parameter
      });
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
