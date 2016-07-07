/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = {
  extrusionX: 4,
  extrusionY: 4
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

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
