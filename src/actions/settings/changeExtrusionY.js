import {CHANGE_EXTRUSION_Y} from './../const';

module.exports = function(parameter) {
  return { meta: {debounce: 'simple'}, type: CHANGE_EXTRUSION_Y, parameter };
};
