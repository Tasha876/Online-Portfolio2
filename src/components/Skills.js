import React from "react"
import { technologies } from "../componentFiles/skillsList.json"

const Skills = () => {
    return (
        <section id="skills" className="container-fluid d-flex align-items-center flex-column p-md-2 p-0">
            <div className="row w-100 my-auto"> 
                <div className="col-md-12 p-md-2 p-0">
                    <div className="pb-2 m-0">
                        <h2 className="display-3 text-dark text-center">Here's what I know.</h2> 
                        <div className="skills-list text-center">
                            { technologies.filter(({ skill }) => skill).map(({ name, desc, link }) => (
                                <h4 key={name} aria-label={desc} className="d-inline">{name}</h4>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills