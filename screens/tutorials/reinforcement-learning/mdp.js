'use strict'

import React, { Component } from 'react';
import { Image } from 'react-native';
import { Content, Container } from 'native-base';
import HTML from 'react-native-render-html';

export default class Mdp extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Markov Decision Processes",
        headerStyle: {
            backgroundColor: '#0da5ec',
        },
        headerTitleStyle: {
            color: 'white'
        },
        headerTintColor: 'white'
    });

    render() {

        const htmlContent1 = `<p>In the problem, an agent is supposed to decide the best action to select based on his present state. When this step is repeated, the problem is known as a Markov Decision Process.</p>
   	`;

        const htmlContent2 = `<p>A <b>Markov Decision Process (MDP)</b> model contains:</p><br>
        <p>
            <ul>
                <li>A set of possible world states S.</li>
                <li>A set of Models.</li>
                <li>A set of possible actions A.</li>
                <li>A real valued reward function R(s,a).</li>
                <li>A policy the solution of Markov Decision Process.</li>              
            </ul>
        </p>
	`;

        const htmlContent3 = `<br><p><b>What is a State?</b></p>
        <p>A State is a set of tokens that represent all the states that the agent can be in.</p>
    `;
        const htmlContent4 = `<br><p><b>What is a Model?</b></p>
        <p>A Model (sometimes called Transition Model) gives an action’s effect in a state. In particular, T(S, a, S’) defines a transition T where being in state S and taking an action ‘a’ takes us to state S’ (S and S’ may be same). For stochastic actions (noisy, non-deterministic) we also define a probability P(S’|S,a) which represents the probability of reaching a state S’ if action ‘a’ is taken in state S. Note Markov property states that the effects of an action taken in a state depend only on that state and not on the prior history.</p>
    `;
        const htmlContent5 = `<br><p><b>What is Actions?</b></p>
        <p>An Action A is set of all possible actions. A(s) defines the set of actions that can be taken being in state S.</p>
    `;
        const htmlContent6 = `<br><p><b>What is a Reward?</b></p>
        <p>A Reward is a real-valued reward function. R(s) indicates the reward for simply being in the state S. R(S,a) indicates the reward for being in a state S and taking an action ‘a’. R(S,a,S’) indicates the reward for being in a state S, taking an action ‘a’ and ending up in a state S’.</p>

    `;
        const htmlContent7 = `<br><p><b>What is a Policy?</b></p>
        <p>A Policy is a solution to the Markov Decision Process. A policy is a mapping from S to a. It indicates the action ‘a’ to be taken while in state S.
            Let us take the example of a grid world:</p>
    `;
        const htmlContent8 = `<br><p>An agent lives in the grid. The above example is a 3*4 grid. The grid has a START state (grid no 1,1). The purpose of the agent is to wander around the grid to finally reach the Blue Diamond (grid no 4,3). Under all circumstances, the agent should avoid the Fire grid (orange color, grid no 4,2). Also, the grid no 2,2 is a blocked grid, it acts like a wall hence the agent cannot enter it.</p><br>
        <p>The agent can take any one of these actions: UP, DOWN, LEFT, RIGHT
        Walls block the agent path, i.e., if there is a wall in the direction the agent would have taken, the agent stays in the same place. So for example, if the agent says LEFT in the START grid he would stay put in the START grid.</p><br>
        <p><b>First Aim:</b> To find the shortest sequence getting from START to the Diamond. Two such sequences can be found:</p><br>
        <p>
            <ul>
                <li>RIGHT RIGHT UP UP RIGHT</li>
                <li>UP UP RIGHT RIGHT RIGHT</li>
            </ul>
        </p><br>
        <p>Let us take the second one (UP UP RIGHT RIGHT RIGHT) for the subsequent discussion.
        The move is now noisy. 80% of the time the intended action works correctly. 20% of the time the action agent takes causes it to move at right angles. For example, if the agent says UP the probability of going UP is 0.8 whereas the probability of going LEFT is 0.1 and probability of going RIGHT is 0.1 (since LEFT and RIGHT is right angles to UP).</p><br>
        <p>The agent receives rewards each time step: -</p>
        <p>
            <ul>
                <li>Small reward each step (can be negative when can also be term as punishment, in the above example entering the Fire can have a reward of -1).</li>
                <li>Big rewards come at the end (good or bad).</li>
                <li>Goal is to Maximize sum of rewards.</li>
            </ul>
        </p>
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
                <HTML html={htmlContent2}
                    tagsStyles={styles}
                />
                <Image source={require('../../../assets/RL/rf02.jpg')} style={{alignSelf: 'center'}}/>
                <HTML html={htmlContent3}
                    tagsStyles={styles}
                />
                <HTML html={htmlContent4}
                    tagsStyles={styles}
                />
                <HTML html={htmlContent5}
                    tagsStyles={styles}
                />
                <HTML html={htmlContent6}
                    tagsStyles={styles}
                />
                <HTML html={htmlContent7}
                    tagsStyles={styles}
                />
                <Image source={require('../../../assets/RL/rf03.jpg')} style={{alignSelf: 'center'}} />
                <HTML html={htmlContent8}
                    tagsStyles={styles}
                />

            </Content>
        </Container>
        );
    }
}
