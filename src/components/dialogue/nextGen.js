import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native';

class NextGen extends Component{
    render(){
      var jsCode = `document.getElementById('touch-menu').style.display = "none";
      document.getElementById('footer').style.display = "none";`;
        return (
        	<View style={{ flex: 1}}>
            <WebView
       		source={{uri: 'http://www.vinaysahasrabuddhe.in/NextGen'}}
       		injectedJavaScript={jsCode}
       		mixedContentMode={'compatibility'}
       		javaScriptEnabledAndroid={true}
      		/>
      		</View>
        );
    }
}

export default NextGen;