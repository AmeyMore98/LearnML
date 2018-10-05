'use strict'

import React, { Component } from 'react';
import HTML from 'react-native-render-html';
import { Container, Content } from 'native-base';

export default class SL1 extends Component {
    static navigationOptions = ({navigation }) => ({
		title: "Supervised Learning",
		headerMode: 'none',
	    headerStyle: {
	      backgroundColor: '#0da5ec', 
	    },
	    headerTitleStyle: {
	      color: 'white'
	    },
	    headerTintColor: 'white'
	});

    render () {

   	const htmlContent1 = `<h1>What is Supervised Learning?</h1>
   	<p>In supervised learning problems, we tend to begin with an information set containing training examples with associated correct labels. for instance, when learning to classify written digits, a supervised learning algorithmic program takes thousands of images of written digits along side labels containing the proper number each image represents. The algorithmic program can then learn the connection between the pictures and their associated numbers, and apply that learned relationship to classify utterly new pictures (without labels) that the machine hasn’t seen before.</p>
   	<p>The greater part of functional machine learning utilizes supervised learning. </p>
	<p>Supervised learning is the place where you have input factors (x) and a output variable (Y) and you utilize an algorithm to take in the mapping function from the independent variable to the dependent variable. </p>
	<p><b>			Y = f(x)		</b></p>
	<p>The objective is to get an approximate mapping capacity so well that when you have new information (x) that you can anticipate the yield factors (Y) for that information. </p>
	<p>It is called supervised learning in light of the fact that the procedure of a calculation gaining from the preparation dataset can be thought of as an educator administering the learning procedure. We know the right answers, the calculation iteratively makes expectations on the preparation information and is amended by the educator. Learning stops when the calculation accomplishes a worthy level of execution.</p>
   	`;

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
            </Content>
            </Container>
        );
    }
}
