import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { Container, Header, Body, Title, Right, Icon, Left } from 'native-base';

class JourneySoFar extends React.Component {
    static navigationOptions = ({navigation }) => ({
        headerTintColor: 'white'
    });
    render(){
    const { textStyle, viewStyle, headStyle, paraStyle, subHeadStyle } = styles;

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
        <ScrollView style={{ backgroundColor: 'white', bottom: 5}}>
            <View>
                <Image source={require('../../img/drawerHead.jpg')}
                style={{ width: undefined, height: 210, marginLeft: 10,marginTop:10, right: 5 }}
                />
            </View>
        <View style={styles.containerStyle}>
            <View style={headStyle}>
              <Text style={textStyle}> Journey So Far </Text>
            </View>
            <View>
                <Text style={paraStyle}>A nationalist at heart, a political scholar by profession, and a politician by elevation, Sahasrabuddhe dons many hats at the same time.</Text>
                <Text style={paraStyle}>He is a Member of Parliament, Rajya Sabha from Maharashtra since July 2016. Dr Sahasrabuddhe is the President at Indian Council for Cultural Relations (ICCR). He looks after the Good Governance, Central and State Government Program Coordination and Policy Research Department at Bharatiya Janata Party (BJP) (www.bjp.org) as its National Vice President. Vinay Sahasrabuddhe is also In-Charge of BJP, Madhya Pradesh.</Text>
                <Text style={paraStyle}>He leads the Public Policy Research Centre (www.pprc.in) promoted by the Bharatiya Janata Party, which provides insightful commentaries and analysis on a wide variety of developmental and governance issues; confronting the nation at large.</Text>
                <Text style={paraStyle}>A doctorate in Political Science from University of Mumbai, Dr Sahasrabuddhe had a long stint at the University of Mumbai as Member of Senate and Management Council, in 1990's.</Text>
                <Text style={subHeadStyle}>Early Years</Text>
                <Text style={paraStyle}>Born on November 10, 1957 at Nasik in a middle-class family, Vinay had his schooling initially in Dhule, the native place of Sahasrabuddhes and later at Trimbak Vidya Mandir near Nasik and eventually at Nasik itself. While in Std 4, through a competitive examination, Vinay was selected for Govt Public School, Nasik (Shaskiya Vidya Niketan), an innovative chain of schools for grooming talented students from rural areas. From Std 5 to Std 11, Vinay study at this residential school. It is there he learnt the initial lessons of leadership and creativity. His innate talent and skills in activities like public speaking, theatre, writing and journalism helped him shine in several school activities. He credits Dr B B Singam, who worked as Principal of his school for many years, and also Vasant Dongargaonkar, M M Nalnikar and other teachers for their contribution in his grooming.</Text>
                <Text style={subHeadStyle}>Years in ABVP</Text>
                <Text style={paraStyle}>Vinay Sahasrabuddhe had his college education in Garware College, Pune, S P College, Pune and later at Ramnarayan Ruia College, Mumbai. He started his career in public life with Akhil Bharatiya Vidyarthi Parishad (ABVP). He became a member of ABVP in 1974 immediately after joining Degree College in Pune. Starting as Joint Office Secretary of Pune branch, he later served as Secretary of Mumbai ABVP (1980-81), Jt.Organising Secretary, Mumbai (1981-83), Organising Secretary of SEIL Project of ABVP (1983-85), National Secretary (1984-87) and later General Secretary of SEIL (1990-2000). He also shouldered the responsibility of Chhatra Shakti Magazine for some years. Between1980-85, Vinay Sahasrabuddhe worked as a whole-timer of ABVP.</Text>
                <Text style={paraStyle}>In 1975, after the imposition of the draconian rule of emergency as ABVP activist, Vinay Sahasrabuddhe offered Sattyagraha (silent public protest violating law followed by arrest). He was behind the bars at Yerwada Prison near Pune for about 45 days. Later, in 1983 he was a part of mass protest against the ban on an ABVP rally at Guwahati, in support of the agitating students of Assam, fighting for the detection and deportation of Bangladeshi infiltrators followed by the deletion of their names.</Text>
                <Text style={paraStyle}>While pursuing his post-graduation (1978-80), Vinay Sahasrabuddhe worked with India News and Features Alliance (INFA), a features service by Inder Jit; as its Mumbai representative.</Text>
                <Text style={subHeadStyle}>Institution Building</Text>
                <Text style={paraStyle}>Later he joined Rambhau Mhalgi Prabodhini as its principal functionary in 1988 after brief stints in media (Sub-Editor of Mid-Day, Mumbai) as well as corporate sector (PRO of Camlin Ltd). He was elected as a Member of Senate of the University of Mumbai where he worked for over 18 long years. All his efforts were directed towards strengthening the institutional mechanism of the functioning of University of Mumbai.</Text>
                <Text style={paraStyle}>University of Mumbai is one of India’s oldest universities. Established in 1857, this University has always remained a key centre of student activism. Vinay Sahasrabuddhe completed his post-graduation from this University in 1981. Later, in 2009, he was awarded Ph.D. in Arts (Politics) by the same University for his study on institutional decline of political parties in India.</Text>
                <Text style={paraStyle}>In 1987, Vinay Sahasrabuddhe successfully contested elections to the Mumbai University Senate from Registered Graduates constituency and served on the body for two consecutive terms (1987-1994 and 1994-2000) later he was also elected to the same body from Affiliated Institutions’ Constituency through which he served on the body till 2005. Between 1987 and 1990, Senate sent him twice to the Executive Council of the University. A member of the top decision-making body of the varsity, Vinay Sahasrabuddhe worked on Finance Committee, Library Committee, Extra-Mural Studies Board and Annual Report Committee besides several Local Inquiry Committees.</Text>
                <Text style={paraStyle}>As Member of Senate and Management Council, Vinay Sahasrabuddhe unearthed several malpractices while striving for financial discipline and transparency as well as protection of functional autonomy of the varsity. In 1991, he conducted a motivational training programme for University Officials and employees. It was his efforts that converted University Club House; an underutilized establishment of the varsity into a Vidyapeeth Vidyarthi Bhavan, a hub of extra-curricular activities for the students. He also mooted the idea of Academic Audit of University academic staff. Years later, in 1998 his efforts for greater decentralization of university administration yielded results with the establishment of Ratnagiri Sub-Centre of the University of Mumbai.</Text>
                <Text style={paraStyle}>One of the most pro-active members of senate; Vinay Sahasrabuddhe always stood-out as an impressive orator. In a short span, he became known for effectively voicing of concerns for the institutional decline of University facing innumerable challenges like violation of rules-regulations, corruption as well as mismanagement.</Text>
                <Text style={subHeadStyle}>Honorary Roles</Text>
                <Text style={paraStyle}>In 1997, Vinay Sahasrabuddhe was appointed Member of the Board of Governors at YASHADA or Yashwantrao Chavan Academy for Development Administration and he worked on this position as till 1999. During these three years, he introduced the idea of conducting capacity building programmes for University Officials. He had worked on various bodies of University of Mumbai and this experience gave him an insight into the urgent need for some effective efforts for building the capacities of those who are administering Universities. The idea was immediately accepted and Vinay Sahasrabuddhe was requested to act as Course Director for the first-of-its-type training course held at YASHADA in 1997.</Text>
                <Text style={paraStyle}>In 2003 hIn 2014, Vinay was nominated by Pune based IT major Persistent Co as a social scientist on its Research and Innovation Council and he continues to be its member.e was appointed as an expert, non-official member on the Board of Governors of the Sardar Patel Institute of Public Administration, (SPIPA) Ahmedabad. In 2013 Vinay Sahasrabuddhe was elected to The Asiatic Society (of Mumbai) -- over 200-year-old prestigious library and knowledge centre-- as its Vice President. He shouldered this responsibility for two years, till 2015.</Text>
                <Text style={paraStyle}>In 2014, Vinay was nominated by Pune based IT major Persistent Co as a social scientist on its Research and Innovation Council and he continues to be its member.</Text>
                <Text style={paraStyle}>In 2015, Vinay was appointed as Chairman of a committee to prepare a plan for setting up a resource centre for artisans and farmers, to be converted into an Artisan’s University in Vidarbha by the Govt of Maharashtra.</Text>
                <Text style={subHeadStyle}>Researcher and author</Text>
                <Text style={paraStyle}>1997 saw Vinay Sahasrabuddhe’s selection as Rotary Ambassadorial Scholar for 1998-99 to pursue supervised study at the University of Illinois (UIUC) at Urbana-Champaign. He was a Visiting Researcher at the UIUC for about ten months.</Text>
                <Text style={paraStyle}>Passionate about finding out various ways and means of making the democratic governance deliver, Vinay Sahasrabuddhe had long back started reading about political parties and their evolution as a key democratic institution. His scholarly meanderings into the much relevant thematic of “Political Parties as Victims of Populism and Electoral Compulsions; A Quest for Systemic Solutions - With special reference to India” got recognized in the form of a Doctoral degree from University of Mumbai in 2009. Dr Maneesha Tikekar of the SIES College, Mumbai was his research guide.</Text>
                <Text style={paraStyle}>Vinay Sahasrabuddhe has a total of nine books to his credit. He writes three of them while he is the editor of other six.</Text>
                <Text style={paraStyle}>His book “Beyond A Billion Ballots”, is based on his Ph.D. thesis and was published at the hands of Shri Narendra Modi in June 2013. This book unfurls the reforms agenda for liberating political parties from the trap of populist politics through a set of key systemic changes in India’s democratic infrastructure. Coming out from the keen observations of a trainer of political practitioners, this work is being considered as seminal having the potency to catalyze Indian Republic 2.0.</Text>
                <Text style={paraStyle}>A compilation of his selected articles on issues concerning democratic governance, in Marathi; named “Aahe Lok-tantra Tarihee” (In spite of Democracy) was published in 2011. His first Marathi book Ekaki Purvanchal (Isolated North-East India) was published in 1988 and that happened to be the first Marathi book, analyzing the complex socio-political conditions in the North-East India. He co-edited Nivadak Manoos (Selected articles from Weekly Manoos) a compilation of articles previously published in celebrated Marathi weekly Manoos. Published in 1999, this volume later received Govt Maharashtra Award for Best Literary Work.</Text>
                <Text style={subHeadStyle}>Columnist</Text>
                <Text style={paraStyle}>His commentaries to many English and Marathi publications are most sought after for their deeper insights replete with simplistic redressals of complex issues. He contributed columns to several Marathi journals like –</Text>
                <Text style={paraStyle}>Maharashtra Times (1976-77)</Text>
                <Text style={paraStyle}>Manoos Weekly (1979-80)</Text>
                <Text style={paraStyle}>Aaj Dinank (1997-98)</Text>
                <Text style={paraStyle}>Loksatta (2000)</Text>
                <Text style={paraStyle}>Aple Mahanagar (2002-2003)</Text>
                <Text style={paraStyle}>Tarun Bharat, Nagpur (2009)</Text>
                <Text style={paraStyle}>Vinay Sahasrabuddhe’s upbringing as a social activist evolved under the guidance of the leading lights of ABVP like Prof Yashwantrao Kelkar, Prof Bal Apte, Dr Ashok Modak and Shri Madan Das Ji. While in RMP, he was lucky to work with and seek guidance from Vasantrao Patwardhan and Pramod Mahajan. In so far as his journalistic writings are concerned, he is deeply influenced by senior editor and noted thinker S. G. Majgaoinkar and later Dr Aroon Tikekar. In BJP, Nitin Gadkari made him his Political Associate during his President-ship and finally he earned a place in Amit Shah-team as National Vice President.</Text>
                <Text style={paraStyle}>Even after treading a thousand thematics, his humility and heartiness mesmerize one and all. This is probably what defines Vinay Sahasrabuddhe in one sentence.</Text>
                <Text style={paraStyle}>Contributed by Ravindra Sathe (Executive Director of RMP and a close associate of Vinay Sahasrabuddhe since 1992)</Text>
                {/*<Text style={paraStyle}>       </Text>
                <Text style={paraStyle}>       </Text>*/}
            </View>
            </View>
        </ScrollView>
        </Container>
    );
}
}

const styles = {
    containerStyle:{
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#FFA500",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 15,
        paddingTop: 5,
        backgroundColor: 'white'

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
        marginBottom: 15,
        paddingBottom:10
    },

    paraStyle: {
        marginLeft: 10,
        marginRight:10,
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

export default JourneySoFar;
