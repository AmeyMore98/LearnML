'use strict'

import React, { Component } from 'react';
import { Image } from 'react-native';
import HTML from 'react-native-render-html';
import { Container, Content } from 'native-base';

export default class LinearReg extends Component {
  static navigationOptions = ({navigation }) => ({
    title: "Support Vector Machines",
    headerStyle: {
      backgroundColor: '#0da5ec', 
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerTintColor: 'white'
  });

  render () {

    const htmlContent1 = `<p>SVM is a model similar to logistic regression in that it is used to classify the data. The significance of SVM lies in its geometric intuition.A few examples of the problems SVMs can solve:Is this an image of a cat or a dog?,Is this review positive or negative?
    SVMs are based on the idea of finding a hyperplane that best divides a dataset into two classes, as shown in the image below.
    </p>`;

    const htmlContent2 = `<p>Support vectors are the critical points of the dataset that can alter the hyperplane if they are removed.</p>
    <h2>How to find the right hyperplane?</h2>
    <p>The distance between the hyperplane and the nearest data point from either set is known as the margin. The goal is to choose a hyperplane with the greatest possible margin between the hyperplane and any point within the training set, giving a greater chance of new data being classified correctly.</p>
    `;

    const htmlContent3 = `<p>Pros</p><ul>
    <li>Accuracy</li>
    <li>Works well on smaller cleaner datasets</li>
    <li>It can be more efficient because it uses a subset of training points</li>
    </ul>
    <p>Cons</p><ul>
    <li>Isn’t suited to larger datasets as the training time with SVMs can be high</li>
    <li>Less effective on noisier datasets with overlapping classes</li>
    </ul>`;

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
      <Image source={require('../../../assets/SLII/image5.png')} style={{alignSelf: 'center'}}/>
      <HTML html={htmlContent2}
      tagsStyles={styles}
      />
      <Image source={require('../../../assets/SLII/image1.png')} style={{alignSelf: 'center'}}/>
      <HTML html={htmlContent3}
      tagsStyles={styles}
      />
      </Content>
      </Container>
      );
}
}
