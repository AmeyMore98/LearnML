import React, { Component } from 'react';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import {  SafeAreaView, View, Image, Text, ScrollView } from 'react-native';

import TutorialStackIndex from './tutorials/TutorialStackIndex';
import UseCaseStack from './usecases/UseCaseStack';
import QuestionsStack from './faqs/QuestionsStack';
import Disclaimer from './disclaimer/Disclaimer';
import About from './developers/AboutUs'

class tabIndex extends Component {
	static navigationOptions = {
		header: null
	};

	render(){
		return (
			<Drawer/>
		);
	}
}

const CustomeDrawerComponents = (props) => (
  <SafeAreaView style={{flex: 1}}>
    <View style={{height: 150, backgroundColor: '#f3f2f1', alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('../assets/logo1.png')} style={{height: 120, width:120, borderRadius: 160}}/>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const Drawer = createDrawerNavigator({
	TutorialStackIndex: { screen: TutorialStackIndex,
		navigationOptions:{
			title: 'Tutorials',
		}
	},
	QuestionsStack: { screen: QuestionsStack,
		navigationOptions:{
			title: "FAQ's",
		}
	},
	UseCaseStack: { screen: UseCaseStack,
		navigationOptions:{
			title: 'Use Cases',
		}
	},
	Disclaimer: { screen: Disclaimer,
		navigationOptions:{
			title: 'Disclaimer',
		}
	},
	About: { screen: About,
		navigationOptions: {
			title: 'Contributors',
		}
	},
}, {
	initialRouteName: 'TutorialStackIndex',
	contentComponent: CustomeDrawerComponents
});

export default tabIndex;