import JourneySoFar from './components/about/JourneySoFar';
import Family from './components/about/Family';
import RepresentationOverseas from './components/about/RepresentationOverseas';
import Milestones from './components/about/Milestones';
import Parliamentarian from './components/about/Parliamentarian';
import Bjp from './components/institutions/Bjp';
import Rmp from './components/institutions/Rmp';
import Pprc from './components/institutions/Pprc';
import Isrn from './components/institutions/Isrn';
import Academic from './components/writings/Academic.js';
import Books from './components/writings/Books.js';
import BookRevs from './components/writings/BookRevs.js';
import Articles from './components/dialogue/articles.js';
import BLog from './components/dialogue/blog.js';
import Archives from './components/dialogue/archives.js';
import Video from './components/gallery/video.js';
import Gallery from './components/gallery/gallery.js';
import SpeInt from './components/gallery/speInt.js';
import Press from './components/gallery/press.js';
import Work from './components/gallery/work.js';
import ContactForm from './components/contact/contactForm';

import { evaluateChildDrawerTitle } from './utils';

export default {
	'About_Journey So Far': {
		screen: JourneySoFar,
		navigationOptions: evaluateChildDrawerTitle,
	},
	About_Family: {
		screen: Family,
		navigationOptions: evaluateChildDrawerTitle,
	},	
	'About_Representation Overseas': {
		screen: RepresentationOverseas,
		navigationOptions: evaluateChildDrawerTitle,
	},
	About_Milestones: {
		screen: Milestones,
		navigationOptions: evaluateChildDrawerTitle,
	},
	About_Parliamentarian: {
		screen: Parliamentarian,
		navigationOptions: evaluateChildDrawerTitle,
	},
	Institutions_BJP: {
		screen: Bjp,
		navigationOptions: evaluateChildDrawerTitle,
	},	
	Institutions_RMP: {
		screen: Rmp,
		navigationOptions: evaluateChildDrawerTitle,
	},
	Institutions_PPRC: {
		screen: Pprc,
		navigationOptions: evaluateChildDrawerTitle,
	},
	Institutions_ISRN: {
		screen: Isrn,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'Writings_Academic Papers': {
		screen: Academic,
		navigationOptions: evaluateChildDrawerTitle,
	},
	Writings_Books: {
		screen: Books,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'Writings_Book Reviews': {
		screen: BookRevs,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'Dialogue & Views_Articles': {
		screen: Articles,
		navigationOptions: evaluateChildDrawerTitle,
	},
	// 'Dialogue & Views_Next Gen. Dialogue': {
	// 	screen: NextGen,
	// 	navigationOptions: evaluateChildDrawerTitle,
	// },
	'Dialogue & Views_Blog': {
		screen: BLog,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'Dialogue & Views_Archive': {
		screen: Archives,
		navigationOptions: evaluateChildDrawerTitle,
	},
	Gallery_Video: {
		screen: Video,
		navigationOptions: evaluateChildDrawerTitle,
	},
	Gallery_Gallery: {
		screen: Gallery,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'Gallery_Speeches/Interviews': {
		screen: SpeInt,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'Gallery_Press Release': {
		screen: Press,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'Gallery_Work At a Glance': {
		screen: Work,
		navigationOptions: evaluateChildDrawerTitle,
	},
};