import {CHANGE_TEXT_COLOR} from './../const';

module.exports = function(parameter) {
  return { meta: {debounce: 'simple'}, type: CHANGE_TEXT_COLOR, parameter };
};
