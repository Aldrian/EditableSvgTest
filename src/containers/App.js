/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SettingsComponent from '../components/SettingsComponent';
import FilterComponent from '../components/FilterComponent';
/* Populated by react-webpack-redux:reducer */

require('styles//Base.scss');

class App extends Component {
  render() {
    const {actions, settings} = this.props;
    return (
      <div className="app">
        <FilterComponent settings={settings}/>
        <SettingsComponent settings={settings} actions={actions}/>
      </div>
    );
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = { settings: state.settings };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    changeExtrusionColor: require('../actions/settings/changeExtrusionColor.js'),
    changeExtrusionX: require('../actions/settings/changeExtrusionX.js'),
    changeExtrusionY: require('../actions/settings/changeExtrusionY.js'),
    changeTextureIntensity: require('../actions/settings/changeTextureIntensity.js'),
    changeTextureVerticalFrequency: require('../actions/settings/changeTextureVerticalFrequency.js'),
    changeTextureHorizontalFrequency: require('../actions/settings/changeTextureHorizontalFrequency.js'),
    changeStrokeWidth: require('../actions/settings/changeStrokeWidth.js'),
    changeTextColor: require('../actions/settings/changeTextColor.js'),
    changeFontSize: require('../actions/settings/changeFontSize.js'),
    changeTextRotation: require('../actions/settings/changeTextRotation.js')
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
