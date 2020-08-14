import inNout from "../assets/images/experience/innout.png";
import utd from "../assets/images/experience/UT_Dallas_tex_rev.png";
import chase from "../assets/images/experience/Chase_Logo.png";

export default [
	{
		id: 5,
		name: "JP Morgan Chase & Co",
		designation: "Software Engineer Intern",
		dated: "July 2020 - Aug 2020",
		logo: chase,
		companyLink: "https://www.jpmorganchase.com/",
		description:
			"<p>Throughout my 5 weeks as an intern with JPMorgan Chase & Co. I learned a lot of hard skills and soft skills. The internship was divided into two parts, an individual component, and a team component. In the individual aspect, I completed a module each week covering different scenarios that JPMC faces each day. For example, in the first module, I completed a Java program that alerts the user whenever CPU utilization, memory utilization, or disk utilization over exceeds certain limits. In the second module, I completed two python programs to stimulate how economic sanctions work. The two programs communicated via Kafka and one of the programs generated random names using a REST API and stored them into a database file using SQLite3. For module 3, I used Gradle to build test cases and a REST API to communicate with another program. Module 4 was using JPMC’s open-source Perspective tool to graph the correlation between stocks. <br/><br/> In the team component, we created an angular project with Google's Firebase to help a non-profit organization called Community Learning Center (CLC) to better recruit and engage the youth in their courses/programs. The solution was a gamified way of sharing links on different social media platforms, and as users share, they accumulate points. These points can be seen in the app and CLC can use the points to determine winners for prizes. In the front end, I created a custom angular material theme to match CLC’s colors. I created the UI for the sign-up and the login page using angular material. In addition, I helped on the home page to match the styling of CLC’s website and to match the UI of the login and signup. In the backend, I created the functionality to create the user on the Firebase database upon sign-up. I also created the functionality for the user id to be passed between components, so any component can access the Firebase database. In addition, I added functions to get user information from the database so the home page can display the user’s level, points, name, etc. Another function that I created was updating the points in the database as the user shares CLC on their social media platform. <br/><br/> Besides all the technical skills that I learned; I also learned a lot of soft skills. I learned about agile and how to deliver efficient standups with the practice of our daily standups and the importance of retrospectives. I learned how to prepare presentations and present virtually to a large audience. I learned how to communicate efficiently with teammates and use tools such as a Kanban board and other means to clearly indicate your progress. I learned how to network with executive directors and vice presidents and much much more.</p>"

	},
	{
		id: 4,
		name: "University of Texas at Dallas - CS Outreach Program",
		designation: "K-12 Coding Instructor",
		dated: "June 2019 - Aug 2019",
		logo: utd,
		companyLink: "https://www.utdallas.edu/k12/",
		description:
			"<p>Taught HTML, CSS, JavaScript and taught how to make games and animations with GameMaker Studio and Alice. The classes were well over 30 kids and depending on the actual class the students could range from grades K-12. For example taught kindergartens about simple circuits and magnets using Little Bits. Taught elementary kids how to make simple animations using JavaScript and use their creativity on their canvas. Taught middle school kids how to make games in GameMaker studio eventually creating a shooter game. In addition, taught middle school kids how to make animations using the software called Alice and allowed them to create their very own short stories. Finally, taught high school kids how to make static websites using HTML, CSS, and JavaScript and covered basic functions of making a website that include styling, animations, dynamic functions, navigation drawers, and more. The curriculum was not provided by the program and was solely created on the instructor for his/her class.   </p>"
	},
	{
		id: 3,
		name: "In-N-Out Burger",
		designation: "Store Associate",
		dated: "Jan 2018 - Aug 2019",
		logo: inNout,
		companyLink: "https://www.in-n-out.com/",
		description:
			"<p>Communicated proficiently with customers and co-workers to ensure no miscommunication occurred, getting customers their right order, and ensure their satisfaction in their visit. My duties well ranged from cashier, to host (which means I would open doors for customers, stock the dinning area, check up on customers periodically, and ensure their tables are cleaned). Other duties were taking drive-thru orders and drive-thru checkouts. The environment was very fast paced so communication was key to success.</p>"
	},
];
