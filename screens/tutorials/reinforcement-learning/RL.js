'use strict'

import React, { Component } from 'react';
import { Image } from 'react-native';
import HTML from 'react-native-render-html';
import { Container, Content } from 'native-base';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: Failed prop type', 'Module RCTImageLoader']);

export default class RL extends Component {
    static navigationOptions = ({navigation }) => ({
        title: "Reinforcement Learning",
	    headerStyle: {
	      backgroundColor: '#0da5ec', 
	    },
	    headerTitleStyle: {
	      color: 'white'
	    },
	    headerTintColor: 'white'
	});

    render () {

        const htmlContent1 = `<p>Reinforcement learning is about taking appropriate action to maximize reward in a given situation. It is used by various software and machines to find the best possible behavior or path it should take in any given situation. Reinforcement learning is different from the supervised learning in a way that in supervised learning the training data has the answer key with it so the model is trained with the correct answer itself whereas in reinforcement learning, there is no answer but the reinforcement agent decides what to do to perform the task. In the absence of training data, it learns from its experience.</p>
   	`;

        const htmlContent2 = `<p>Example:  We have an agent and a diamond, with many hurdles in between. The agent is supposed to find the best path to reach the diamond. The following representation explains the problem more easily.</p>
	`;

		const htmlContent3 = `<p>The above image shows robot, diamond and fire. The goal of the robot is to get the reward that is the diamond and avoid the hurdles that is fire. The robot learns by trying all the possible paths and then selecting the path which gives him the diamond with the least hurdles. Each right step will give the robot a reward and each wrong step will subtract the reward of the robot. The total reward will be calculated when it reaches the final reward that is the diamond.</p>
	`;
		const htmlContent4 = `<p>In reinforcement learning,</p><br>
		<p>
			<ul>
  				<li><b>Input:</b> The input should be an initial state from which the model will start</li>
  				<li><b>Output:</b> There are many possible outputs as there are variety of solution to a particular problem</li>
				<li><b>Training:</b> The training is based upon the input, the model will return a state and the user will decide to reward or punish the model based on its output.</li>
				<li>The model keeps continues to learn.</li>
				<li>The best solution is decided based on the maximum reward.</li>
			</ul>
		</p>
	`;
		const htmlContent5 = `<p><b>Types of Reinforcement:<b> There are two types of Reinforcement:</p><br>
		<p>
			<ol>
				<li>
				<p><b>Positive:</b></p><br>
				<p>Positive Reinforcement is defined as when an event, occurs due to a particular behavior, increases the strength and the frequency of the behavior.</p><br>
				<p>Advantages:</p><br>
				<p>
					<ul>
						<li>Maximizes Performance</li>
						<li>Sustain Change for a long period of time</li>
					</ul>
				</p>
				<p>Disadvantages:</p><br>
				<p>
					<ul>
						<li>Too much Reinforcement can lead to overload of states which can diminish the results</li>
					</ul>
				</p>
				</li>

				<li>
					<p><b>Negative:</b></p><br>
					<p>
					Negative Reinforcement is defined as strengthening of a behavior because a negative condition is stopped or avoided. 
					</p><br>
					<p>Advantages:</p><br>
					<p>
					<ul>
						<li>Increases Behavior</li>
						<li>Provide defiance to minimum standard of performance</li>
					</ul>
				</p>
				<p>Disadvantages:</p><br>
				<p>
					<ul>
						<li>It Only provides enough to meet up the minimum behavior</li>
					</ul>
				</p>
				</li>
			</ol>
		</p>
	`;

		const htmlContent6 = `<p><b>Various Practical applications of Reinforcement Learning –</b></p><br>
		<p>
			<ul>
				<li>Used in robotics for industrial automation.</li>
				<li>Used in machine learning and data processing</li>
				<li>Used to create training systems that provide custom instruction and materials according to the requirement of students.</li>
			</ul>
		</p>

	`;


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
            	<Image source={require('../../../assets/RL/rl1.png')} style={{alignSelf: 'center'}} />
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
            	</Content>
            </Container>
        );
    }
}
