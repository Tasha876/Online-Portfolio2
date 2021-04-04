import React, { useEffect, useReducer, useState, useRef } from "react";
import Summary from "./Summary";
import $ from "jquery"

const RepeatDots = (props) => {
    let dots = []
    let index = props.i; let n = props.n
    for (let i = 0; i < n; i++) {
        index === i ? dots.push(<i class="fas fa-circle"></i>) : dots.push(<i class="far fa-circle"></i>)
    }
    return dots
}

const Project = (props) => {

    const prevProject = useRef($(".project > div"))

    const init = () => {
        return {motion: ""}
    }

    const prev = useRef()

    const reducer = (state, action) => {
        console.log(props.motion)
        prev.current = prevProject.current
        console.log(prev.current, $(".project > div"))
        switch(props.motion) {
            case "forward": {
                $(prev.current).removeClass("[class^=slide-]").addClass("slide-out-right")
                $(".project > div").removeClass("[class^=slide-]").addClass("slide-in-right")
                break
            }
            case "back": {
                $(prev.current).removeClass("[class^=slide-]").addClass("slide-out-left")
                $(".project > div").removeClass("[class^=slide-]").addClass("slide-in-left") 
                break
            }
        }
    }

    const [animation, setAnimation] = useReducer(reducer,"", init)

    useEffect(() => {
        prev.current = prevProject.current
        // debugger;
        setAnimation({animation: props.motion})
    })


    return (
        <article  key={props.title} id={props.title.replaceAll(" ","-")} className="container-fluid d-flex align-items-center flex-column min-vh-100 mx-0">
            <div className="row w-100 my-auto"> 
                <div className="col-md-12">
                <i onClick={()=>{ props.setProjectIndex({type:"back"})}} className="fas fa-chevron-left back"></i>
                <div class="project jumbotron p-0 m-0">
                    <div>
                        <h2 className="display-3 display-md-4 text-dark text-center">{props.title}.</h2>
                        <div className="row">
                            <div className="col-md-6 img-fluid m-auto">         
                              <div className="frame mx-auto">
                                <img className="img-thumbnail rounded-0 d-block text-dark" src={process.env.PUBLIC_URL + props.image} alt={props.title}></img>
                              </div>
                              <div className="cover mx-auto"></div>
                            </div>
                            <Summary
                                key={props.title}
                                title={props.title}
                                description={props.description}
                                summary={props.summary}
                                link={props.link}
                                url={props.url}
                                call={
                                    function () {
                                        return (
                                            <div className="text-center">
                                                {props.link("Check it out here")}
                                            </div>
                                        )}
                                    } 
                            />
                        </div>
                    </div>
                </div>
                </div>
                <i onClick={()=>props.setProjectIndex({type:"forward"})} className="fas fa-chevron-right forward"></i>
                </div>
            <div className="dots text-center"><RepeatDots n={props.n} i={props.index}/></div>
        </article>
    )
}

export default Project 