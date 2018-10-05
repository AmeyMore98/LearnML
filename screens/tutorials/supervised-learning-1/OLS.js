'use strict'

import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import HTML from 'react-native-render-html';
import { Container, Content } from 'native-base';

export default class OLS extends Component {
    static navigationOptions = ({navigation }) => ({
		title: "OLS Method",
	    headerStyle: {
	      backgroundColor: '#0da5ec', 
	    },
	    headerTitleStyle: {
	      color: 'white'
	    },
	    headerTintColor: 'white'
	});

    render () {

   	const htmlContent1 = `<p>We use the following formula while using the OLS method:</p>`;

   	const htmlContent2 = `<p>To calculate the intercept ‘b’ and the slope ‘m’:</p><br>`;

	const htmlContent3 = `<p><br>m = 1037.8 / 216.19<br>m = 4.80<br>b = 45.44 - 4.80 * 7.56 = 9.15<br>Hence, <b>y = mx + b = 4.80x + 9.15</b><br><b>y = 4.80x + 9.15</b><br></p>`;

	const styles = {
			p: { fontSize: 17, color: '#393c3d'},
			h1: {color: '#232525'}
		}

        return (
            <Container>
            <Content style={{ flex: 1, margin:10}}>
                <HTML html={htmlContent1}
                	tagsStyles={styles}
            	/>
            	<Image source={require('../../../assets/SLI/image009.png')} style={{alignSelf: 'center'}}/>
            	<Image source={require('../../../assets/SLI/image011.png')} style={{alignSelf: 'center'}}/>
            	<HTML html={htmlContent2}
                	tagsStyles={styles}
            	/>
            	<Image source={require('../../../assets/SLI/image013.png')} style={{alignSelf: 'center'}}/>
            	<HTML html={htmlContent3}
                	tagsStyles={styles}
            	/>
            </Content>
            </Container>
        );
    }
}
