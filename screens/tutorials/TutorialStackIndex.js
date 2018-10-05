import React ,{ Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import TutorialList from './TutorialList';
import Introduction from './introduction/Introduction';
import SL1List from './supervised-learning-1/SL1List';
import SL1 from './supervised-learning-1/SL1';
import LinearReg from './supervised-learning-1/LinearReg';
import OLS from './supervised-learning-1/OLS';
import Gradient from './supervised-learning-1/Gradient';
import SL2List from './supervised-learning-2/SL2List';
import Logistic from './supervised-learning-2/Logistic';
import SVM from './supervised-learning-2/SVM';
import SL3List from './supervised-learning-3/SL3List';
import KNN from './supervised-learning-3/KNN';
import DecisionTree from './supervised-learning-3/DecisionTree';
import USList from './unsupervised-learning/USList';
import USL from './unsupervised-learning/USL';
import Cluster from './unsupervised-learning/cluster';
import ClusterM from './unsupervised-learning/clusteringmethods';
import KCluster from './unsupervised-learning/kclustering';
import RList from './reinforcement-learning/RList';
import RL from './reinforcement-learning/RL';
import Drl from './reinforcement-learning/Drl';
import MDP from './reinforcement-learning//mdp';
import Pl from './reinforcement-learning/Policy';
import Ql from './reinforcement-learning/qlearning';
import Vlp from './reinforcement-learning/Vlp';

const TutorialStackIndex = createStackNavigator({
	TutorialList: TutorialList,
	Introduction: Introduction,		
	SL1List: SL1List,
	SL1: SL1,		
	LinearReg: LinearReg,
	OLS: OLS,
	Gradient: Gradient,
	SL2List: SL2List,
	Logistic: Logistic,
	SVM: SVM,
	SL3List: SL3List,
	KNN: KNN,
	DecisionTree: DecisionTree,
	USList: USList,
	USL: USL,
	Cluster: Cluster,
	ClusterM: ClusterM,
	KCluster: KCluster,
	RList: RList,
	RL: RL,
	Drl: Drl,
	MDP: MDP,
	Pl: Pl,
	Ql: Ql,
	Vlp: Vlp
},{
	intialRoute: 'TutorialList',
	transitionConfig: getSlideFromRightTransition
});

export default TutorialStackIndex;