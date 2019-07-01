/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { createDrawerNavigator,createStackNavigator } from 'react-navigation';

import HomePage from './src/components/HomePage.js';
import DrawerMain from './src/drawers/DrawerMain';
import screenMapping from './src/screenMapping';
import ContactForm from './src/components/contact/contactForm.js';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const HomeStack = createStackNavigator(
  {
      HomePage: HomePage,
      Contact: ContactForm,
  },{
      initialRoute: 'HomePage',
      transitionConfig: getSlideFromRightTransition
  }
);

const RootDrawer = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    ...screenMapping,
  },
  {
    contentComponent: DrawerMain,
  }
);

export default class App extends Component<Props> {
  render() {
    return <RootDrawer />;
  }
}
