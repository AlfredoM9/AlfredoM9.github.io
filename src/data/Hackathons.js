import phone from "../assets/images/projects/phone.svg"
import dog from "../assets/images/projects/dog.png"
export default [
	{
		id: 1,
		title: "Canine Assistant (JP Morgan Code for Good)",
		icon: dog,
		description:
			"Developed a web app using HTML, CSS, and JavaScript for a non-profit organization called Canine Assistants. The purpose of the web app was for the dog to communicate with its owner and for help if needed. Me and my team decided to have binary questions displayed based off of two images. As the dog touches the screen visual, auditory, and text alerts are sent to the device and external devices. For example, one image, if clicked, calls a specific number through Skype to alert other people that the dog’s owner is in danger. However, other images can be meant for the necessities of the dog.",
		githubPath: "https://github.com/AlfredoM9/Hackathons/tree/master/JP%20Morgan%20Code%20For%20Good",
		demoPath: null,
		year: "2019",
		techUsed: "HTML, CSS, JavaScript"
	},
	{
		id: 2,
		title: "Events Mobile App (HackUTD VI)",
		icon: phone,
		description:
			"Programmed a mobile app in Java for users to register events that could be intended for students, student organizations, professionals, etc. This would be visually displayed to the people you are connected with. In addition, Firebase was used to make a user login using their credentials using Firebase’s Authentication and to store the information of the events. This data was stored in the Realtime database of Firebase and could be retrieved at any time. ",
		githubPath: "https://github.com/AlfredoM9/Hackathons/tree/master/Events%20App",
		demoPath: null,
		year: "2019",
		techUsed: "Android Studio, Java, Firebase"
	},
];
