import communication from '../assets/images/projects/communication.png'
import sim from '../assets/images/projects/simultaneous.png'
import books from '../assets/images/projects/books.png'
import restroom from '../assets/images/projects/restroom.png'
import hardware from '../assets/images/projects/hardware.png'
import algorithm from '../assets/images/projects/algorithm.svg'
import fib from '../assets/images/projects/fib.png'
import cpp from '../assets/images/projects/c-plus-plus-logo.png'

export default [
    {
        id: 1,
        title: "Campus Communication App",
        icon: communication,
        description: "Created a campus communication app under a compact software engineering process. No coding was done but rather the goal of project was to understand the software engineering process that included the business landscape, requirements, design, the coding phase, testing, deployment, and maintenance of a project. First, as a team we decided an agile approach would be best suited for our project. Next, the areas that I worked on were acceptance criteria, agreement, functional requirements, sequence diagrams, and context diagrams to further understand our solution. In the coding phase, I specified the back-end technologies and in the testing phase specified our process which included test cases. Finally, I specified the transition of the solution from developers to the maintenance team.",
        githubPath: "https://github.com/AlfredoM9/UndergadProjects/tree/master/Campus%20Communication%20App%20(Software%20Engineering%20Process)",
        demoPath: null,
        year: "2020",
        techUsed: "No coding was done"
    },
    {
      id: 2,
      title: "Wonder Library",
      description: "Created a database using SQL for a library that has the following modules: person, employee, member, books, borrow details and payment. As a team, we first drew an EER diagram to have a conceptual design of the database. After, the EER diagram was converted into a logical design then to database design which we then normalized all tables to the third normal form. In addition, dependency diagrams were created for each table. Finally, SQL statements were created to create the database along with the specifications and constraints followed in our database design. As well as SQL statements for views specified by the client and any other queries needed in the problem description. All queries followed the constraints in the description and database design. ",
      icon: books,
      githubPath: "https://github.com/AlfredoM9/UndergadProjects/tree/master/Wonder%20Library",
      demoPath: null,
      year: "2020",
      techUsed: "Oracle SQL"
    },
    {
      id: 3,
      title: "Concurrent Prefix Sum",
      description: "Designed a concurrent program in C++ in a Linux system that computes the prefix sum of a given array in a file and exports the sum into an output file. This program was divided into two separate and independent programs to demonstrate the difference between the concurrency of threads and processes. The user was allowed to specify the number of threads and processes and algorithm accounted for any uneven amount of work to be done and threads/processes created. The processes were created using fork and it used my very own modification of an algorithm. The threads were created by the new thread function along with it, the boost barrier was used for concurrency control and ensure no overlapping critical sections.",
      icon: sim,
      githubPath: "https://github.com/AlfredoM9/UndergadProjects/tree/master/Concurrent%20Prefix%20Sum",
      demoPath: null,
      year: "2020",
      techUsed: "C++, Linux"
    },
    {
        id: 4,
        title: "Unisex Bathroom",
        description: "Created a Java solution using semaphores to the unisex bathroom problem in which the user specifies the number of toilets available in a restroom. The problem is that men can enter if toilets are available and same goes for women, but one gender cannot enter if the opposite gender is in the restroom. The solution was done using threads and semaphores. The solution is also deadlock free so the threads should concurrently be doing work dependent on the semaphore.",
        icon: restroom,
        githubPath: "https://github.com/AlfredoM9/UndergadProjects/tree/master/Unisex%20Bathroom",
        demoPath: null,
        year: "2020",
        techUsed: "Java"
    },
    {
        id: 4,
        title: "MIPS Assembly Language Projects",
        description: "Created multiple MIPS projects ranging from simple use of registers for input data of the users and output to the console, to using system calls to get the input from the users. Simple calculations were also done to the registers along with the use of other system calls to display a dialogue box. Functions, loops, conversions, and more were used for many programs such as calculating a BMI. Finally, buffers in memory were used to read from input files and many algorithms were used in MIPS such as selection sort. Please see GitHub for more specific details.",
        icon: hardware,
        githubPath: "https://github.com/AlfredoM9/UndergadProjects/tree/master/MIPS%20Projects",
        demoPath: null,
        year: "2019",
        techUsed: "MIPS"
    },
    {
        id: 5,
        title: "Java Algorithm Projects",
        description: "Created multiple Java programs that range from data structures and algorithms. Created Java programs that used the Sieve of Erotosthenes algorithm and the Quick Sort algorithm to using data structures like the linked lists, binary search trees, and hash tables. Please see the GitHub for more details of each project.",
        icon: algorithm,
        githubPath: "https://github.com/AlfredoM9/UndergadProjects/tree/master/Java%20Algorithm%20Projects",
        demoPath: null,
        year: "2019",
        techUsed: "Java"
    },
    {
        id: 6,
        title: "Fibonacci Sequence",
        description: "Created a program in C in a Linux system that perform two different functions via different threads. One of the functions will take a positive integer N, as the parameter and find the sum of these first N consecutive integers. The other function will also take a positive integer N, but will calculate and store an array of integers following the Fibonacci sequence of length N. Once both threads are finished a message will appear indicating they are finished followed by main outputting the sum of the N and the output of the Fibonacci sequence.",
        icon: fib,
        githubPath: "https://github.com/AlfredoM9/UndergadProjects/tree/master/Fibonacci%20Sequence",
        demoPath: null,
        year: "2019",
        techUsed: "C, Linux"
    },
    {
        id: 7,
        title: "C++ Programs",
        description: "Created numerous C++ projects throughout my years at my university. Ranging from learning how to code in C++ by using simple variables to more complex programs that are object oriented and use polymorphism. In addition, many data structures have been used throughout the C++ projects such as linked lists, trees, and more. See GitHub for more details.",
        icon: cpp,
        githubPath: "https://github.com/AlfredoM9/UndergadProjects/tree/master/CPP%20Programs",
        demoPath: null,
        year: "2018 - 2019",
        techUsed: "C++"
    },
]
