/**
 * @format
 */

import {AppRegistry, TextInput, Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);


TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.autoCorrect = false;
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;


// console.warn = function () {};
// console.log = function () {};
// console.error = function () {};