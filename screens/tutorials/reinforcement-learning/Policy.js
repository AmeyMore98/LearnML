'use strict'

import React, { Component } from 'react';
import { Image } from 'react-native';
import {Content, Container} from 'native-base';
import HTML from 'react-native-render-html';

export default class Policy extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Policy Learning",
        headerStyle: {
            backgroundColor: '#0da5ec',
        },
        headerTitleStyle: {
            color: 'white'
        },
        headerTintColor: 'white'
    });

    render() {

        const htmlContent1 = `<p><b>Policy learning</b> is a more straightforward in which we learn a <b>policy function, π,</b> which is a direct map from every state to the best corresponding action at that state. Think of it as a behavioral policy: “when I observe states, the best thing to do is take action a”. Example, an autonomous vehicle’s policy might effectively include something like: “if I see a yellow light and I am more than 100 feet from the intersection, I should brake. Otherwise, keep moving forward.”</p>
       
   	`;
        const htmlContent2 = `<br><p>A <b>policy</b> is a map from <b>state</b> to <b>action</b>.</p><br>
        <p>Andrej Karpathy’s Pong from Pixels provides an excellent walkthrough on using deep reinforcement learning to learn a policy for the Atari game Pong that takes raw pixels from the game as the input (state) and outputs a probability of moving the paddle up or down (action).</p><br>

	`;

        const htmlContent3 = `<p>In a policy gradient network, the agent learns the optimal policy by adjusting its weights through gradient descent based on reward signals from the environment. Image via: http://karpathy.github.io/2016/05/31/rl/</p>
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
                <Image source={require('../../../assets/RL/rf04.png')} style={{alignSelf: 'center'}} />
                    <HTML html={htmlContent2}
                        tagsStyles={styles}
                    />
                <Image source={require('../../../assets/RL/rf05.png')} style={{alignSelf: 'center'}} />
                    <HTML html={htmlContent3}
                        tagsStyles={styles}
                    />
            </Content>
        </Container>
        );
    }
}
