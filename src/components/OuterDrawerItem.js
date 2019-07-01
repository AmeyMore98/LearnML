import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'native-base';

const OuterDrawerItem = ({ label, onPress }) => (
	<TouchableOpacity
		onPress={onPress}
		style={{
			paddingTop: 12,
			paddingBottom: 12,
			paddingLeft: 15,
			paddingRight: 10,
		}}
	>
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
			}}
		>
			<Text>{label}</Text>
			<Icon name="arrow-forward" />
		</View>
	</TouchableOpacity>

);

export default OuterDrawerItem;
