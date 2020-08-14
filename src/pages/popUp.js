import React from 'react';
import '../styles/popUp.css';
import '../styles/starRating.css'

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <div className='popup\_inner'>
                    <div  className="titleIcon"><button className="buttonIcon" onClick={this.props.closePopup}>&times;</button></div>
                    <div className="titleHeader" onClick={this.props.closePopup}>{this.props.text}</div>
                    <div className="content">
                        {this.props.type === "Basic Info" ?
                            (<div className="basicInfo">
                                    <h1 className="popUpTitle">Basic Info</h1>
                                    <h3 className="popUpSubTitle">Name:</h3><p>Alfredo Mejia</p>
                                    <h3 className="popUpSubTitle">University:</h3><p>University of Texas at Dallas (UTD)</p>
                                    <h3 className="popUpSubTitle">Major:</h3><p>Software Engineering</p>
                                    <h3 className="popUpSubTitle">GPA:</h3><p>3.9840 (4.0 Scale)</p>
                                    <h3 className="popUpSubTitle">Graduation:</h3><p>May 2021</p>
                                    <h3 className="popUpSubTitle">City:</h3><p>Dallas</p>
                                    <h3 className="popUpSubTitle">Email:</h3><p>a9.mejia@gmail.com</p>
                                    <h3 className="popUpSubTitle">LinkedIn:</h3><a href="https://www.linkedin.com/in/alfredo-mejia/" target="_blank">www.linkedin.com/in/alfredo-mejia</a>
                                </div>) : null}
                        {this.props.type === "Skills" ?
                            (<div className="skills">
                                <h1 className="popUpTitle">Skills</h1>
                                <div className="column">
                                    <h3 className="popUpSubTitle">Languages:</h3>
                                    <div className="starRating">
                                        <div className="skillAttribute"><p>C++</p></div>
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="starRating">
                                        <div className="skillAttribute"><p>Java</p></div>
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="starRating">
                                        <div className="skillAttribute"><p>JavaScript</p></div>
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                        <br/>
                                    </div>
                                    <br className="spaceNeeded"/>
                                    <div className="starRating">
                                        <div className="skillAttribute"><p>Python</p></div>
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="starRating">
                                        <div className="skillAttribute"><p>SQL</p></div>
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="starRating">
                                        <div className="skillAttribute"><p>SQLite3</p></div>
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="starRating">
                                        <div className="skillAttribute"><p>HTML</p></div>
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="starRating">
                                        <div className="skillAttribute"><p>CSS</p></div>
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <h3 className="popUpSubTitle">Frameworks/Tools:</h3>
                                    <div className="starRating">
                                        <div className="skillAttribute"><p>React</p></div>
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="starRating">
                                        <div className="skillAttribute"><p>React Native</p></div>
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <br/>
                                    <br className="spaceNeeded3"/>
                                    <div className="starRating">
                                        <div className="skillAttribute"><p>Angular</p></div>
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="starRating">
                                        <div className="skillAttribute"><p>Gradle</p></div>
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="starRating">
                                        <div className="skillAttribute"><p>Git</p></div>
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="starRating">
                                        <div className="skillAttribute"><p>Spring</p></div>
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <h3 className="popUpSubTitle">Other:</h3>
                                    <div className="starRating">
                                        <div className="skillAttribute"><p>Android Studio</p></div>
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <br/>
                                    <br className="spaceNeeded2"/>
                                    <div className="starRating">
                                        <div className="skillAttribute"><p>Android SDK</p></div>
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                    </div>
                                    <br/>
                                    <br className="spaceNeeded4"/>
                                    <div className="starRating">
                                        <div className="skillAttribute"><p>Firebase</p></div>
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                        <br/>
                                    </div>
                                    <div className="starRating">
                                        <div className="skillAttribute"><p>Github</p></div>
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                        <br/>
                                    </div>
                                    <div className="starRating">
                                        <div className="skillAttribute"><p>Linux/Unix</p></div>
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                                <div className="skillsSmallScreen">
                                    <h3 className="popUpSubTitle">Languages:</h3><p>C++, Java, JavaScript, Python, SQL, SQLite3, HTML, CSS</p>
                                    <h3 className="popUpSubTitle">Frameworks/Tools:</h3><p>React, React Native, Angular, Gradle, Git, Spring</p>
                                    <h3 className="popUpSubTitle">Other:</h3><p>Android Studio, AndroidSDK, Firebase, Github, Linux/Unix</p>
                                    <p><b><i>Expand window to see star rating for each skill.</i></b></p>
                                </div>
                            </div>) : null}
                        {this.props.type === "Interests" ?
                            (<div className="interests">
                                <h1 className="popUpTitle">Interests</h1>
                                <h3 className="popUpSubTitle">Hobbies:</h3>
                                    <ul>
                                        <li>Video Games (Battlefield, NBA2K, Call of Duty, FIFA, Madden)</li>
                                        <li>Sports (Basketball, Volleyball, Soccer, Running, Badminton)</li>
                                        <li>Volunteering</li>
                                        <li>Creating new projects</li>
                                        <li>Reading</li>
                                        <li>Watching Documentaries</li>
                                    </ul>
                                <h3 className="popUpSubTitle">Favorite Shows & Documentaries</h3>
                                    <ul>
                                        <li>Planet Earth</li>
                                        <li>Ancient Aliens</li>
                                        <li>World War II in Color</li>
                                        <li>Cold Case Files</li>
                                        <li>Cosmos</li>
                                        <li>Flash</li>
                                        <li>Arrow</li>
                                        <li>Dragon Ball Z</li>
                                        <li>The Last Kingdom</li>
                                    </ul>
                                <h3 className="popUpSubTitle">Favorite Movies:</h3>
                                    <ul>
                                        <li>Walkout</li>
                                        <li>Invasion of the Body Snatchers</li>
                                        <li>Under the Same Moon</li>
                                        <li>Casablanca</li>
                                        <li>Rush Hour</li>
                                        <li>Little Caesar</li>
                                        <li>Ladrón que roba a ladrón</li>
                                        <li>Ni de aquí ni de allá </li>
                                    </ul>
                                <h3 className="popUpSubTitle">Favorite Books:</h3>
                                <ul>
                                    <li>The Great Gatsby</li>
                                    <li>The Iliad of Homer (translated by Richmond Lattimore)</li>
                                    <li>The History of Western Philosophy by Bertrand Russell</li>
                                    <li>The 48 Laws of Power by Robert Greene</li>
                                    <li>Percy Jackson & the Olympians · The Lightning Thief by Rick Riordan</li>
                                </ul>
                            </div>) : null}
                    </div>

                </div>
            </div>
        );
    }
}

export default Popup;
