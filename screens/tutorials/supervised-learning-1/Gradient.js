import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import HTML from 'react-native-render-html';
import { Container, Content } from 'native-base';

export default class Gradient extends Component {
    static navigationOptions = ({navigation }) => ({
		title: "Gradient Descent Algortihm",
	    headerStyle: {
	      backgroundColor: '#0da5ec', 
	    },
	    headerTitleStyle: {
	      color: 'white'
	    },
	    headerTintColor: 'white'
	});

    render () {

   	const htmlContent1 = `<p>To reduce the cost function, this is one of the best algorithms in use.Let’s represent the hypothesis h, which is function or a learning algorithm.</p>`;

   	const htmlContent2 = `<p>In Gradient Descent, we find the minimal cost function by estimating various values for theta 0 and theta 1. To best visualize it, it is similar to taking the best step to go downhill.</p><br>`;

	const htmlContent3 = `<p>We can measure the accuracy using:</p>`;

    const htmlContent4 = `<h2>Gradient Descent for Linear Regression:</h2>`;

    const htmlContent5 = `<p>We use partial derivatives to signify the rate of change of change of functions as the variables change. The gradient descent algorithm is used as follows to find the minimum values:<br>Where alpha is called the learning rate or the step-size.</p>`

	const styles = {
			p: { fontSize: 17, color: '#393c3d'},
			h1: {color: '#232525'},
            h2: {color: '#232525'} 
		}

        return (
            <Container>
            <Content style={{ flex: 1, margin:10}}>
                <HTML html={htmlContent1}
                	tagsStyles={styles}
            	/>
            	<Image source={require('../../../assets/SLI/image015.png')} style={{alignSelf: 'center'}}/>
            	<HTML html={htmlContent2}
                	tagsStyles={styles}
            	/>
            	<Image source={require('../../../assets/SLI/image017.png')} style={{alignSelf: 'center'}}/>
            	<HTML html={htmlContent3}
                	tagsStyles={styles}
            	/>
                <Image source={require('../../../assets/SLI/image019.png')} style={{alignSelf: 'center'}}/>
                <HTML html={htmlContent4}
                    tagsStyles={styles}
                />
                <Image source={require('../../../assets/SLI/image021.png')} style={{alignSelf: 'center'}}/>
                <HTML html={htmlContent5}
                    tagsStyles={styles}
                />
                <Image source={require('../../../assets/SLI/image023.png')} style={{alignSelf: 'center'}}/>
            </Content>
            </Container>
        );
    }
}
