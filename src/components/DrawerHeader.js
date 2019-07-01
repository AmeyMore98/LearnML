import React from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';

const DrawerHeader = ({ navigateToCallback }) => (
	<TouchableOpacity onPress={() => navigateToCallback('Home')}>
		<View
			style={{
				backgroundColor: '#f0911e',
				paddingVertical: 20,
				paddingTop: StatusBar.currentHeight + 5,
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<Image
				source={
					require('../img/drawerHead.jpg')}
				style={{
					width: 120,
					height: 120,
					borderRadius: 10
				}}
			/>
			<Text style={{fontWeight: 'bold', color:'white', fontSize: 16}}>DR. VINAY SAHASRABUDDHE</Text>
			<Text style={styles.textStyle}>Member of Parliament, Rajya Sabha</Text>
			<Text style={styles.textStyle}>Chairman, ICCR</Text>
		</View>
	</TouchableOpacity>
);

const styles = {
	textStyle: {
		color: 'white',
		fontSize: 14,
	},
}

export default DrawerHeader;
