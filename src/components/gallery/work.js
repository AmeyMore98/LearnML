import React, { Component } from 'react';
import { StyleSheet, Text} from 'react-native';
import {WebView,Image} from 'react-native';
import { Container, Header, Body, Title, Right, Icon, Left } from 'native-base';
import {View} from 'react-native-animatable';

class Work extends Component{
    render(){
      var jsCode = `document.getElementById('header').style.display = "none";
      document.getElementById('footer').style.display = "none";`;
        return (
          <Container>
      <Header style={{ backgroundColor: '#f0911e'}} androidStatusBarColor="#eda752">
                 <Left>
                        <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} style={{color: 'white'}}/>
                    </Left>
                    <Image source={require('../../img/logo.png')} style={{ height: 35, width: 35, top: 10}} />
                <Text style={{alignSelf: 'center', fontSize: 20, color: 'white', fontWeight: 'bold', left: 5}}>Vinay Sahasrabuddhe</Text>
              <Right/>
     </Header>
          <View style={{ flex: 1}} animation="fadeIn" delay={2000}>
            <WebView
       		source={{uri: 'http://www.vinaysahasrabuddhe.in/WorkAtGlance'}}
       		injectedJavaScript={jsCode}
       		mixedContentMode={'compatibility'}
       		javaScriptEnabledAndroid={true}
      		/>
      		</View>
          </Container>
        );
    }
}

export default Work;