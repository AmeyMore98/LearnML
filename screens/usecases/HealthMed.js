import React, { Component } from "react";
import { Container, Header, Content, Accordion } from "native-base";
const dataArray = [
  { title: "Disease Identification/Diagnosis", content: "The idea of a biologist working with information scientists and computationalists in order to find various patterns and perform analysis to improve the level of medication." },
  { title: "Personalized Treatment/Behavioral Modification", content: "Personalizing individual heath and treatment by pairing individual health with predictive analytics. Supervised learning is used for this purpose, which allows physicians to select from more limited sets of diagnoses. This would allow routine health check-up and early detection depending on the data." },
  { title: "Drug Discovery/Manufacturing", content: "The use of machine learning in preliminary (early-stage) drug discovery has the potential for various uses, from initial screening of drug compounds to predicted success rate based on biological factors. Precision medicine, which involves identifying mechanisms for “multifactorial” diseases and in turn alternative paths for therapy, seems to be the frontier in this space." },
  { title: "Clinical Trial Research", content: "Applying advanced predictive analytics in identifying candidates for clinical trials could draw on a much wider range of data than at present, including social media and doctor visits, for example, as well as genetic information when looking to target specific populations; this would result in smaller, quicker, and less expensive trials overall." },
  { title: "Real Time Monitoring", content: "ML can also be used for remote monitoring and real-time data access for increased safety; for example, monitoring biological and other signals for any sign of harm or death to participants." },
  { title: "Radiology and Radiotherapy", content: "To develop machine learning algorithms capable of detecting differences in healthy and cancerous tissues to help improve radiation treatments and increase accuracy in radiotherapy planning." },
  { title: "Smart Electronic Health Records", content: "Document classification (sorting patient queries via email, for example) using support vector machines, and optical character recognition (transforming cursive or other sketched handwriting into digitized characters), are both essential ML-based technologies in helping advance the collection and digitization of electronic health information" },
  { title: "Epidemic Outbreak Prediction", content: "ML and AI technologies are also being applied to monitoring and predicting epidemic outbreaks around the world, based on data collected from satellites, historical information on the web, real-time social media updates, and other sources. Support vector machines and artificial neural networks  can be used, for example, to predict malaria outbreaks, taking into account data such as temperature, average monthly rainfall, total number of positive cases, and other data points." },
  
];
export default class HealthMed extends Component {
  static navigationOptions = ({navigation }) => ({
    title: "Healthcare & Medicine",
      headerStyle: {
        backgroundColor: '#0da5ec', 
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white'
  });

  render() {
    return (
      <Container>
        <Content padder>
          <Accordion
            dataArray={dataArray}
            headerStyle={{ backgroundColor: "#b7daf8" }}
            contentStyle={{ backgroundColor: "white" }}
          />
        </Content>
      </Container>
    );
  }
}