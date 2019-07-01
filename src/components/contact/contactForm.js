import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native';
import * as Animatable from 'react-native-animatable';
class ContactForm extends Component{
    static navigationOptions = ({navigation }) => ({
      title: "Contact",
        headerStyle: {
          backgroundColor: '#f0911e', 
        },
        headerTitleStyle: {
          color: 'white'
        },
        headerTintColor: 'white'
    });

    render(){
      var jsCode = `document.getElementById('header').style.display = "none";
      document.getElementById('footer').style.display = "none";`;
        return (
        	<Animatable.View style={{ flex: 1}} animation="fadeIn" delay={3000}>
            <WebView
       		source={{uri: 'http://www.vinaysahasrabuddhe.in/Contact'}}
       		injectedJavaScript={jsCode}
       		mixedContentMode={'compatibility'}
       		javaScriptEnabledAndroid={true}
      		/>
      		</Animatable.View>
        );
    }
}

export default ContactForm;