import React from "react"
import Project from "./Project"

const Projects = ({projects}) => {

    return (
        <div className="container-fluid d-flex align-items-center flex-column min-vh-100 mx-0 p-md-2 p-0">
        <div className="row min-vh-100 w-100">
            <div className="col-md-12 my-5">
                { projects.map((project,i) => (
                    <Project
                        key={project.title}
                        index={i}
                        title={project.title}
                        link={project.link}
                        image={project.image}
                        description={project.description}
                        summary={project.summary}
                        url={project.url}
                />
                ))}
                </div>
            </div>
        </div>
    )
}

export default Projects