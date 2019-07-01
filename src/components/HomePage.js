import React from 'react';
import { View, Text, Image, ScrollView, Linking, Button, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Header, Body, Title, Right, Icon, Left } from 'native-base';
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')


class HomePage extends React.Component {
	static navigationOptions = ({navigation }) => ({
        header: null,
    });

	render() {
		const { textStyle, viewStyle, headStyle, paraStyle, subHeadStyle } = styles

		return (
			<Container>
		    <View>
		        <Header style={{ backgroundColor: '#f0911e'}} androidStatusBarColor="#eda752">
		          <Left>
						<Icon name='menu' onPress={() => this.props.navigation.openDrawer()} style={{color: 'white', paddingLeft: 0}}/>
					</Left>
		          	<Image source={require('../img/logo.png')} style={{ position: 'relative', height: 35, width: 35, top: 10}} />
		          	<Text style={{alignSelf: 'center', fontSize: 20, color: 'white', fontWeight: 'bold', left: 5}}>Vinay Sahasrabuddhe</Text>
		          <Right>
						<Icon name='person' onPress={() => this.props.navigation.navigate('Contact', {routes: this.props.navigation})} style={{color: 'white', paddingLeft: 0}}/>
					</Right>
		        </Header>
      		</View>   

      		<ScrollView>
            <View>
            <Swiper style={styles.wrapper} height={240}
          onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
          dot={<View style={{ backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
          activeDot={<View style={{ backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
          paginationStyle={{
            bottom: 25, left: 10, right: 10
          }} loop>
          <View style={styles.slide} >
            <Image resizeMode='stretch' style={styles.image} source={require('../img/images/image1.jpg')} />
          </View>
          <View style={styles.slide} >
            <Image resizeMode='stretch' style={styles.image} source={require('../img/images/image2.jpg')} />
          </View>
          <View style={styles.slide} >
            <Image resizeMode='stretch' style={styles.image} source={require('../img/images/image4.jpg')} />
          </View>
          <View style={styles.slide} >
            <Image resizeMode='stretch' style={styles.image} source={require('../img/images/image5.jpg')} />
          </View>
          <View style={styles.slide} >
            <Image resizeMode='stretch' style={styles.image} source={require('../img/images/image6.jpg')} />
          </View>
          <View style={styles.slide} >
            <Image resizeMode='stretch' style={styles.image} source={require('../img/images/image7.jpg')} />
          </View>
          <View style={styles.slide} >
            <Image resizeMode='stretch' style={styles.image} source={require('../img/images/image8.jpg')} />
          </View>
          <View style={styles.slide} >
            <Image resizeMode='stretch' style={styles.image} source={require('../img/images/image9.jpg')} />
          </View>
          <View style={styles.slide} >
            <Image resizeMode='stretch' style={styles.image} source={require('../img/images/image10.jpg')} />
          </View>
          <View style={styles.slide} >
            <Image resizeMode='stretch' style={styles.image} source={require('../img/images/image11.jpg')} />
          </View>
          <View style={styles.slide} >
            <Image resizeMode='stretch' style={styles.image} source={require('../img/images/image13.jpg')} />
          </View>
          
        </Swiper>
            <View style={headStyle}>
                <Text style={textStyle}> About Vinay </Text>
            </View>
            <View style={styles.containerStyle}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'darkgreen', marginLeft: 5,}}> Journey So Far ... </Text>
                <Text style={paraStyle}>A nationalist at heart, a political scholar by profession, and a politician by elevation, Sahasrabuddhe dons many hats at the same time.</Text>
                <Text style={paraStyle}>He is a Member of Parliament, Rajya Sabha from Maharashtra since July 2016. Dr Sahasrabuddhe is the President at Indian Council for Cultural Relations (ICCR). He looks after the Good Governance, Central and State Government Program Coordination and Policy Research Department at Bharatiya Janata Party (BJP) (www.bjp.org) as its National Vice President. Vinay Sahasrabuddhe is also In-Charge of BJP, Madhya Pradesh.</Text>
                <Text style={paraStyle}>Dr Sahasrabuddhe is the Vice P ...</Text>
                <View style={{ alignItems: 'flex-end', marginRight: 10, marginBottom:15 }}>
                    <Button onPress={() => this.props.navigation.navigate('About_Journey So Far')} title="Read More" color="#f6921e" />
                </View>
                
            </View>
            </View>

            <View>
                    <View style={headStyle}>
                        <Text style={textStyle}> Awards </Text>
                    </View>
                    <View style={styles.containerStyle}>
                        <Text style={{ fontSize: 18,  color: 'darkgreen', fontWeight: 'bold', marginLeft: 10, marginRight: 10, marginBottom: 10  }}>2011:</Text>
                        <Text style={{  color: 'black', marginLeft: 10,  marginBottom: 15 }}>Received Pune Nagar Vachan Mandir's Award For My Marathi Book Aahe Loktantra Tarihee Kkk.</Text>

                        <Text style={{ fontSize: 18,  color: 'darkgreen', fontWeight: 'bold', marginLeft: 10, marginRight: 10, marginBottom: 10 }}>2010:</Text>
                        <Text style={{  color: 'black', marginLeft: 10,  marginBottom: 15 }}>Was Invited To Make An Oral Statement At The Special Ses sion of the UN-ECOSOC at UN HQ in New York on the topic Changing the male mindset as a pre-requisite of Gender Justice.</Text>
                        
                        <Text style={{ fontSize: 18,  color: 'darkgreen', fontWeight: 'bold', marginLeft: 10, marginRight: 10, marginBottom: 10 }}>1998:</Text>
                        <Text style={{  color: 'black', marginLeft: 10,  marginBottom: 15 }}>Received the State Government of Maharashtra Award for Best Literary Work, for a Marathi language book (edited) " Nivadak Manoos "1998-99. </Text>
                    
                        <Text style={{ fontSize: 18,  color: 'darkgreen', fontWeight: 'bold', marginLeft: 10, marginRight: 10, marginBottom: 10 }}>1998-99:</Text>
                        <Text style={{  color: 'black', marginLeft: 10,  marginBottom: 15 }}>Was awarded the Rotary Ambassadorial Scholarship of Rotary International. To conduct study on Degeneration of Political Parties and for that purpose Work Visiting Researcher at the University of Illinois, Urbana-Champaign, IL, USA.</Text>
                    
                        <Text style={{ fontSize: 18,  color: 'darkgreen', fontWeight: 'bold', marginLeft: 10, marginRight: 10, marginBottom: 10 }}>1991:</Text>
                        <Text style={{  color: 'black', marginLeft: 10,  marginBottom: 15 }}>Was awarded a fellowship by Down to Earth, a New Delhi based magazine to study and write on the Environmental Impact of Shifting cultivation in the North-East India.</Text>
                    
                        
                    </View>

                </View>

            <View>               
                <View style={headStyle}>
                    <Text style={textStyle}> Books </Text>
                </View>
                <View style={styles.containerStyle}>
                    <View style={{marginBottom:20}}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                        <Image source={require('../img/TheInnovationRepublic.jpg')}
                            style={{ width: 150, height: 200 }}
                        />
                        <View style={{ marginTop: 8, marginBottom: 5 }}>
                                <Button title="Read More" color="#f6921e" onPress={() => Linking.openURL('https://www.amazon.in/Innovation-Republic-Governance-Innovations-Narendra/dp/8183285023/ref=sr_1_1?s=books&ie=UTF8&qid=1522908920&sr=1-1&keywords=the+innovation+republic')} />
                        </View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'darkgreen', marginLeft: 5, textAlign: 'center' }}>The Innovation Republic: Governance Innovations in India Under Narendra Modi </Text>
                    </View>
                    </View>


                    <View style={{ marginBottom: 20 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                            <Image source={require('../img/BeyondABillionBallets.jpg')}
                                style={{ width: 150, height: 200 }}
                            />
                            <View style={{ marginTop: 8, marginBottom: 5 }}>
                                <Button title="Read More" color="#f6921e" onPress={() => Linking.openURL('https://www.amazon.in/Beyond-Billion-Ballots-Vinay-Sahasrabuddhe/dp/8183283225/ref=sr_1_1?ie=UTF8&qid=1463744271&sr=8-1&keywords=%22Beyond+A+Billion+Ballots%22')} />
                            </View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'darkgreen', marginLeft: 5, textAlign: 'center' }}>"Beyond A Billion Ballots" </Text>
                        </View>
                    </View>


                    <View style={{ marginBottom: 20 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                            <Image source={require('../img/NationFirst.jpg')}
                                style={{ width: 150, height: 200 }}
                            />
                            <View style={{ marginTop: 8, marginBottom: 5 }}>
                                <Button title="Read More" color="#f6921e" onPress={() => Linking.openURL('https://www.amazon.in/NATION-FIRST-BAL-APTE/dp/9350485257')} />
                            </View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'darkgreen', marginLeft: 5, textAlign: 'center' }}>"Nation First"</Text>
                        </View>
                    </View>


                <View style={{ alignItems: 'flex-end', marginRight: 10, marginBottom: 15}}>
                    <Button onPress={() => this.props.navigation.navigate('Writings_Books')} title="More Books" color="#f6921e" />
                </View>
                </View>   

                <View>
                    <View style={headStyle}>
                        <Text style={textStyle}> Articles </Text>
                    </View>
                    <View style={styles.containerStyle}>
                        <View style={{ marginTop:10}} >
                            <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 10, marginRight: 10, marginBottom: 10}}>‘माय गव्ह’: सहभागातून स्वामित्व!</Text>
                            <Text style={{ fontSize: 15, color: 'grey', marginLeft: 10, marginRight: 10, marginBottom: 10}}>August 1, 2018</Text>
                            <Text style={{ fontSize: 17,  marginLeft: 10, marginRight: 10, marginBottom: 10 }}>गेल्या चार वर्षांत सुमारे ६३ लाख नोंदणीकृत सदस्य आणि दर आठवडय़ाला सरासरी १० हजार सूचना वा अभिप्राय हे ‘माय गव्ह’चे यशच..</Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'darkgreen', marginRight: 10, textAlign: 'right', marginBottom: 10 }} onPress={() => Linking.openURL('https://www.loksatta.com/vikasache-rajkaran-news/mygov-website-1723285/')}>Read More >></Text>
                        </View>

