import React from "react"
import Navbar from "./Navbar";
import ProjectIntro from "./ProjectIntro"
import Splash from "./Splash";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import useScript from "../hooks/useScript";
import ResumeCall from "./ResumeCall";
import Projects from "./Projects"
import './style.css'


const Main = (props) => {
    useScript(process.env.PUBLIC_URL + "/assets/scripts/script.js");

    return (
        <main>
            <Navbar
            titles={props.titles}
            />
            <Splash />
            <AboutMe />
            <ProjectIntro 
              titles={props.titles}
            />
            {/* <main> */}
                <section id="portfolio" className="container-fluid d-flex align-items-center flex-column px-0">
                    <div className="row w-100 my-auto"> 
                        <div className="col-md-12 p-0">
  
                            <Projects
                                projects={props.projects}
                            />
                    </div>
                    </div>
                </section>
                <ResumeCall />
            {/* </main> */}
            <Footer />
        </main>

    )
}

export default Main