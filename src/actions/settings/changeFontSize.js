import {CHANGE_FONT_SIZE} from './../const';

module.exports = function(parameter) {
  return { meta: {debounce: 'simple'}, type: CHANGE_FONT_SIZE, parameter };
};
