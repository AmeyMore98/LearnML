import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { Container, Header, Body, Title, Right, Icon, Left } from 'native-base';

class Ro extends React.Component {
    static navigationOptions = ({navigation }) => ({
        headerTintColor: 'white'
    });
    render() {
    const { textStyle, viewStyle, headStyle, paraStyle, subHeadStyle, dateStyle, hr } = styles
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
        <ScrollView style={{ backgroundColor: 'white', bottom: 5 }} >
            <View>
                <Image source={require('../../img/map.png')}
                    style={{ width: 410, height: 200, alignContent: "center", left:5, right:10, top:15, bottom:10 }}
                />
            </View>
            <View style={styles.containerStyle}>
                <View style={headStyle}>
                    <Text style={textStyle}> Representation Overseas </Text>
                </View>
                <View>
                    <Text style={subHeadStyle}>China</Text>
                    <Text style={dateStyle}>Date :October 2015</Text>
                    <Text style={paraStyle}>Represented BJP at the Special Convention on One-Block, One-Road (OBOR) organized by the International Conference of Asian Political Parties (I-CAP) at Beijing, China.</Text>
                    <View style={hr} />
                    <Text style={subHeadStyle}>Malaysia</Text>
                    <Text style={dateStyle}>Date :November 2013</Text>
                    <Text style={paraStyle}>Presented a paper at the Second International Conference on Elections and Democracy at University of Malaysia, Sarawak, at Kuching, Malaysia on Good Governance and Delivering Democracy: Elections are not enough! (Learnings from the situations after Rose Revolution, Arab Spring and anti-corruption agitations in India.)</Text>
                    <View style={hr} />
                    <Text style={subHeadStyle}>Azerbaijan</Text>
                    <Text style={dateStyle}>Date :November 2012</Text>
                    <Text style={paraStyle}>Represented BJP at the Annual Convention of Intl. Conference of Asian Political Parties (I-CAP) held at Baku, Azerbaijan</Text>
                    <View style={hr} />
                    <Text style={subHeadStyle}>United States</Text>
                    <Text style={dateStyle}>Date :January 2011</Text>
                    <Text style={paraStyle}>Represented RMP at the UN-ECOSOC High Level Segment Meeting at UN Head Quarters at New York, USA on Women Empowerment and made an oral statement mainly focusing on Changing Male Mindset as a pre-requisite of Women Empowerment.</Text>
                    <View style={hr} />
                    <Text style={subHeadStyle}>China</Text>
                    <Text style={dateStyle}>Date :January 2011</Text>
                    <Text style={paraStyle}>Represented BJP as a member of an official delegation to China, on invitation from the Communist Party of China and visited Beijing, Shanghai and Guangzhou.</Text>
                    <View style={hr} />
                    <Text style={subHeadStyle}>Canada</Text>
                    <Text style={dateStyle}>Date :October 2008</Text>
                    <Text style={paraStyle}>Read a paper on Political parties as Voluntary Social Service Organisations: Alternative Processes of Recruitment for Quality Participation in Political Parties in India the International Conference on Democracy, Learning by Doing organised by the Transformative Learning Centre University of Toronto, Toronto, Canada.</Text>
                    <View style={hr} />
                    <Text style={subHeadStyle}>Taiwan</Text>
                    <Text style={dateStyle}>Date :March 2008</Text>
                    <Text style={paraStyle}>Represented BJP in an official delegation to Taiwan on the invitation of the Govt of Taiwan.</Text>
                    <View style={hr} />
                    <Text style={subHeadStyle}>United States</Text>
                    <Text style={dateStyle}>Date :October 2005</Text>
                    <Text style={paraStyle}>A presentation on Strategies for Human Resources Development of social workers in the NRI community USA. At the Human Empowerment Conference held at Houston TX, USA also conducted a mock-training session.</Text>
                    <View style={hr} />
                    <Text style={subHeadStyle}>Bosnia and Herzegovina</Text>
                    <Text style={dateStyle}>Date :July 2004</Text>
                    <Text style={paraStyle}>Was selected to present a paper on Democracy, Nationalism and Identity: The Indian Experience the 7th International Seminar on Democracy and Human Rights in Multi-Ethnic Societies, organised by the Institute for Strengthening Democracy in Bosnia, Konjic, Bosnia.</Text>
                    <View style={hr} />
                    <Text style={subHeadStyle}>Israel</Text>
                    <Text style={dateStyle}>Date :November 2002</Text>
                    <Text style={paraStyle}>Represented RMP at a Training Seminar on Educational Planning, held at Jerusalem, Israel by MASHAV, a Ministry of External Affairs, Govt. of Israel outfit for International Co-operation, in December 2002.</Text>
                    <View style={hr} />
                    <Text style={subHeadStyle}>Afghanistan</Text>
                    <Text style={dateStyle}>Date :April 2002</Text>
                    <Text style={paraStyle}>Led a delegation of Indian Voluntary Organisations to Afghanistan.</Text>
                    <View style={hr} />
                    <Text style={subHeadStyle}>Austria</Text>
                    <Text style={dateStyle}>Date :September 2001</Text>
                    <Text style={paraStyle}>Participated in the Salzburg Seminar as a Fellow of the Salzburg Seminar session on Local and Community Leadership: Looking Within held at Salzburg, Austria.</Text>
                    <View style={hr} />
                    <Text style={subHeadStyle}>Turkey</Text>
                    <Text style={dateStyle}>Date :June 2001</Text>
                    <Text style={paraStyle}>Participated in the International Leadership Forum, held at Istanbul in Turkey, organised by the International Institute of Leadership and Public Affairs (IILPA) of the Bagcheshehir University at Istanbul, Turkey.</Text>
                    <View style={hr} />
                    <Text style={subHeadStyle}>Austria</Text>
                    <Text style={dateStyle}>Date :June 2001</Text>
                    <Text style={paraStyle}>Was invited as Fellow the Salzburg Seminar session 388 on Sustaining Democracy in the Modern World at Salzburg, Austria in June 2001.</Text>
                    <View style={hr} />
                    <Text style={subHeadStyle}>United States</Text>
                    <Text style={dateStyle}>Date :January 1999</Text>
                    <Text style={paraStyle}>Made a presentation on Identity Politics in India at the South Asian Studies Program of the University of Illinois, Urbana-Champaign, IL, USA.</Text>
                    <View style={hr} />
                    <Text style={subHeadStyle}>United States</Text>
                    <Text style={dateStyle}>Date :October 1998</Text>
                    <Text style={paraStyle}>Made a presentation on Empowering Women: the Experiment of Reserved Seats for Women in Municipal Corporations in Maharashtra at the Women in International development Program of the University of Illinois, Urbana-Champaign, IL, USA</Text>
                    <View style={hr} />
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
        paddingBottom: 10,
        justifyContent: 'space-between'

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
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        fontSize: 20,
        fontWeight: 'bold',
      
    },
    dateStyle: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15,
        fontWeight: 'bold',
        fontSize: 15
    },

    hr:{
        borderBottomColor: '#FFA500',
        borderBottomWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 5
    }

};

export default Ro;

