import {CHANGE_TEXTURE_HORIZONTAL_FREQUENCY} from './../const';

module.exports = function(parameter) {
  return { meta: {debounce: 'simple'}, type: CHANGE_TEXTURE_HORIZONTAL_FREQUENCY, parameter };
};
