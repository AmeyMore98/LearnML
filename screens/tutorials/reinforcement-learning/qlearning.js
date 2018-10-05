'use strict'

import React, { Component } from 'react';
import { Content, Container } from 'native-base';
import HTML from 'react-native-render-html';

export default class qLearning extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Q-Learning",
        headerStyle: {
            backgroundColor: '#0da5ec',
        },
        headerTitleStyle: {
            color: 'white'
        },
        headerTintColor: 'white'
    });

    render() {

        const htmlContent1 = `<p>Here’s how it works, and why it works.</p><br>
       <p>Imagine you have an agent that’s expected to take autonomous actions in a changing, unpredictable environment. Q-learning involves repeating the following 4 steps until the agent’s task is done:</p><br>
       <p>
        <ol>
            <li>Agent senses its environment, using this information to determine its current state</li>
            <li>Agent takes an action and obtain a penalty or reward</li>
            <li>Agent senses its environment again - to see what effect its chosen action had</li>
            <li>Agent learns from its experience (and so makes ‘better’ decisions next time)</li>
        </ol>
       </p><br>
       <p>Consider step 2 - this raises two interesting questions: how does the agent determine which action to take, and who determines the penalty/reward?</p><br>
       <p>The agent chooses its action by consulting its mental model, let’s call it its Q-table. This is a simple lookup process that answers the question: “When I am in <some state>, what is the best action to take?”</p><br>
       <p>This Q-table is updated throughout the agent’s lifetime, so what might have been considered the best course of action, may not be considered quite so great after a period when the agent<b> learns from its experience<b>.</p><br>
       <p>The penalty or reward received by the agent is provided by some kind of referee process, based on observations of the agent’s environment. Say you’re building a self-driving car, if your lidar sensor reports the agent has got too close to an object, a penalty can be applied. Or perhaps the car moves forward in the intended direction, that might be given a small reward.</p><br>
       <p>This is the key feature of Q-Learning: when feedback is provided, it might be long time after the fateful decision has been made. In reality, the feedback is likely to be the result of a large number of prior decisions, taken amid a shifting, uncertain environment. Unlike supervised learning, there are no correct input/output pairs, so suboptimal actions are not explicitly corrected, wrong actions just decrease the corresponding value in the Q-table, meaning there’s less chance choosing the same action should the same state be encountered again.</p><br>
       <p>That brings us back to step 4 - how the agent learns from its experience.In Q-Learning this involves repeated calculations of the Bellman Equation (https://en.wikipedia.org/wiki/Bellman_equation#Example ), a recursive description of expected rewards, which defines the true value of being in some particular state. From this we can determine the utility of a state and thus the optimal policy (what to do next).</p><br>
       <p>The Q-learning algorithm starts with arbitrary estimates in the Q-table, and will (in theory) solve the Bellman equations for a set of transitions, providing we visit all state / action pairs infinitely often. OK, in practice, we won’t be able to achieve infinite visits, but the principle is important: the more we consider and reconsider different conditions, the better our estimate becomes.</p><br>

   	`;

        const htmlContent2 = `<h2>Why it works:</h2>
        <p>Q-Learning works because it is fast, it can explore and it can exploit.</p><br>
        <p>Its speed arises from employing a greedy algorithm - which is a problem-solving heuristic that makes the locally optimal choice at each stage in the hope of finding a global optimum. This shallow deliberation is fast, which can be vital in real-time decision-making when we can’t afford to wait for a response.</p><br>
        <p>A consequence of making fast, locally optimal choices is we have to consider the Exploration-Exploitation trade-off, which involves two conflicting objectives: investing effort in finding new states and new potential learning opportunities, versus just utilizing what’s already been learned.</p><br>
        <p>This is the fundamental trade-off in reinforcement learning. You have to exploit to gain rewards, but you also have to learn and explore to behave profitably. If the right balance isn’t struck, you either learn nothing, or get stuck in a local minimum.</p><br>
        <p>So, during the course of Q-Learning, (the on-going process of an agent learning from its environment), it will sometimes explore by identifying uncharted states, and learning the consequences of its actions in those states; and at other times it will exploit what it has already learned.</p><br>
	`;


        const styles = {
            p: { fontSize: 17, color: '#393c3d' },
            h1: { color: '#232525' },
            h2: { color: '#232525' }
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
                
            </Content>
        </Container>
        );
    }
}
