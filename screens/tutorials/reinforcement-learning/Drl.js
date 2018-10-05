'use strict'

import React, { Component } from 'react';
import { Content, Container } from 'native-base';
import HTML from 'react-native-render-html';

export default class Drl extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Deep Reinforcement Learning",
        headerStyle: {
            backgroundColor: '#0da5ec',
        },
        headerTitleStyle: {
            color: 'white'
        },
        headerTintColor: 'white'
    });

    render() {

        const htmlContent1 = `<p>Deep reinforcement learning is the result of applying reinforcement learning using deep neural networks. Deep neural networks are a function approximator using a neural network with several layers. Reinforcement learning is when you iteratively update (reinforce) a strategy in a given environment. The recently published AlphaGo Zero is a good example of deep reinforcement learning. Deep Reinforcement learning uses algorithms to train a machine to do general tasks as opposed to certain tasks, it can be supervised or non-supervised.</p>

   	`;
        

        const styles = {
            p: { fontSize: 17, color: '#393c3d' },
            h1: { color: '#232525' }
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
