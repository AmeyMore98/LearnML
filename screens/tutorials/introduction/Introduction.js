'use strict'

import React, { Component } from 'react';
import { Image, ScrollView, Dimensions, View } from 'react-native';
import HTML from 'react-native-render-html';
import {Container, Content } from 'native-base';

export default class Introduction extends Component {
    static navigationOptions = ({navigation }) => ({
		title: "Introduction",
	    headerStyle: {
	      backgroundColor: '#0da5ec', 
	    },
	    headerTitleStyle: {
	      color: 'white'
	    },
	    headerTintColor: 'white'
	});

   	render () {

   		const htmlContent1 = `<h1>What is Machine Learning?</H1>
							<p>	Machine learning is an utilization of man-made reasoning (AI) that gives frameworks the capacity to consequently learn and enhance as a matter of fact without being explicitly programmed. Machine learning centers around the advancement of PC
							programs that can access information and utilize it to learn for themselves.</p>
							<p>	The way toward learning starts with observations or data, such as examples, coordinate involvement, or guidance, so as to search for examples in information and settle on better choices later on in view of the examples that we give. The essential point is to permit the PCs learn consequently without human mediation or help and change activities as needs be.</p>
							<h1>Why Machine Learning matters?</h1>
							<p>	Artificial intelligence will shape our future more capably than some other development this century. Any individual who does not comprehend it will before long wind up feeling deserted, awakening in a world brimming with innovation that feels increasingly like enchantment.</p> 
							<p>	The rate of increasing speed is now astounding. After several AI winters and times of false expectation in the course of recent decades, fast advances in information storage and PC processing power have significantly changed the picture lately.</p>
							<p>	In 2015, Google prepared a conversational agent (AI) that couldn't just convincingly communicate with people as a technical support helpdesk, yet additionally examine profound quality, express sentiments, and answer general actualities based inquiries.</p><br>`;
		
		const htmlContent2 = `<em>(Vinyals & Le, 2017)</em>
		<p>	That year, DeepMind built up a specialist that outperformed human-level execution at 49 Atari games, receiving just the pixels and games score as data sources. Before long, in 2016, DeepMind obsoleted their very own accomplishment by discharging another cutting edge ongoing interaction strategy called A3C. </p>
		<p>	In the interim, AlphaGo prevailed over another outstanding human players at Go — an phenomenal accomplishment in a game overwhelmed by people for two decades after machines previously vanquished chess. Numerous masters couldn't see how a machine would be able to get a handle on the full subtlety and multifaceted nature of this antiquated Chinese war system diversion, with its 10¹⁷⁰ conceivable board positions (there are just 10⁸⁰atoms in the universe).</p>
		<p>	In this app, we'll investigate the central machine learning ideas driving these innovations. Before the end, you ought to have the capacity to portray how they function at a reasonable level and be furnished with the tools to begin building comparable applications yourself.</p>
		<br><h1>The semantic tree: artificial intelligence and machine learning</h1><br>`;

		const htmlContent3= `<p><b>	Artificial intelligence is the investigation of specialists(agents) that see their general surroundings, frame designs, and settle on choices to accomplish their objectives</b>. Its establishments incorporate arithmetic, rationale, logic, likelihood, phonetics, neuroscience, and choice hypothesis. Numerous fields fall under the umbrella of AI, for example, computer vision, machine learning, NLP(Natural Language Processing) and robotics. </p>
		<p><b>	Machine learning is a subfield of Artificial intelligence</b>. Its goal has been to empower PCs to learn without anyone else. A machine's learning calculation empowers it to distinguish designs in seen information, construct models that clarify the world, and anticipate things without having explicit pre-modified principles and models.</p>`;

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
                <Image source={require('../../../assets/Intro/1.png')} style={{alignSelf: 'center'}} />
                <HTML html={htmlContent2}
                tagsStyles={styles}
                />
                <Image source={require('../../../assets/Intro/2.png')} style={{alignSelf: 'center'}} />
                <HTML html={htmlContent3}
                tagsStyles={styles}
                />
            </Content>
            </Container>
        );
    }
}
