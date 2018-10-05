import React from 'react';
import HomePage from './screens/HomePage';
import TabIndex from './screens/tabIndex';
import {createStackNavigator} from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class App extends React.Component{
	render(){
	return <MainApp />; 
	}
}

const MainApp = createStackNavigator({
  Home: HomePage,
  TabIndex: TabIndex
}, {
  initialRoute: "Home",
  transitionConfig: getSlideFromRightTransition
});

export default App;