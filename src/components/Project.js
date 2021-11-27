import React from "react";
import Summary from "./Summary";

const Project = (props) => {

    return (
        <article key={props.title} id={props.title.replaceAll(" ","-")} className="p-0 d-flex container-fluid p-md-2 p-0 mb-4 min-vh-100 mb-md-0">
            <div className="project my-auto">
                <h2 className="display-3 display-md-4 text-dark text-center">{props.title}.</h2>
                <div className="row mx-2">
                    <div className="col-md-6 img-fluid m-auto p-md-2 p-0">         
                        <div className="frame mx-auto">
                        <a href={props.url}>
                            <img className="img-thumbnail rounded-0 d-block text-dark" src={process.env.PUBLIC_URL + props.image} alt={props.title}></img>
                        </a>
                        </div>
                        <div className="cover mx-auto"></div>
                    </div>
                    <Summary
                        key={props.title + ' summary'}
                        title={props.title}
                        description={props.description}
                        summary={props.summary}
                        link={props.link}
                        url={props.url}
                        git={props.git}
                        call={
                            function () {
                                return (
                                    <div className="project-links text-center">
                                        {props.link("Project")} | {props.link("Github",props.git)} 
                                    </div>
                                )}
                            } 
                        technologies={props.technologies}
                    />
                </div>
            </div>
        </article>
    )
}

export default Project 