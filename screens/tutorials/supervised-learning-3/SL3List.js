'use strict'

import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import { List, ListItem } from 'react-native-elements';

const datas = [
	{
		route: 'KNN',
		text: "1. k-nearest Neighbour", 
	},
	{
		route: 'DecisionTree',
		text: '2. Decision Tree',
	},
];

export default class SL3List extends Component{
	static navigationOptions = ({navigation}) => ({
		title: "Supervised Learning III",
	    headerStyle: {
	      backgroundColor: '#0da5ec', 
	    },
	    headerTitleStyle: {
	      color: 'white'
	    },
	    headerTintColor: 'white'
	});

	renderSeparator = () => {
	    return (
	      <View
	        style={{
	          height: 15,
	          width: "100%",
	          backgroundColor: "#e3e8ea",
	        }}
	      />
	    );
	};

	render() {
		return (
			<View>
		      <FlatList
		        data={datas}
		        renderItem={({item}) =>
		        	<ListItem
				    	title={item.text}
				    	titleStyle={{fontWeight: 'bold', fontSize: 16}}
				    	containerStyle={{height: 65, borderBottomWidth: 0, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}
				    	rightIcon={<Icon name="arrow-forward" style={{color: '#0da5ec'}} />}
				    	onPress = {() => this.props.navigation.navigate(item.route)}
				    />
		        }
		        keyExtractor={item => item.text}
		        ItemSeparatorComponent={this.renderSeparator}
		      />
		    </View>
		);
	}
}


