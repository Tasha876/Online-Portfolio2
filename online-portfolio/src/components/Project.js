import React from "react";
import Summary from "./Summary";

const Project = (props) => {
    console.log(props)
    return (
        <article id="servicely" className="container-fluid d-flex align-items-center flex-column min-vh-100 mx-0">
            <div className="row w-100 my-auto"> 
                <div className="col-md-12">
                    <div className="jumbotron py-3 m-0">
                        <h2 className="display-3 display-md-4 text-dark text-center">{props.title}.</h2>
                        <div className="row">
                            <div className="col-md-6 img-fluid m-auto">         
                              <div className="frame mx-auto">
                                <img className="img-thumbnail rounded-0 d-block text-dark" src={process.env.PUBLIC_URL + props.image} alt={props.title}></img>
                              </div>
                              <div className="cover mx-auto"></div>
                            </div>
                            {props.description()}
                            {/* <Summary 
                                url={props.url}
                                description={props.description}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Project 