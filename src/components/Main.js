import React, { useEffect } from "react"
import Navbar from "./Navbar";
import ProjectIntro from "./ProjectIntro"
import Splash from "./Splash";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import ResumeCall from "./ResumeCall";
import Projects from "./Projects"
import NavMobile from "./NavMobile";
import Contacts from "./Contacts";
import Skills from "./Skills";
import './style.css'
import rise from "../script"

const Main = (props) => {

    return (
        <main id="main_page">
            <Navbar
            titles={props.titles}
            />
            <Contacts />
            <Splash />
            <AboutMe />
            <ProjectIntro 
              titles={props.titles}
            />
                <section id="portfolio" className="container-fluid d-flex align-items-center flex-column px-0">
                    <div className="row w-100 my-auto"> 
                        <div className="col-md-12 p-0">
  
                            <Projects
                                projects={props.projects}
                            />
                    </div>
                    </div>
                </section>
                <Skills />
                <ResumeCall />
                <Footer />
                <NavMobile/>
        </main>

    )
}

export default Main