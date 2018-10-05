'use strict'

import React, { Component } from 'react';
import { Image } from 'react-native';
import HTML from 'react-native-render-html';
import { Container, Content } from 'native-base';

export default class LinearReg extends Component {
    static navigationOptions = ({navigation }) => ({
		title: "Linear Regression",
	    headerStyle: {
	      backgroundColor: '#0da5ec', 
	    },
	    headerTitleStyle: {
	      color: 'white'
	    },
	    headerTintColor: 'white'
	});

    render () {

   	const htmlContent1 = `<p>Linear regression is a statistical procedure of finding the link between independent and dependent variables. Let us to take an easy dataset to clarify the regression model.</p>
   	`;

   	const htmlContent2 = `<p>In order to suit the most effective intercept line between the points within the above scatter plots, we tend to use a metric referred to as “Sum of squared Errors” (SSE) and compare the lines to search out out the most effective fit by reducing errors. The errors are sum difference between actual price and foreseen price.</p><br>
	<p>To find the errors for every dependent price, we want to use the formula below.</p>
	`;

	const htmlContent3 = `<p>To do the best fit of line intercept, we need to apply a linear regression model to reduce the SSE value at minimum as possible. To identify a slope intercept, we use the equation</p>
	<p><b>y = mx + b,</b></p>
	<ul><li>‘m’ is the slope</li><li>‘x’ → independent variables</li><li>b’ is intercept</li></ul><p>We will use <b>Ordinary Least Squares Method</b> to find the best line intercept (b) slope (m)</p>
	`;

	const styles = {
			p: { fontSize: 17, color: '#393c3d'},
			h1: {color: '#232525'}
		}

        return (
            <Container>
                <Content style={{margin: 10}}>
                        <HTML html={htmlContent1}
                        	tagsStyles={styles}
                    	/>
                    	<Image source={require('../../../assets/SLI/image001.png')} style={{alignSelf: 'center'}}  />
                    	<Image source={require('../../../assets/SLI/image003.png')} style={{alignSelf: 'center'}}/>
                    	<HTML html={htmlContent2}
                        	tagsStyles={styles}
                    	/>
                    	<Image source={require('../../../assets/SLI/image005.png')} style={{alignSelf: 'center'}}/>
                    	<Image source={require('../../../assets/SLI/image007.png')} style={{alignSelf: 'center'}}/>
                    	<HTML html={htmlContent3}
                        	tagsStyles={styles}
                    	/>
                </Content>
            </Container>
        );
    }
}
