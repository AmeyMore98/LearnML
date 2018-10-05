import React ,{ Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import UseCaseList from './UseCaseList';
import Healthcare from './HealthMed';
import Governance from './Gov';

const UseCaseStack = createStackNavigator ({
	UseCaseList: UseCaseList,
	Healthcare: Healthcare,
	Governance: Governance,
},{
	initialRoute: 'UseCaseList',
	transitionConfig: getSlideFromRightTransition
});

export default UseCaseStack;