'use strict'

import React, { Component } from 'react';
import { Image } from 'react-native';
import HTML from 'react-native-render-html';
import { Container, Content } from 'native-base';

export default class USL extends Component {
    static navigationOptions = ({navigation }) => ({
		title: "Unsupervised Learning",
	    headerStyle: {
	      backgroundColor: '#0da5ec', 
	    },
	    headerTitleStyle: {
	      color: 'white'
	    },
	    headerTintColor: 'white'
	});

    render () {

   	const htmlContent1 = `<p><b>Unsupervised learning</b> is the training of an artificial intelligence algorithm using information that is neither classified nor labeled and allowing the algorithm to act on that information without guidance. Here the task of machine is to group unsorted information according to similarities, patterns and differences without any prior training of data. Systems capable of unsupervised learning are often associated with generative learning models, even though they may also use a retrieval-based approach which is most often associated with supervised learning. In unsupervised learning, the system is presented with unlabeled and uncategorized data and the system's algorithms act on the data without prior training. The output is dependent upon the coded algorithms. Subjecting the system to unsupervised learning is one way of testing Artificial Intelligence. These unsupervised learning algorithms can perform more complex and difficult processing tasks than supervised learning systems. However, they can be more unpredictable.</p>
   	`;

   	const htmlContent2 = `<p><b>For instance</b>, suppose it is given an image having both dogs and cats which have not seen ever.
Thus, machine has no any idea about the features of dogs and cat so we can't categorize it in dogs and cats. But it can categorize them according to their similarities, patterns and differences i.e., we can easily categorize the picture into two parts. First may contain all pics having dogs in it and second part may contain all pics having cats in it. Here you didn\'t learn anything before, means no training data or examples.
</p><br>
	`;

	const htmlContent3 = `<p>Unsupervised learning classified into two categories of algorithms:</p>
	<ol><li><b>Clustering :</b> A clustering problem is where you want to discover the inherent groupings in the data, such as grouping customers by purchasing behavior.</li><li><b>Association:</b> An association rule learning problem is where you want to discover rules that describe large portions of your data, such as people that buy X also tend to buy Y.
</li></ol>
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
            	<Image source={require('../../../assets/USL/image001.png')} style={{alignSelf: 'center'}} />
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
