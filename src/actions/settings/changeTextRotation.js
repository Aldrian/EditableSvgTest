import {CHANGE_TEXT_ROTATION} from './../const';

module.exports = function(parameter) {
  return { meta: {debounce: 'simple'}, type: CHANGE_TEXT_ROTATION, parameter };
};
