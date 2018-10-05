'use strict'

import React, { Component } from 'react';
import { Icon } from 'native-base';
import { FlatList, View} from 'react-native';
import { List, ListItem } from 'react-native-elements';

const datas = [
	{
		route: 'RL',
		text: "1. What is Reinforcement Learning?", 
	},
	{
		route: 'MDP',
		text: '2. Markov Decision Processes',
	},
	{
		route: 'Ql',
		text: '3. Q-learning',
	},
	{
		route: 'Pl',
		text: '4. Policy learning '
	},
	{
		route: 'Drl',
		text: '5. Deep Reinforcement Learning '
	},
	{
		route: 'Vlp',
		text: '5. Value learning Problem'
	},
];

export default class RList extends Component{
	static navigationOptions = ({navigation}) => ({
		title: "Reinforcement Learning",
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


