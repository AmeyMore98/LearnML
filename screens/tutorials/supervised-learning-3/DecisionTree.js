'use strict'

import React, { Component } from 'react';
import { Image } from 'react-native';
import HTML from 'react-native-render-html';
import { Container, Content} from 'native-base'

export default class DecisionTree extends Component {
  static navigationOptions = ({navigation }) => ({
    title: "Decision Trees",
    headerStyle: {
      backgroundColor: '#0da5ec', 
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerTintColor: 'white'
  });

  render () {

    const htmlContent1 = `
    <p>Decision tree constructs classification or regression models inside the style of a tree structure. It separates a dataset into shorter and shorter subsets while at the same time a related choice tree is incrementally created. A definitive result's a tree with choice nodes and leaf nodes. A decision node(e.g., Outlook) has 2 or extra branches (e.g., Sunny, Overcast and Rainy). Leaf node(e.g., Play) speaks to a grouping or choice. The best choice node in a tree that compares to the least complex indicator alluded to as root hub. Choice trees can deal with both downright and numerical learning.</p>`;

    const htmlContent2 = `<h2>Entropy</h2>
    <p>A decision tree is made top-down from a root node and involves partitioning the info into subsets that contain instances with similar values (homogenous). ID3 rule uses entropy to calculate the homogeneity of a sample. If the sample is totally unvaried the entropy is zero and if the sample is an equally divided it's entropy of 1.
</p>
    `;

    const htmlContent3 = `<br><p>Entropy using two attributes</p>`;

    const htmlContent4 = `<h2>Information Gain</h2><p>
The information gain relies on the decrease in entropy once a dataset is split on associate degree attribute. Constructing a decision tree is all regarding finding attribute that returns the best info gain (i.e., the foremost homogeneous branches).
    </p><br>
    <p><i>Step 1:</i>Calculate the entropy of target</p>`;

    const htmlContent5=`<p>
    <i>Step 2:</i> The dataset is then split on the different attributes. The entropy for each branch is calculated. Then it is added proportionally, to get total entropy for the split. The resulting entropy is subtracted from the entropy before the split. The result is the Information Gain, or decrease in entropy.
</p>`;

    const htmlContent6=`<p>
    <i>Step 3:</i>Choose attribute with the largest information gain as the decision node, divide the dataset by its branches and repeat the same process on every branch.
</p>`;

    const htmlContent7=`<p>
    <i>Step 4a:</i>A branch with entropy of 0 is a leaf node.
</p>`;

    const htmlContent8=`<p>
    <i>Step 4b:</i>A branch with entropy more than 0 needs further splitting.
</p>`;

    const htmlContent9=`<p>
    <i>Step 5:</i>The ID3 algorithm is run recursively on the non-leaf branches, until all data is classified.
</p>`;
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
      <Image source={require('../../../assets/SLIII/image9.png')} style={{ alignSelf: 'center' }}/>
      <HTML html={htmlContent2}
      tagsStyles={styles}
      />
      <Image source={require('../../../assets/SLIII/image8.png')} style={{ alignSelf: 'center' }}/>
      <HTML html={htmlContent3}
      tagsStyles={styles}
      />
      <Image source={require('../../../assets/SLIII/image11.png')} style={{ alignSelf: 'center' }}/>      
      <HTML html={htmlContent4}
      tagsStyles={styles}
      />
      <Image source={require('../../../assets/SLIII/image10.png')} style={{ alignSelf: 'center' }}/>
      <HTML html={htmlContent5}
      tagsStyles={styles}
      />
      <Image source={require('../../../assets/SLIII/image2.png')} style={{ alignSelf: 'center' }}/>
      <Image source={require('../../../assets/SLIII/image1.png')} style={{ alignSelf: 'center' }}/>
      <HTML html={htmlContent6}
      tagsStyles={styles}
      />
      <Image source={require('../../../assets/SLIII/image4.png')} style={{ alignSelf: 'center' }}/>
      <Image source={require('../../../assets/SLIII/image3.png')} style={{ alignSelf: 'center' }}/>
      <HTML html={htmlContent7}
      tagsStyles={styles}
      />
      <Image source={require('../../../assets/SLIII/image6.png')} style={{ alignSelf: 'center' }}/>
      <HTML html={htmlContent8}
      tagsStyles={styles}
      />
      <Image source={require('../../../assets/SLIII/image5.png')} style={{ alignSelf: 'center' }}/>
      <HTML html={htmlContent9}
      tagsStyles={styles}
      />
      </Content>
      </Container>
      );
}
}
