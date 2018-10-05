'use strict'

import React, { Component } from 'react';
import {
	View,
	Image,
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right } from 'native-base';


export default class AboutUs extends Component{
	render(){
		return(
        <Container>
        <View><Header style={{backgroundColor: '#0da5ec'}}>
					<Left>
						<Icon name='menu' onPress={() => this.props.navigation.openDrawer()} style={{color: 'white'}}/>
					</Left>
					<Text style={{alignSelf: 'center', fontSize: 20, color: 'white'}}>Contributors</Text>
					<Right/>
					<Right/>
				</Header>
			</View>
        <Content style={{flex: 1, margin: 10}}>
          <Card style={{margin: 40}}>
            <CardItem cardBody>
              <Image source={require('../../assets/devs/a.png')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../assets/devs/vjti.png')} />
              	<Body style={{flex: 1}}>
              		<Text style={{fontSize: 20, fontWeight: 'bold'}}>Kiran K. Joshi</Text>
              		<Text>Veermata Jijabai Technological Institue</Text>
              	</Body>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem cardBody>
              <Image source={require('../../assets/devs/a.png')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
              <Thumbnail source={require('../../assets/devs/pwc.png')} />
              	<Body style={{flex: 1}}>
              		<Text style={{fontSize: 20, fontWeight: 'bold'}}>Amit Solunke</Text>
              		<Text>PriceWaterhouseCoopers</Text>
              	</Body>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem cardBody>
              <Image source={require('../../assets/devs/a.png')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
              <Thumbnail source={require('../../assets/devs/vjti.png')} />
              	<Body style={{flex: 1}}>
              		<Text style={{fontSize: 20, fontWeight: 'bold'}}>Suyog Arde</Text>
              		<Text>Veermata Jijabai Technological Institue</Text>
              	</Body>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem cardBody>
              <Image source={require('../../assets/devs/a.png')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
              <Thumbnail source={require('../../assets/devs/vjti.png')} />
              	<Body style={{flex: 1}}>
              		<Text style={{fontSize: 20, fontWeight: 'bold'}}>Pranav Mahadik</Text>
              		<Text>Veermata Jijabai Technological Institue</Text>
              	</Body>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem cardBody>
              <Image source={require('../../assets/devs/a.png')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
              <Thumbnail source={require('../../assets/devs/vjti.png')} />
              	<Body style={{flex: 1}}>
              		<Text style={{fontSize: 20, fontWeight: 'bold'}}>Akhilesh Chobey</Text>
              		<Text>Veermata Jijabai Technological Institue</Text>
              	</Body>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem cardBody>
              <Image source={require('../../assets/devs/a.png')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
              <Thumbnail source={require('../../assets/devs/vjti.png')} />
              	<Body style={{flex: 1}}>
              		<Text style={{fontSize: 20, fontWeight: 'bold'}}>Amey More</Text>
              		<Text>Veermata Jijabai Technological Institue</Text>
              	</Body>
              </Left>
            </CardItem>
          </Card>
          
        </Content>
      </Container>
		);
	}
}