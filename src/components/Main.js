import React from "react"
import Project from "./Project"
import Navbar from "./Navbar";
import ProjectIntro from "./ProjectIntro"
import Splash from "./Splash";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import projects from "../componentFiles/projectList";
import useScript from "../hooks/useScript";
import ResumeCall from "./ResumeCall";
import './style.css'

const titles = projects.map(project => project.title)

const Main = (props) => {
    useScript("/assets/scripts/script.js");
    const projects = props.projects
    return (
        <div>
            <Navbar
            titles={titles}
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
                            {
                                projects.map(project => (

                            <Project
                                key={project.title}
                                title={project.title}
                                link={project.link}
                                image={project.image}
                                description={project.description}
                                summary={project.summary}
                                url={project.url}
                            />
                            ))
                            }
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