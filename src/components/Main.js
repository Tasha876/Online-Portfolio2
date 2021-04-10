import React, { useState, useEffect, useReducer, useRef } from "react"
import Project from "./Project"
import Navbar from "./Navbar";
import ProjectIntro from "./ProjectIntro"
import Splash from "./Splash";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import projects from "../componentFiles/projectList";
import useScript from "../hooks/useScript";
import ResumeCall from "./ResumeCall";
import Animated from "../hooks/animate"
import './style.css'

const titles = projects.map(project => project.title)

const Main = (props) => {
    useScript(process.env.PUBLIC_URL + "/assets/scripts/script.js");

    const projects = props.projects

    const init = (start) => {
        return {
            index: start,
            motion: ""
        }
    }

    const reducer = (state, action) => {
        switch(action.type) {
            case "forward": {
                return {
                    motion: "right", 
                    index: state.index + 1 < projects.length ? state.index + 1 : 0
                }
                
            }
            case "back": {
                return {
                    motion: "left",
                    index: state.index > 0 ? state.index - 1 : projects.length - 1
                }
            }
        }
    }

    const [state, setProjectIndex] = useReducer(reducer, 0, init)

    let project = projects[state.index]

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
                            <Project
                                motion={state.motion}
                                n={projects.length}
                                setProjectIndex={setProjectIndex}
                                index={state.index}
                                key={project.title}
                                title={project.title}
                                link={project.link}
                                image={project.image}
                                description={project.description}
                                summary={project.summary}
                                url={project.url}
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