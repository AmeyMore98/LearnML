'use strict'

import React, { Component } from 'react';
import HTML from 'react-native-render-html';
import { Container, Content } from 'native-base';

export default class ClusteringMethods extends Component {
    static navigationOptions = ({navigation }) => ({
		title: "Clustering Methods",
	    headerStyle: {
	      backgroundColor: '#0da5ec', 
	    },
	    headerTitleStyle: {
	      color: 'white'
	    },
	    headerTintColor: 'white'
	});

    render () {

   	const htmlContent1 = `<ol><li><b>Density-Based:</b><br>These methods consider the clusters as the dense region having some similarity and different from the lesser dense region of the given space. These methods have good accuracy and ability to merge two clusters. Example DBSCAN (Density-Based Spatial Clustering of Applications with Noise)<br></li>
	<li><b>Hierarchical Based: </b><br>
The clusters formed in this method forms a tree type structure based on the hierarchy. New clusters are formed using the previous. It is divided into two category
<br>Agglomerative (bottom up approach)
<br>Divisive (top down approach) 
<br>for example: BIRCH (Balanced Iterative Reducing Clustering and using Hierarchies) etc.<br></li>
<li><b>Partitioning:</b></br>
These methods partition the objects into various different clusters (K clusters) and each partition forms one cluster. This method is used to increase the efficiency an objective criterion similarity function such as when the distance is a major parameter example K-means
<br></li><li><b>Grid-based:</b>
In this method the data spaces are formulated into a definite number of cells that form a grid-like format. All the clustering operation done on these grids are quicker and are independent of the number of data objects, for example CLIQUE (Clustering In Quest) etc.
<br></li></ol>
	`;

	const styles = {
			p: { fontSize: 17, color: '#393c3d'},
			h1: {color: '#232525'},
			li: {fontSize: 17, color: '#393c3d' }
		}

        return (
            <Container>
                <Content style={{ flex: 1, margin: 10 }}>
                <HTML html={htmlContent1}
                	tagsStyles={styles}
            	/>
            	
             </Content>
            </Container>
        );
    }
}
