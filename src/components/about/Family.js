import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { Container, Header, Body, Title, Right, Icon, Left } from 'native-base';

class Fam extends React.Component {
    static navigationOptions = ({navigation }) => ({
        headerTintColor: 'white'
    });
    render() {
    const { textStyle, viewStyle, headStyle, paraStyle, subHeadStyle } = styles
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
        <ScrollView style={{ backgroundColor: 'white', bottom: 5}} > 
            <View>
                <Image source={require('../../img/drawerHead.jpg')}
                style={{ width: undefined, height: 210, marginLeft: 10,marginTop:10, right: 5 }}
                />
            </View>
            <View style={styles.containerStyle}>
                <View style={headStyle}>
                    <Text style={textStyle}> Family </Text>
                </View>
                <View>
                    <Text style={paraStyle}>Vinay Sahasrabuddhe was born a middle-class family, based out of Dhule in North Maharashtra. His father Prabhakar Sahasrabuddhe worked with Khadi and Village Industries Commission and retired as In-Charge Principal of KVIC’s Training Centre at Bengeri, Hubli in Karnatak. His mother, Sudha Sahasrabuddhe served as Montessori Teacher for a while at KVIC’s Training Centre at Trimbak Vidya Mandir Colony near Nasik. Vinay Sahasrabuddhe has an elder brother (Vishwas Sahasrabuddhe) and two elder sisters (Anuradha Abhyankar and Sheela Soman).</Text>
                    <Text style={paraStyle}>Nayana Sahasrabuddhe is Vinay Sahasrabuddhe’s better half. Originally from Ratnagiri, Nayana is a post-graduate (M.A.) in English literature. A banker by profession, Nayana is the Chief Manager at Bharatiya Mahila Bank at its head office in Delhi. Nayana too was a student activist during her student days, associated with ABVP. Later, she also became National President of Bharatiya Stree Shakti, a women organization mainly working for women empowerment and on gender issues. Currently, Nayana is the Vice-President of Bharatiya Stree Shakti. Ashay, son of Vinay and Nayana is an MA in electronic media, pursuing doctoral studies. He also runs a start-up company engaged in film-making.</Text>
                </View>
            </View>
        </ScrollView>
        </Container>
    );
}
}

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#FFA500",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 15,
        marginBottom: 15,
        paddingTop: 5,
        paddingBottom: 10

    },
    textStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "white"
    },

    headStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#FFA500",
        shadowColor: "#000",
        backgroundColor: "#FFA500",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        marginBottom: 10
    },

    paraStyle: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },

    subHeadStyle: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic'
    }

};

export default Fam;
