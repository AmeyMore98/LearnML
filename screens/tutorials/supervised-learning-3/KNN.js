'use strict'

import React, { Component } from 'react';
import { Image } from 'react-native';
import HTML from 'react-native-render-html';
import { Container, Content } from 'native-base';

export default class KNN extends Component {
  static navigationOptions = ({navigation }) => ({
    title: "k-Nearest Neighbours (KNN)",
    headerStyle: {
      backgroundColor: '#0da5ec', 
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerTintColor: 'white'
  });

  render () {

    const htmlContent1 = `<p>kNN is a non-parametric model which means that it does not make any assumptions about the underlying data distributions unlike in SVM or linear and logistic regression models.
KNN Algorithm is based on feature similarity: How closely out-of-sample features resemble our training set determines how we classify a given data point:
    </p><br>`;

    const htmlContent2 = `<br><p>The distance metric can be a simple Euclidean distance or more complex distances.
The algorithm can be summarized as:</p>
    <ol>
      <li>A positive integer k is specified, along with a new sample</li>
      <li>We select the k entries in our database which are closest to the new sample</li>
      <li>We find the most common classification of these entries</li>
      <li>This is the classification we give to the new sample</li>
    </ol>
    `;

    const htmlContent3 = `
    <p>KNN can be used for classification or regression. In classification, an object is classified by a majority vote of its neighbors, with the object being assigned to the class most common among its k nearest neighbors. While in regression, output is the value for the object (predicts continuous values). This value is the average (or median) of the values of its k nearest neighbors.</p>
<br><h2>How to choose a value of k?</h2>
    <p>The right value of k will help in improving the accuracy of the model. If the value of k is higher, it would help to reduce variance but small patterns in data may be missed out. Hence choosing the right value is important.
    </p>
    `;

    const styles = {
      p: { fontSize: 17, color: '#393c3d'},
      h1: {color: '#232525'},
      h2: {color: '#232525'}
    }

    return (
      <Container><Content style={{ flex: 1, margin:10}}>
      <HTML html={htmlContent1}
      tagsStyles={styles}
      />
      <Image source={require('../../../assets/SLIII/image7.png')} style={{ alignSelf: 'center'}}/>
      <HTML html={htmlContent2}
      tagsStyles={styles}
      />
      <HTML html={htmlContent3}
      tagsStyles={styles}
      />
      </Content></Container>
      );
}
}
