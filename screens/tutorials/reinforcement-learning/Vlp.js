'use strict'

import React, { Component } from 'react';
import { Content, Container } from 'native-base';
import HTML from 'react-native-render-html';

export default class Vlp extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Value learning Problem",
        headerStyle: {
            backgroundColor: '#0da5ec',
        },
        headerTitleStyle: {
            color: 'white'
        },
        headerTintColor: 'white'
    });

    render() {

        const htmlContent1 = `<p><b>Value learning</b> is a proposed method for incorporating human values in an AI System. It involves the creation of an artificial learner whose actions consider many possible sets of values and preferences, weighed by their likelihood. Value learning could prevent an AGI of having goals detrimental to human values, hence helping in the creation of<b> Friendly AI</b>.</p><br>
       <p>Although there are many ways to inculcate human values in an AI (e.g.: Coherent Extrapolated Volition, Coherent Aggregated Volition and Coherent Blended Volition), this method is directly mentioned and developed in Daniel Dewey’s paper ‘Learning What to Value’. Like most authors, he assumes that human’s goals would not naturally occur in an artificial agent and should be enforced in it. First, Dewey argues against the use of a simple use of reinforcement learning to solve this problem, on the basis that this lead to the maximization of specific rewards that can diverge from value maximization. For example, even if we forcefully engineer the agent to maximize those rewards that also maximize human values, the agent could alter its environment to more easily produce those same rewards without the trouble of also maximizing human values (i.e.: if the reward was human happiness it could alter the human mind so it became happy with anything).</p><br>
       <p>To solve all these problems, Dewey proposes a utility function maximizer, who considers all possible utility functions weighted by their probabilities: "[W]e propose uncertainty over utility functions. Instead of providing an agent one utility function up front, we provide an agent with a pool of possible utility functions and a probability distribution P such that each utility function can be assigned probability P(Ujyxm) given a particular interaction history [yxm]. An agent can then calculate an expected value over possible utility functions given a particular interaction history" He concludes saying that although it solves many of the mentioned problems, this method still leaves many open questions. However, it should provide a direction for future work.</p>
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
