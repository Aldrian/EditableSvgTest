import {CHANGE_TEXTURE_VERTICAL_FREQUENCY} from './../const';

module.exports = function(parameter) {
  return { meta: {debounce: 'simple'}, type: CHANGE_TEXTURE_VERTICAL_FREQUENCY, parameter };
};
