import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	Linking
} from 'react-native';
import { DrawerItems } from 'react-navigation';
import { Icon } from 'native-base';

import { evaluateOuterDrawerListItems } from '../utils';
import OuterDrawerItem from '../components/OuterDrawerItem';
import DrawerHeader from '../components/DrawerHeader';

const styles = StyleSheet.create({
	customDrawerTouch: {
		paddingLeft: 13,
		paddingTop: 15,
	},
	customDrawerIcon: { paddingRight: 10 },
	backButtonRow: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: 17,
		paddingLeft: 3,
		borderBottomColor: '#F0F0F0',
		borderBottomWidth: 1,
	},
});

class MainDrawer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mainDrawer: true,
			currentComponent: '',
		};
	}

	toggleMainDrawer = () =>
		this.setState(prevState => ({ mainDrawer: !prevState.mainDrawer }));

	renderMainDrawerComponents = mainDrawerItems =>
		Object.keys(mainDrawerItems).map(item => (
			<OuterDrawerItem
				key={item}
				label={item}
				onPress={() => {
					this.setState({
						currentComponent: item,
						mainDrawer: false,
					});
				}}
			/>
		));

	navigateToCallback = routeName => {
		this.setState({ mainDrawer: true });
		this.props.navigation.navigate(routeName);
	};

	render() {
		const { items, ...restProps } = this.props;
		const { mainDrawer, currentComponent } = this.state;

		// get items objects with unique items and indexes
		const scopedItemsObject = evaluateOuterDrawerListItems(items);

		if (mainDrawer) {
			return (
				<ScrollView>
					<DrawerHeader navigateToCallback={this.navigateToCallback} />
					{this.renderMainDrawerComponents(scopedItemsObject)}
					<View style={{paddingHorizontal: 5, paddingBottom: 5}}>
					<View style={{borderWidth: 1, borderColor: 'black'}}>
					<Text style={{alignSelf: 'center', fontWeight: 'bold', paddingTop: 5}}>Address</Text>
					<Text>	Member of Parliament - Rajya Sabha</Text>
					<Text>	Vice President - Bharatiya Janata Party</Text>
					<Text></Text>
					<Text>	6A, Deen Dayal Upadhaya Marg,</Text>
					<Text>	New Delhi, 110001</Text>
					<Text></Text>
					<Text>	Phone: 011-23005700</Text>
					<Text style={{paddingBottom: 5}}>	Email: office@vinaysahasrabuddhe.in</Text>
					</View>
					</View>
					<View style={{}}>
					<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 5}}>					
					<Icon style={{fontSize: 40, }} name='logo-facebook' onPress={() => Linking.openURL('https://www.facebook.com/vinays57/')}/>
					<Icon style={{fontSize: 40, }} name='logo-instagram' onPress={() => Linking.openURL('https://www.instagram.com/vinaysahasrabuddhe')} />
					<Icon style={{fontSize: 40, }} name='logo-youtube' onPress={() => Linking.openURL('https://www.youtube.com/channel/UCFeMuM2PH65nPYyIbumndVQ')} />
					<Icon style={{fontSize: 40, }} name='logo-twitter' onPress={() => Linking.openURL('https://twitter.com/vinay1011?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Eprofile%3Avinay1011&ref_url=http%3A%2F%2Fwww.vinaysahasrabuddhe.in%2FHome')}/>
					</View>
					</View>
				</ScrollView>
			);
		}

		const index = scopedItemsObject[currentComponent];

		const scopedItemsArr = items.slice(index.start, index.end);

		return (
			<ScrollView>
				<DrawerHeader navigateToCallback={this.navigateToCallback} />
				<TouchableOpacity
					onPress={this.toggleMainDrawer}
					style={styles.customDrawerTouch}
				>
					<View style={styles.backButtonRow}>
						<Icon name="arrow-back" 
						size={25} 
						style={styles.customDrawerIcon} 
						color="#666666"
						/>
						<Text style={{ color: '#666666' }}>Back</Text>
					</View>
				</TouchableOpacity>
				<DrawerItems items={scopedItemsArr} {...restProps} />
			</ScrollView>
		);
	}
}


export default MainDrawer;
