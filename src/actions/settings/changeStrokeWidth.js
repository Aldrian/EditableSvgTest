import {CHANGE_STROKE_WIDTH} from './../const';

module.exports = function(parameter) {
  return { meta: {debounce: 'simple'}, type: CHANGE_STROKE_WIDTH, parameter };
};
