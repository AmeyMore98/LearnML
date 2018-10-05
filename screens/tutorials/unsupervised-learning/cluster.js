'use strict'

import React, { Component } from 'react';
import { Image } from 'react-native';
import HTML from 'react-native-render-html';
import { Container, Content } from 'native-base';

export default class Cluster extends Component {
    static navigationOptions = ({navigation }) => ({
		title: "Clustering",
	    headerStyle: {
	      backgroundColor: '#0da5ec', 
	    },
	    headerTitleStyle: {
	      color: 'white'
	    },
	    headerTintColor: 'white'
	});

    render () {

   	const htmlContent1 = `<p>It is basically a type of unsupervised learning method . An unsupervised learning method is a method in which we draw references from datasets consisting of input data without labeled responses. Generally, it is used as a process to find meaningful structure, explanatory underlying processes, generative features, and groupings inherent in a set of examples.</p>
   	`;

   	const htmlContent2 = `<p><b>Clustering</b> is the task of dividing the population or data points into a number of groups such that data points in the same groups are more similar to other data points in the same group and dissimilar to the data points in other groups. It is basically a collection of objects on the basis of similarity and dissimilarity between them.<br></p>
	`;

	const htmlContent3 = `<p><b>A cluster</b> is a collection of data items which are "similar" between them, and "dissimilar"  to data items in other clusters</p>
	<br><p><b>Why is clustering important?</b></p>
	<p>Clustering is important as it determines the grouping among the unlabeled & uncategorized data present. There exists no criteria for a good clustering. It depends on the user, what is the criteria they may use which satisfy their need.</p>
	`;


	const styles = {
			p: { fontSize: 17, color: '#393c3d'},
			h1: {color: '#232525'}
		}

        return (
             <Container>
                <Content style={{ flex: 1, margin: 10 }}>
                <HTML html={htmlContent1}
                	tagsStyles={styles}
            	/>
            	<Image source={require('../../../assets/USL/imagecl001.png')} style={{alignSelf: 'center'}} />
            	
            	<HTML html={htmlContent2}
                	tagsStyles={styles}
            	/>
            	
            	<HTML html={htmlContent3}
                	tagsStyles={styles}
            	/>
            </Content>
            </Container>
        );
    }
}
