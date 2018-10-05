'use strict'

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
} from 'react-native';
import { Icon, Header, Content, Container, Left, Right} from 'native-base';
import HTML from 'react-native-render-html';

export default class Disclaimer extends Component{

	render(){
		const html1 = `<br><p>		This Mobile App has been developed by Developer Team of Veermata Jijabai Technological Institute (VJTI), Mumbai under the aegis of Digital VJTI initiative. Developers should not be held responsible for any informational / mis-informational anomalies represented in the Mobile App.</p>
		<br><p>		The contents of this app, including without limitation, all data, information, text, graphics, links and other materials are provided as a convenience by the Developer team to the app users and are meant to be used for informational purposes only. Developer Team do not take responsibility for decisions taken by the reader based solely on the information provided in this app.</p>
		<br><p>		The app EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. The app makes no warranty that (1) THE APP OR THE CONTENT WILL MEET OR SATISFY user's REQUIREMENTS (2) THE APP SHALL HAVE NO RESPONSIBILITY FOR ANY DAMAGE TO user’s PHONE OR TABLET OR LOSS OF DATA THAT RESULTS FROM user's USE OF THE APP OR ITS CONTENT.</p>
		<br><p>		The user AGREE TO HOLD HARMLESS – DEVELOPER TEAM FROM AND AGAINST ANY AND ALL CLAIMS, ACTIONS, DEMANDS, LIABILITIES, JUDGMENTS AND SETTLEMENTS, INCLUDING WITHOUT LIMITATION, FROM ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, PUNITIVE OR ANY OTHER CLAIM YOU MAY INCUR IN CONNECTION WITH user's USE OF THIS APP, INCLUDING, WITHOUT LIMITATION, ANY ECONOMIC HARM, LOST PROFITS, DAMAGES TO BUSINESS, DATA OR PHONE SYSTEMS, OR ANY DAMAGES RESULTING FROM RELIANCE ON ANY CONTENT OR RESULTING FROM ANY INTERRUPTIONS, WORK STOPPAGES, PHONE OR TABLET FAILURES,DELETION OF FILES, ERRORS, OMISSIONS, INACCURACIES, DEFECTS, VIRUSES, DELAYS OR MISTAKES OF ANY KIND.</p>
		<br><p>		The app may include inaccuracies and typographical errors. Changes and improvements are periodically made to the app and the information therein. We do not warrant or assume any legal liability or responsibility for the completeness, or usefulness of any information, service.</p>
		<br><h2>***End of Document ***<h2>
		`;
	const styles = {
		p: { fontSize: 17, color: '#393c3d' },
        h1: { color: '#232525', alignSelf: 'center' },
        h2: { fontSize: 18, color: '#232525', alignSelf: 'center' }
	}

		return(
			<Container>
			<Content><Header style={{backgroundColor: '#0da5ec'}}>
					<Left>
						<Icon name='menu' onPress={() => this.props.navigation.openDrawer()} style={{color: 'white'}}/>
					</Left>
					<Text style={{alignSelf: 'center', fontSize: 20, color: 'white'}}>Disclaimer</Text>
					<Right/>
					<Right/>
				</Header>
				<HTML html={html1} tagsStyles={styles}/>
			</Content>
			</Container>
		);
	}
}