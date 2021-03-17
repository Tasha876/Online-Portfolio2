import React from "react"
import "./style.css"

const Resume = () => {
    return (
        <main class="container h-100">
        <header>
            <nav class="navbar nav bg-light text-light">
                <ul class="mx-auto">
                    <li class="lead"><a href="NFray_Resume.pdf" targer="_blank" rel="noreferrer" download="">Download PDF</a></li>
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#tech">Technical Skills</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#accomplishments">Selected Accomplishments</a></li>
                </ul>
            </nav>
            <h1 class="display-3 text-center">Natasha Fray</h1>
        <p class="text-center">130 Fakestreet St W, Unit 321 Waterloo ON, N2A 1A1<br></br>
        519-555-5555 | natasha.fray9@gmail.com<br></br>
        <a href="https://www.linkedin.com/in/natasha-fray-926ba61b6/" target="_blank" rel="noreferrer">LinkedIn</a> | <a href="https://github.com/Tasha876" target="_blank" rel="noreferrer">GitHub </a> | <a href="https://tasha876.github.io/Online-Portfolio/" target="_blank" rel="noreferrer">Portfolio</a></p>

        </header>
        <h2 id="profile" class="display-4" >PROFILE:</h2>
        <hr></hr>
        <p>Fullstack web developer with Bachelor of Mathematics and Fullstack Developer Certificate, having over 10 years’ experience working in customer focused environments. Adept at using creativity and technical skill to solve problems in many capacities.</p>

        <h2 id="tech" class="display-4">TECHNICAL SKILLS:</h2>

        <hr></hr>

        <section>
        <p><strong>LANGUAGES: </strong>HTML5, CSS3, JavaScript, MySQL, Mongo, Python 3</p> 
        <p><strong>APPLICATIONS: </strong>Bootstrap, jQuery, Node.js, Express.js, React.js</p>
        </section>

        <h2 id="education" class="display-4">EDUCATION:</h2>
        <hr></hr>
        <section>
            <article>
                <strong>Coding Bootcamp (in process)</strong>
                <p class="float-right">September 2020 – April 2021</p>
                <p>A focused 24-week program focused on gaining relevant technical programming skills.</p>
            </article>


            <article>
                <strong>Bachelor of Math</strong>
                <p class="float-right">	2015 – 2020</p>
                <p>University of Waterloo, Waterloo, ON</p>
            </article>

        </section>

        <h2 id="projects" class="display-4">PROJECTS:</h2>
        <hr></hr>
        <section>
            <article>
                <strong>Book Suggestion Application</strong>
                    <ul>
                        <li>Worked as a team to create an app that recommends novels to users based on books they have indicated to be reading or to have read as well as users’ ratings of those books.</li>
                        <li>Clean interface completed using bootstrap.</li>
                    </ul>
                </article>

            <article>
                <strong>Employee Summary Generator</strong>
                    <ul>
                        <li>Created a command line based interface that allows easy creation of an employee summary.</li>
                        <li>Uses Node.js and Inquirer to prompt users for data in order to build the website.</li>
                        <li>Uses Bootstrap for styling.</li>
                    </ul>
            </article>

            <article>
                <strong>Password generator</strong>
                    <ul>
                        <li>A JavaScript based strong password generator.</li>
                    </ul>
            </article>
        </section>

        <h2 id="experience" class="display-4">EXPERIENCE:</h2>

        <hr></hr>

        <section>
            <article>
                <strong>Data Entry Clerk</strong>
                    <p class="float-right">2014 – present</p>
                    <p>Nordia, Waterloo, ON</p>
                    <ul>
                        <li>Provide service to customers remotely. </li>
                        <li>Process orders for Bell representatives selling Bell products and new Bell Customers. </li>
                        <li>Gather ID and date of birth. </li>
                        <li>Answer questions for Bell representatives. </li>
                        <li>Problem solve to ensure that customers can get service in rural areas. </li>
                        <li>Quickly learn new promotions and codes.</li>
                    </ul>
            </article>

        </section>

        <h2 id="accomplishments" class="display-4">SELECTED ACCOMPLISHMENTS:</h2>

        <hr></hr>

        <section>
            <article>
                <ul>
                    <li>Created a JavaScript based “call flow” for other employees and myself to make it easier to provide the correct pricing information to customers.</li>
                    <li>Served as a “weekend prime” in case of an emergency while working weekends during university.</li>
                    <li>Consistently scores in the top quartiles.</li>
                </ul>
            </article>
        </section>
        </main>
    )
}

export default Resume