'use strict'

import React, { Component } from 'react';
import HTML from 'react-native-render-html';
import { Container, Content } from 'native-base';

export default class kClustering extends Component {
    static navigationOptions = ({navigation }) => ({
		title: "K-Means clustering",
	    headerStyle: {
	      backgroundColor: '#0da5ec', 
	    },
	    headerTitleStyle: {
	      color: 'white'
	    },
	    headerTintColor: 'white'
	});

    render () {

   	const htmlContent1 = `<p>It is the simplest unsupervised learning algorithm that solves clustering problem. K-means algorithm partition n observations into k clusters where each observation belongs to the cluster with the nearest mean serving as a prototype of the cluster.</p>
   	`;

   	const htmlContent2 = `<p>With k-means clustering, we want to cluster our data into k groups. A larger k creates smaller groups with more granularity, a lower k means larger groups and less granularity.<br></p>
	`;

	const htmlContent3 = `<p>The output of the algorithm would be a set of "labels" assigning each data point to one of the k groups. In k-means clustering, the way these groups are defined is by creating a centroid for each group. The centroids are like the heart of the cluster, they "capture" the points closest to them and add them to the cluster.<br><br></p>
	<p>Here are the steps to k-means clustering:</p>
	<ol><li><b>Define the k centroids.</b> Initialize these at random (there are also fancier algorithms for initializing the centroids that end up converging more effectively).</li>
	<li><b>Find the closest centroid & update cluster assignments. </b>Assign each data point to one of the k clusters. Each data point is assigned to the nearest centroid's cluster. Here, the measure of "nearness" is a hyperparameter - often Euclidean distance.</li>
	<li><b>Move the centroids to the center of their clusters.</b> The new position of each centroid is calculated as the average position of all the points in its cluster.</li><li>Repeat steps 2 and 3 until the centroid stop moving a lot at each iteration (i.e., until the algorithm converges).</li></ol>
	`;

	const styles = {
			p: { fontSize: 17, color: '#393c3d'},
			h1: {color: '#232525'},
      li: { color: '#393c3d'}
		}

        return (
            <Container>
                <Content style={{ flex: 1, margin: 10 }}>
                <HTML html={htmlContent1}
                	tagsStyles={styles}
            	/>
            	
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
