import {CHANGE_TEXTURE_INTENSITY} from './../const';

module.exports = function(parameter) {
  return { meta: {debounce: 'simple'}, type: CHANGE_TEXTURE_INTENSITY, parameter };
};
