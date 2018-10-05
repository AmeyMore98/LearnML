'use strict'

import React, { Component } from 'react';
import { FlatList, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Header, Left, Right, Icon, Body} from 'native-base';
import { List, ListItem } from 'react-native-elements';

const datas = [
	{
		route: 'USL',
		text: "1. What is Unsupervised Learning?", 
	},
	{
		route: 'Cluster',
		text: '2. Clustering',
	},
	{
		route: 'ClusterM',
		text: '3. Clustering Methods',
	},
	{
		route: 'KCluster',
		text: '4. K-Means Clustering'
	},
];

export default class USList extends Component{
	static navigationOptions = ({navigation}) => ({
		title: "Unsupervised Learning",
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


