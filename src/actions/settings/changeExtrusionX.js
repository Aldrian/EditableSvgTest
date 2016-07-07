import {CHANGE_EXTRUSION_X} from './../const';

module.exports = function(parameter) {
  return { meta: {debounce: 'simple'}, type: CHANGE_EXTRUSION_X, parameter };
};
