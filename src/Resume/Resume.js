import React, { useEffect } from "react"
import "./style.css"
import $ from "jquery"
import { Link, useHistory, useLocation } from "react-router-dom"

const style = {
    main: {
        fontFamily: "Trebuchet MS, Lucida Sans Unicode, 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    }
};

const Resume = ({ isMain }) => {

    // let location = useLocation()

    let history = useHistory()
    isMain.current = false

    useEffect(() => {
        $(".sun_moon").remove()
        window.scrollTo(0, 0);
        console.log("1",history.location.pathname)
        if (/resume/.test(!history.location.pathname)) history.push(history.location)
        console.log("2",history)
      }, []);
    
    return (
        <div id="resume_page">
        <nav className="navbar nav bg-light text-light">
                <ul>
                    <li className="lead"><Link to={"../NFray_Resume.pdf"} target="_blank" download>Download PDF</Link></li>
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#tech">Technical Skills</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                </ul>
            </nav>
        <main className="container h-100" style={style.main}>
        <header>
            <h1 className="display-3 text-center">Natasha Fray</h1>
        <p className="text-center">
        Waterloo ON<br/>
        {/* 519-555-5555  */}
        <a href={"mailto:natasha.fray9@gmail.com"}>natasha.fray9@gmail.com</a><br/>
        <a href="https://www.linkedin.com/in/natasha-fray/" target="_blank" rel="noreferrer">LinkedIn</a> | <a href="https://github.com/Tasha876" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://tasha876.github.io/Online-Portfolio2/" target="_blank" rel="noreferrer">Portfolio</a></p>

        </header>
        <h2 id="profile" className="display-4" >PROFILE:</h2>
        <hr></hr>
        <p>Frontend web developer with Bachelor of Mathematics and Fullstack Developer Certificate, having extensive experience working in customer focused environments. Adept at using creativity and technical skill to solve problems in many capacities.</p>

        <h2 id="tech" className="display-4">TECHNICAL SKILLS:</h2>

        <hr></hr>

        <section>
        <p><strong>LANGUAGES: </strong>HTML5, CSS3, JavaScript, MySQL, Mongo, Python 3.</p> 
        <p><strong>APPLICATIONS: </strong>Bootstrap, jQuery, Node.js, Express.js, React.js, Git.</p>
        </section>

        <h2 id="projects" className="display-4">PROJECTS:</h2>
        <hr></hr>
        <section>
            <article>
                <strong><a href={"https://novelty.herokuapp.com"} target="_blank" rel="noreferrer">Book Suggestion Application</a></strong> | <a href="https://github.com/Tasha876/NOVELty-1">Github</a>
                    <ul>
                        <li>Worked as a team to create an app that recommends novels to users based on books they have indicated to be reading or to have read as well as users’ ratings of those books.</li>
                        <li>Clean interface completed using Bootstrap.</li>
                    </ul>
                </article>

            <article>
                <strong><a href={"https://github.com/Tasha876/Employee-Summary"} target="_blank" rel="noreferrer">Employee Summary Generator</a></strong>
                    <ul>
                        <li>Created a command line based interface that allows easy creation of an employee summary.</li>
                        <li>Uses Node.js and Inquirer to prompt users for data in order to build the website.</li>
                        <li>Uses Bootstrap for styling.</li>
                    </ul>
            </article>

            <article>
                <strong><a href={"https://tasha876.github.io/Password-Generator/"} target="_blank" rel="noreferrer">Password generator</a></strong> | <a href="https://github.com/Tasha876/Password-Generator">Github</a>
                    <ul>
                        <li>A JavaScript based strong password generator.</li>
                        <li>Clean and easy to use user interface.</li>
                    </ul>
            </article>
        </section>

        <h2 id="education" className="display-4">EDUCATION:</h2>
        <hr></hr>
        <section>
            <article>
                <strong>Coding Bootcamp</strong>
                <p className="float-right">2020 – 2021</p>
                <p>University of Toronto School of Continuing Studies, Toronto, ON</p>
                <p>A focused 24-week program focused on gaining relevant technical programming skills.</p>
            </article>


            <article>
                <strong>Bachelor of Math</strong>
                <p className="float-right">	2015 – 2020</p>
                <p>University of Waterloo, Waterloo, ON</p>
            </article>

        </section>

        <h2 id="experience" className="display-4">EXPERIENCE:</h2>

        <hr></hr>

        <section>
            <article>
                <strong>Data Entry Clerk</strong>
                    <p className="float-right">2014 – present</p>
                    <p>Nordia, Waterloo, ON</p>

                    <strong id="accomplishments">Selected Accomplishments:</strong>
                    <section>
                        <article>
                            <ul>
                                <li>Created a JavaScript based “call flow” for other employees and myself to make it easier to provide the correct pricing information to customers.</li>
                                <li>Served as a “weekend prime” in case of an emergency while working weekends during university.</li>
                                <li>Consistently scores in the top quartiles.</li>
                            </ul>
                        </article>
                    </section>
                    <strong id="accomplishments">Duties:</strong>
                    <ul>
                        <li>Provide service to customers remotely. </li>
                        <li>Process orders for Bell representatives selling Bell products and new Bell Customers. </li>
                        <li>Answer questions for Bell representatives. </li>
                        <li>Problem solve to ensure that customers can get service in rural areas. </li>
                        <li>Quickly learn new promotions and codes.</li>
                    </ul>
            </article>

        </section>

        </main>
        </div>
    )
}

export default Resume