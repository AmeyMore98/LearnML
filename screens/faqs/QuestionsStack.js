import React ,{ Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import QuesList from './QuesList';
import Interview from './Interview';

const QuestionsStack = createStackNavigator ({
	QuesList: QuesList,
	Interview: Interview,
},{
	initialRoute: 'QuesList',
	transitionConfig: getSlideFromRightTransition
});

export default QuestionsStack;