import React from "react"

const getRef = (title) => {
    return `#${title.replaceAll(" ", "-")}`
}

const ProjectIntro = (props) => {
    return (
        <article id="toc" className="container-fluid d-flex align-items-center flex-column p-md-2 p-0">
            <div className="row my-auto mx-auto"> 
                <div className="col-md-12 p-md-2 p-0">
                    <div className="pb-2 m-0">
                        <h1 className="display-3 text-dark text-center">Here's what I've done.</h1> 
                        <div className="project-list text-center">
                            { props.titles.map(title => (
                                <h3 key={title} className="d-inline"><a className="text-nowrap" href={getRef(title)}>{title}</a></h3>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProjectIntro