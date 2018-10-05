'use strict'

import React, { Component } from 'react';
import { Image, ScrollView, Dimensions, View } from 'react-native';
import HTML from 'react-native-render-html';
import { Container, Content } from 'native-base';
export default class Logistic extends Component {
  static navigationOptions = ({navigation }) => ({
    title: "Logistic Regression",
    headerStyle: {
      backgroundColor: '#0da5ec', 
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerTintColor: 'white'
  });

  render () {

    const htmlContent1 = `<h1>Logistic Regression</h1>
    <p>Logistic regression is used for classification. It gives the probability of the variable Y belonging to a certain class. A good example of classification is determining whether or not a application is fraudulent. Ultimately, the lender needs to understand whether or not they ought to provide the receiver a loan or not, and that they have some tolerance for risk that the application is really deceitful. during this case, the goal of logistic regression is to calculate the likelihood (between 0.33 and 100%) that the application is fraud. With these possibilities, we are able to set some threshold on top of that we’re willing to lend to the receiver, and below that we have a tendency to deny their application or flag the application for additional review.
    </p>`;

    const htmlContent2 = `<p>Though logistic regression is usually used for binary classification wherever there are 2 categories, keep in mind that classification is performed with any variety of classes (e.g. when assigning written digits a label between zero and nine, or using automatic face recognition to discover that friends are in a Facebook picture).</p><br>
    <p>Logistic regression can be expressed as:</p>
    `;

    const htmlContent3 = `<p>LHS is called logit and it represents the log of odds of an event. The inverse of logit is the sigmoid function which is:</p>`;

    const htmlContent4 = `<p>0 < p < 1
    Unlike simple regression model, that uses normal Least sq. for parameter estimation, we tend to use maximum likelihood Estimation. 
    There is infinite sets of regression coefficients. {the maximum|the utmost|the most} probability estimate is that set of regression coefficients for which the chance of obtaining the info we've got discovered is maximum.
    <br>For binary data, the output is pi for success and 1-pi for failure. The MLE is:
    </p>`;

    const htmlContent5=`<p>The output of logistic regression is a S curve with probabilities of class on vertical axis.
</p>`;

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
      <HTML html={htmlContent2}
      tagsStyles={styles}
      />
      <Image source={require('../../../assets/SLII/image2.png')} style={{alignSelf: 'center'}}/>
      <HTML html={htmlContent3}
      tagsStyles={styles}
      />
      <Image source={require('../../../assets/SLII/image4.png')} style={{alignSelf: 'center'}}/>      
      <HTML html={htmlContent4}
      tagsStyles={styles}
      />
      <Image source={require('../../../assets/SLII/image3.png')} style={{alignSelf: 'center'}}/>
      <HTML html={htmlContent5}
      tagsStyles={styles}
      />
      <Image source={require('../../../assets/SLII/image6.png')} style={{alignSelf: 'center'}}/>
      </Content>
      </Container>
      );
}
}
