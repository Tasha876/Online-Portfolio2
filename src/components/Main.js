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
        <div>
            <Navbar
            titles={props.titles}
            />
            <Splash />
            <AboutMe />
            <main>
                <section id="portfolio" className="container-fluid d-flex align-items-center flex-column px-0">
                    <div className="deep"></div>
                    <div className="row w-100 my-auto"> 
                        <div className="col-md-12">
                            <ProjectIntro 
                                titles={props.titles}
                            />
                            <Projects
                                projects={props.projects}
                            />
                    </div>
                    </div>
                </section>
                <ResumeCall />
            </main>
            <Footer />
        </div>

    )
}

export default Main