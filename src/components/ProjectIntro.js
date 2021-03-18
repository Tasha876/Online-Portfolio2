import React from "react"

const getRef = (title) => {
    return `#${title.replace(" ", "-")}`
}

const ProjectIntro = (props) => {
    return (
        <article id="toc" class="container-fluid d-flex align-items-center flex-column">
            <div class="row w-100 my-auto"> 
                <div class="col-md-12">
                    <div class="jumbotron pb-2 m-0">
                        <h1 class="display-3 text-dark text-center">Here's what I've done.</h1> 
                        <div class="project-list text-center">
                            { props.titles.map(title => (
                                <h3 class="d-inline"><a class="text-nowrap" href={getRef(title)}>{title}</a></h3>
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