                        <View style={{ marginTop: 10 }} >
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10, marginRight: 10, marginBottom: 10 }}>खादी-ग्रामोद्योग : शंभर धागे प्रगतीचे!</Text>
                            <Text style={{ fontSize: 15, color: 'grey', marginLeft: 10, marginRight: 10, marginBottom: 10 }}>July 17, 2018</Text>
                            <Text style={{ fontSize: 17, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>गेल्या चार वर्षांतले आणखी एक महत्त्वाचे यश म्हणजे सोलर चरख्याचा प्रयोग.विशेषत: २०१४ नंतर ग्रामीण रोजगारनिर्मिती..</Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'darkgreen', marginRight: 10, textAlign: 'right', marginBottom: 10 }} onPress={() => Linking.openURL('https://www.loksatta.com/vikasache-rajkaran-news/khadi-gram-udyog-innovative-steps-in-the-field-of-rural-employment-1715148/')}>Read More >></Text>
                        </View>

                        <View style={{ alignItems: 'flex-end', marginRight: 10, marginBottom: 15, marginTop:10 }}>
                            <Button onPress={() => this.props.navigation.navigate('Dialogue & Views_Articles')} title="More Articles" color="#f6921e" />
                        </View>

                    </View>
                </View>






                <View>
                    <View style={headStyle}>
                        <Text style={textStyle}> Gallery </Text>
                    </View>
                    <View style={styles.containerStyle}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5, marginBottom:20 }}>
                            <Image source={require('../img/image1.jpg')}
                                style={{ width: 370, height: 350 }}
                            />
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'darkgreen', marginLeft: 5, textAlign: 'center' }}>At Chandigarh, Chaired the first meeting of the newly constituted Regional Advisory Committee of the ICCR Delhi today. This office takes care of over 400 Foreign Students, mainly from Afghanistan who are studying at various institutions in this region.</Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'darkgreen', marginLeft: 5, textAlign: 'center' }}>25 February 2019, Chandigarh</Text>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5, marginBottom: 20 }}>
                            <Image source={require('../img/image2.jpg')}
                                style={{ width: 370, height: 350 }}
                            />
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'darkgreen', marginLeft: 5, textAlign: 'center' }}>At Chandigarh as a part of BJP's campaign #BharatKeMannKiBaat had two great interactions, first with Ex-Servicemen and next with others where very relevant and creative inputs were given for BJP Manifesto 2019.</Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'darkgreen', marginLeft: 5, textAlign: 'center' }}>February 25, 2019, Chandigarh</Text>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5, marginBottom: 20 }}>
                            <Image source={require('../img/image3.jpg')}
                                style={{ width: 370, height: 350 }}
                            />
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'darkgreen', marginLeft: 5, textAlign: 'center' }}>Joined #MeraParivarBhajapaParivar  campaign and hoisted BJP flag in front of our home in Delhi with family and associates. </Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'darkgreen', marginLeft: 5, textAlign: 'center' }}>12 February 2019, New Delhi</Text>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5, marginBottom: 20 }}>
                            <Image source={require('../img/image4.jpg')}
                                style={{ width: 370, height: 350 }}
                            />
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'darkgreen', marginLeft: 5, textAlign: 'center' }}>After joining as Member of Executive Committee of The Nehru Memorial Museum & Library, visited the Inst for the first time to inaugurate exhibition of traditional paintings on Mahatma Gandhi. Creative talent of folk artistes working with Warli, Madhubani and similar folk traditions was really impressive.</Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'darkgreen', marginLeft: 5, textAlign: 'center' }}>January 30, 2019. New Delhi</Text>
                        </View>

                        <View style={{ alignItems: 'flex-end', marginRight: 10, marginBottom: 15 }}>
                            <Button onPress={() => this.props.navigation.navigate('Gallery_Gallery')} title="More Images" color="#f6921e" />
                        </View>

                    </View>
                </View>


                <View>
                    <View style={headStyle}>
                        <Text style={textStyle}> Social Connect </Text>
                    </View>
                    <View style={styles.containerStyle}>

                        <View style={{marginLeft: 25, marginRight: 25, marginBottom: 15, marginTop: 15 }}>
                            <Button title="Twitter" color="#1DA1F2" onPress={() => Linking.openURL('https://twitter.com/vinay1011?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Eprofile%3Avinay1011&ref_url=http%3A%2F%2Fwww.vinaysahasrabuddhe.in%2FHome')} />
                        </View>

                        <View style={{ marginLeft: 25, marginRight: 25, marginBottom: 15, marginTop: 5 }}>
                            <Button title="Facebook" color="#3b5998" onPress={() => Linking.openURL('https://www.facebook.com/vinays57/')}/>
                        </View>

                        <View style={{ marginLeft: 25, marginRight: 25, marginBottom: 15, marginTop: 5 }}>
                            <Button title="Youtube" color="#c4302b" onPress={() => Linking.openURL('https://www.youtube.com/channel/UCFeMuM2PH65nPYyIbumndVQ')} />
                        </View>

                        <View style={{ marginLeft: 25, marginRight: 25, marginBottom: 15, marginTop: 5 }}>
                            <Button title="Instagram" color="purple" onPress={() => Linking.openURL('https://www.instagram.com/vinaysahasrabuddhe')} />
                        </View>
                       
                    </View>
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
        paddingTop: 5,
        marginBottom: 10
    },
    
    textStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: "white"
    },

    headStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#FFA500",
        backgroundColor: "#f0911e",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 15,
        marginBottom: 5,
        paddingBottom: 5
    },

    paraStyle: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },

    container: {
      height: 180
        
    },

    slideContainer: {
        height: 180,
        alignItems: "center",
        justifyContent: "center"
    }, 
    wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  }
};
export default HomePage;