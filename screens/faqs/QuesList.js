'use strict'

import React, { Component } from 'react';
import {Text, FlatList, View} from 'react-native';
import { createMaterialBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Header, Left, Right, Icon} from 'native-base';
import { List, ListItem } from 'react-native-elements';

const datas = [
	{
		route: 'Interview',
		text: "Essential ML Interview Questions", 
	},
];

export default class QuesList extends Component{
	static navigationOptions = ({navigation}) => ({
		header: null,
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
			<Header style={{backgroundColor: '#0da5ec'}}>
					<Left>
						<Icon name='menu' onPress={() => this.props.navigation.openDrawer()} style={{color: 'white'}}/>
					</Left>
					<Text style={{alignSelf: 'center', fontSize: 20, color: 'white'}}>FAQ's</Text>
					<Right/>
					<Right/>
				</Header>
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


