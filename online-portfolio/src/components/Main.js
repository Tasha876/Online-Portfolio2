import React from "react"
import Project from "./Project"
import Summary from "./Summary"
import ProjectIntro from "./ProjectIntro"

const Main = (props) => {
    const projects = props.projects
    return (
        <main>
            <section id="portfolio" class="container-fluid d-flex align-items-center flex-column px-0">
                <div class="deep"></div>
                <div class="row w-100 my-auto"> 
                    <div class="col-md-12">
          <ProjectIntro 
            titles={props.titles}
          />
        {
            projects.map(project => (

                            <Project
                                title={project.title}
                                image={project.image}
                                description={project.description}
                                url={project.url}
                            />
            ))
        }
                </div>
                </div>
            </section>
        </main>

    )
}

export default Main