import {CHANGE_EXTRUSION_COLOR} from './../const';

module.exports = function(parameter) {
  return { meta: {debounce: 'simple'}, type: CHANGE_EXTRUSION_COLOR, parameter };
};
