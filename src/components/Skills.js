import React from "react"
import { technologies } from "../componentFiles/skillsList.json"

const Skills = () => {
    return (
        <article id="skills" className="container-fluid d-flex align-items-center flex-column p-md-2 p-0">
            <div className="row w-100 my-auto"> 
                <div className="col-md-12 p-md-2 p-0">
                    <div className="jumbotron pb-2 m-0">
                        <h1 className="display-3 text-dark text-center">Here's what I know.</h1> 
                        <div className="skills-list text-center">
                            { technologies.filter(({ skill }) => skill).map(({ name, desc, link }) => (
                                <h3 key={name} title={desc} className="d-inline">{name}</h3>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Skills