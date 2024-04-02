/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Register from './src/screens/Register';
import Profile from './src/screens/Profile';
import {name as appName} from './app.json';
import countryName from './src/screens/countryName';
import demo from './src/screens/demo';
import ImagewithApi from './src/screens/ImagewithApi';
import Profile1 from './src/screens/profile1';
import Home from './src/screens/Home';
AppRegistry.registerComponent(appName, () => Home);
