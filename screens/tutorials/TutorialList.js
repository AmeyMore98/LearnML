'use strict'

import React, { Component } from 'react';
import { Text, FlatList, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Header, Left, Right, Icon } from 'native-base';
import { List, ListItem } from 'react-native-elements';


const datas = [
	{
		route: 'Introduction',
		text: "1. Introduction", 
	},
	{
		route: 'SL1List',
		text: '2. Supervised Learning I',
	},
	{
		route: 'SL2List',
		text: '3. Supervised Learning II',
	},
	{
		route: 'SL3List',
		text: '4. Supervised Learning III'
	},
	{
		route: 'USList',
		text: '5. Unsupervised Learning' 
	},
	{
		route: 'RList',
		text: '6. Reinforcement Learning'
	},
];

export default class TutorialList extends Component<Props> {
	static navigationOptions = {
		header: null,
	}

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
					<Text style={{alignSelf: 'center', fontSize: 20, color: 'white'}}>Tutorials</Text>
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
				    	onPress = {() => this.props.navigation.navigate(item.route, {routes: this.props.navigation})}
				    />
		        }
		        keyExtractor={item => item.text}
		        ItemSeparatorComponent={this.renderSeparator}
		      />
		    </View>
		);
	}
}


