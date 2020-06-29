import phone from "../assets/images/projects/phone.svg"
import personalasst from "../assets/images/projects/personal_assistant.png"
import gameControl from "../assets/images/projects/gameController.png"
import website from "../assets/images/projects/website2.png"
import insta from "../assets/images/projects/insta.png"
import website2 from "../assets/images/projects/website.png"
import todo from "../assets/images/projects/todo.svg"
import todo2 from "../assets/images/projects/todo2.png"
import project from "../assets/images/projects/project.png"

export default [
    {
        id: 12,
        title: "Student Organization Mobile App",
        icon: phone,
        description: "Currently leading a team of 5 into the Agile process of creating a social media type app for student organizations on campuses. The app will include a great deal of options for students to explore and organizers to be prepared. So far, I have created a “Create Event” page for organizers. This page will accumulate any necessary information and store it in the database (Firebase). The page functions like any other form with input validation, error messages, and when completed shows a completion message and redirects it to the home page. My next task is to create a page for users to be able to visually see the event information. This will include retrieving information from the database.",
        githubPath: "https://github.com/AlfredoM9/student-org-app",
        demoPath: null,
        year: "2020 (In-Progress)",
        techUsed: "React Native, JS, Firebase"
    },
    {
        id: 11,
        title: "Nova",
        icon: personalasst,
        description: "Currently working on a console based personal assistant to help me record my workouts, my goals, and give me daily briefings of what I should do that current day. The program will respond to specific input which has been predefined and limited to very few actions and perform the necessary functions corresponding to that action requested. So far, I am working on storing the information of the user locally so whenever a user tries to run the program again it will have the information of the user and a daily motivational message should appear with the menu of actions.",
        githubPath: "https://github.com/AlfredoM9/Personal-Projects/tree/master/Nova%20(C%2B%2B)",
        demoPath: null,
        year: "2020 (In-Progress)",
        techUsed: "C++"
    },
    {
        id: 10,
        title: "Unreal Engine Game",
        icon: gameControl,
        description: "Created a series of three games in Unreal Engine using C++. The first game is a character that needs to pick up objects before its health drains down. If that occurs the player dies and respawns. The movement and entirely of the game were done solely in C++. The next game is breakthrough in which the ball moves and breaks bricks. Again, the entirely of the game was done solely in C++. Finally, the last game is Pac-Man. This game has the basic functionalities (enemies, respawning, teleporting on the edge of the map) of the original game and the project was done using C++ (70%) and the blueprints of Unreal Engine. ",
        githubPath: "https://github.com/AlfredoM9/Personal-Projects/tree/master/Unreal%20Engine%20Game",
        demoPath: null,
        year: "2020",
        techUsed: "Unreal Engine, C++"
    },
    {
        id: 9,
        title: "Personal Website",
        icon: website,
        description: "Modified existing code from a template provided by Rashmi Ap. The design and UI remained the same. The only modification done to this website is in the “About Page”. The three cards at the bottom previously redirected the user to one of the pages on top menu. However, that was changed to have a pop-up window instead to demonstrate either my basic info, skills, and interests. In addition, the skills pop up has a star rating with each skill and when the window is too small the star rating disappears. Future plans are to add a filter option to the projects in order to filter by language, date, etc.",
        githubPath: "https://github.com/AlfredoM9/AlfredoM9.github.io",
        demoPath: null,
        year: "2020",
        techUsed: "Gatsby.JS (based on React)"
    },
    {
        id: 8,
        title: "Instagram Project",
        icon: insta,
        description: "Created a program that reads in two files, one that should contain the names of your followers in social media and another that contains the names of the people you are following. The program then uses an algorithm to distinguish which names you are not following and the names of people you don’t follow you. This is then visually displayed to the user.",
        githubPath: "https://github.com/AlfredoM9/Personal-Projects/tree/master/InstaProject%5BJava%5D",
        demoPath: null,
        year: "2020",
        techUsed: "Java"
    },
    {
        id: 7,
        title: "Previous Personal Websites",
        icon: website2,
        description: "Developed a react app from scratch as my personal website. The website has a top menu navigation and a side bar menu (if the window is too small) and dynamically displayed data about me. However due to the styling of the website I changed the website for a professional website. In addition, a previous attempt to creating a personal website was done in simple HTML, CSS, and JS but the felt the website was too clustered.",
        githubPath: "https://github.com/AlfredoM9/Personal-Projects/tree/master/Personal%20Website%20(Previous%20Attempts)",
        demoPath: null,
        year: "2020",
        techUsed: "React, HTML, CSS, JS"
    },
    {
        id: 6,
        title: "GameZone Review App",
        icon: gameControl,
        description: "Created a react native app that allows a user to create a review, give it a star rating shown in the form of hearts (life), and post it to a feed. The home page is the home feed and there is a add button to display a modal. The modal then uses another component to display and store the state of the review. The review uses Formik and Yup (packages) that enables on submit function and validation. Then after the review as been submitted, the modal closes and the home page is updated in its feed with the new review. ",
        githubPath: "https://github.com/AlfredoM9/Personal-Projects/tree/master/Gamezone%20Review%20App",
        demoPath: null,
        year: "2020",
        techUsed: "React Native"
    },
    {
        id: 5,
        title: "Todo App (React Native)",
        icon: todo,
        description: "Developed a to-do app using react native. The react native app simply uses state and components to update the state shown in the home screen. As the user types in the insert box and clicks submit the state is updated and which updates the visuals in the home feed. In addition, when the to-do is clicked, the state is once more updated by deleting it and so is the visuals. If no to-dos are displayed, then a message saying “No to-dos” is shown to the user.",
        githubPath: "https://github.com/AlfredoM9/Personal-Projects/tree/master/Todo%20App%20(React%20Native)",
        demoPath: null,
        year: "2020",
        techUsed: "React Native"
    },
    {
        id: 4,
        title: "Todo App (React)",
        icon: todo2,
        description: "Created a to-do app using react. The to-do provides basic functionality of a to-do app, as the user can add to-dos which is shown in the home feed and it can be deleted from the home-feed. This is done by using the state of the component as it adds and delete to-dos the state is updated. Materialized CSS was used to style to to-do app.",
        githubPath: "https://github.com/AlfredoM9/Personal-Projects/tree/master/Todo%20App%20(React)",
        demoPath: null,
        year: "2020",
        techUsed: "React"
    },
    {
        id: 3,
        title: "First React Project",
        icon: project,
        description: "Developed a simple react app that enables you to add users to the list of friends. The form is on the home page and dynamically updates your home feed of list of friends. Each component that corresponds to an added friend, a button shows that enables the user to delete that friend. If deleted, the state is updated, and the feed is no longer shows that friend.",
        githubPath: "https://github.com/AlfredoM9/Personal-Projects/tree/master/First%20React%20Project",
        demoPath: null,
        year: "2020",
        techUsed: "React"
    },
    {
        id: 2,
        title: "SHPE Mobile App",
        icon: phone,
        description: "Created a Java mobile app with a team for the student organization called Society of Hispanic Professional Engineers at UTD. The UI was done by me using Adobe XD and after I integrated the UI into Android Studio. In addition, I used Google Authentication provided by Firebase to log in users into the application. The project was soon discontinued due to complications and became the now react native project called Student Organization App.",
        githubPath: "https://github.com/AlfredoM9/SHPEAPP",
        demoPath: null,
        year: "2019",
        techUsed: "Java, Firebase, Adobe XD, Android Studio"
    },
    {
        id: 1,
        title: "Uber App",
        icon: phone,
        description: "Created a Java mobile app that used Android Studio, GeoFire API, Google Maps API, and Firebase to successfully have a Uber-like application. I used Google Authentication to sign up and log in users and drivers. The users were allowed to request for rides which I used GeoFire API to acquire the coordinates of the locations being requested and Google Maps API to be able to use Google Maps within my application. The requests were saved in the database along with its coordinates. On the driver side the driver could accept the request and see the location of the user. The driver’s location was then periodically updated and saved to the database. Both the users and driver are able to see each other’s location. The user then gets a notification when the driver arrives, and the user is able to cancel a ride at any time. ",
        githubPath: "https://github.com/AlfredoM9/Personal-Projects/tree/master/UberApp",
        demoPath: null,
        year: "2019",
        techUsed: "Java, Firebase, Android Studio"
    },
    {
        id: 0,
        title: "SHPE Website",
        icon: website2,
        description: "Briefly developed a page for the SHPE at UTD website using PHP, HTML, CSS, and JS. The page was intended for members to be able to pay their dues. The page was created using HTML, CSS, and JS, and PHP was then used to connect the page to the server. In addition, I created manually SQL tables in the database for further expansion of our database schema. The page that I worked on was never merged to the main branch as the goals deviated from what the project manager wanted.",
        githubPath: "https://github.com/HepsonMS/shpe-utd-website",
        demoPath: null,
        year: "2019",
        techUsed: "HTML, CSS, JS, SQL, PHP"
    },


];
